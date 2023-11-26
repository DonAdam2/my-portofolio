import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
//custom hooks
import useTouchScreenDetect from '@/js/customHooks/UseTouchScreenDetect';
//constants
import { getElementOffset, getScrollParent } from '@/js/constants/helpers';
//components
import Portal from '@/js/components/shared/Portal';
import ConditionalWrapper from '@/js/components/shared/ConditionalWrapper';
import ClickAwayWrapper from '@/js/components/shared/ClickAwayWrapper';

const Tooltip = ({
  tooltipContent,
  position,
  color,
  backgroundColor,
  disabled,
  isParentFixed,
  customPosition,
  isDisplayTooltipIndicator = true,
  trigger = 'hover',
  className = '',
  children,
}) => {
  const isHasTouch = useTouchScreenDetect(),
    [show, setShow] = useState(false),
    [styles, setStyles] = useState({}),
    tooltipWrapperRef = useRef(null),
    tooltipMessage = useRef(null),
    space = 15,
    [childrenWidth, setChildrenWidth] = useState(undefined),
    [childrenHeight, setChildrenHeight] = useState(undefined),
    [showTopTooltip, setShowTopTooltip] = useState(false),
    [showLeftTooltip, setShowLeftTooltip] = useState(false),
    [wrapperParentUpdated, setWrapperParentUpdated] = useState({
      top: 0,
      left: 0,
    }),
    availableTooltipPositions = useMemo(
      () => ({
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
      }),
      []
    ),
    isHoverTrigger = useMemo(() => trigger === 'hover', [trigger]),
    isClickTrigger = useMemo(() => trigger === 'click', [trigger]);

  const showTooltip = () => {
    if (!show) {
      setShow(true);
      setStyles(getStylesList());
    }
  };

  const hideTooltip = () => {
    setShow(false);
  };

  //set children height if position is top
  useEffect(() => {
    if (show && childrenHeight === undefined && position === availableTooltipPositions.top) {
      setChildrenHeight(tooltipMessage.current?.offsetHeight);
    }
  }, [childrenHeight, show, position, availableTooltipPositions.top]);

  //update tooltip message visibility if position is top
  useEffect(() => {
    if (childrenHeight !== undefined && position === availableTooltipPositions.top) {
      setShowTopTooltip(true);
    }
  }, [childrenHeight, position, availableTooltipPositions.top]);

  //set children width if position is left
  useEffect(() => {
    if (show && childrenWidth === undefined && position === availableTooltipPositions.left) {
      setChildrenWidth(tooltipMessage.current?.offsetWidth);
    }
  }, [childrenWidth, show, position, availableTooltipPositions.left]);

  //update tooltip message visibility if position is left
  useEffect(() => {
    if (childrenWidth !== undefined && position === availableTooltipPositions.left) {
      setShowLeftTooltip(true);
    }
  }, [childrenWidth, position, availableTooltipPositions.left]);

  const getStylesList = useCallback(() => {
    if (tooltipWrapperRef.current) {
      const wrapperRect = tooltipWrapperRef.current.getBoundingClientRect(),
        wrapperRef = tooltipWrapperRef.current,
        scrollableParent = getScrollParent(wrapperRef),
        style = {
          //bottom
          left: Math.max(
            space,
            getElementOffset(tooltipWrapperRef.current).left + wrapperRect.width / 2
          ),
          top:
            getElementOffset(tooltipWrapperRef.current).top +
            wrapperRect.height +
            (isDisplayTooltipIndicator ? space : space / 2),
        };
      if (position === availableTooltipPositions.top) {
        style.top = Math.max(
          space,
          getElementOffset(tooltipWrapperRef.current).top - (childrenHeight || 0) - space
        );
      } else if (position === availableTooltipPositions.right) {
        style.top = getElementOffset(tooltipWrapperRef.current).top + wrapperRect.height / 2;
        style.left = Math.max(space, wrapperRect.right + space / 2);
      } else if (position === availableTooltipPositions.left) {
        style.top = getElementOffset(tooltipWrapperRef.current).top + wrapperRect.height / 2;
        style.left = Math.max(
          space,
          getElementOffset(tooltipWrapperRef.current).left - ((childrenWidth || 0) + space)
        );
      }
      if (!isParentFixed && scrollableParent && wrapperParentUpdated) {
        style.top -= scrollableParent.scrollTop;
      }
      return style;
    }
    return {
      top: 0,
      left: 0,
    };
  }, [
    childrenHeight,
    position,
    childrenWidth,
    wrapperParentUpdated,
    isParentFixed,
    isDisplayTooltipIndicator,
    availableTooltipPositions.top,
    availableTooltipPositions.right,
    availableTooltipPositions.left,
  ]);

  useEffect(() => {
    //required for the first render and on scroll
    if (getStylesList().top !== styles.top || getStylesList().left !== styles.left) {
      setStyles(getStylesList());
    }
  }, [getStylesList, styles.left, styles.top]);

  const updateScrollableParentScroll = ({ target: { scrollTop, scrollLeft } }) => {
    setWrapperParentUpdated({
      top: scrollTop,
      left: scrollLeft,
    });
  };

  useEffect(() => {
    if (tooltipWrapperRef.current) {
      const wrapperRef = tooltipWrapperRef.current,
        scrollableParent = getScrollParent(wrapperRef);

      window.addEventListener('resize', updateScrollableParentScroll);

      scrollableParent.addEventListener('scroll', updateScrollableParentScroll);

      return () => {
        window.removeEventListener('resize', updateScrollableParentScroll);

        scrollableParent.removeEventListener('scroll', updateScrollableParentScroll);
      };
    }
  }, []);

  return (
    <ConditionalWrapper
      condition={isClickTrigger}
      initialWrapper={(children) => <>{children}</>}
      wrapper={(children) => (
        <ClickAwayWrapper onClickAwayCallback={hideTooltip}>{children}</ClickAwayWrapper>
      )}
    >
      <span
        className={`tooltip ${disabled ? 'is-disabled' : ''}`}
        onMouseEnter={
          isHoverTrigger ? (disabled ? undefined : isHasTouch ? undefined : showTooltip) : undefined
        }
        onMouseLeave={
          isHoverTrigger ? (disabled ? undefined : isHasTouch ? undefined : hideTooltip) : undefined
        }
        onTouchStart={
          isHoverTrigger ? (disabled ? undefined : isHasTouch ? showTooltip : undefined) : undefined
        }
        onTouchEnd={
          isHoverTrigger ? (disabled ? undefined : isHasTouch ? hideTooltip : undefined) : undefined
        }
        onClick={isClickTrigger ? (disabled ? undefined : showTooltip) : undefined}
        ref={tooltipWrapperRef}
      >
        <Portal wrapperElement="span" wrapperElementId="tooltip">
          {show && tooltipContent && (
            <span
              ref={tooltipMessage}
              className={`tooltip-message 
              ${className}
 on-${position ? position : availableTooltipPositions.top} ${
   isDisplayTooltipIndicator ? 'is-indicator' : ''
 }`}
              dangerouslySetInnerHTML={{ __html: tooltipContent }}
              style={{
                color: color ? color : '#ffffff',
                '--background-color': backgroundColor ? backgroundColor : 'rgba(97, 97, 97, 0.92)',
                ...(customPosition ? customPosition : styles),
                ...(position === availableTooltipPositions.left ||
                position === availableTooltipPositions.top
                  ? { visibility: showLeftTooltip || showTopTooltip ? 'visible' : 'hidden' }
                  : {}),
              }}
            />
          )}
        </Portal>
        {children}
      </span>
    </ConditionalWrapper>
  );
};

export default Tooltip;
