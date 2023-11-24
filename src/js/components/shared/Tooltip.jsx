import { useCallback, useEffect, useRef, useState } from 'react';
//custom hooks
import useTouchScreenDetect from '@/js/customHooks/UseTouchScreenDetect';
//constants
import { getElementOffset, getScrollParent } from '@/js/constants/helpers';
//components
import Portal from '@/js/components/shared/Portal';

export const availableTooltipPositions = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

const Tooltip = ({
  tooltipContent,
  position,
  color,
  backgroundColor,
  disabled,
  isParentFixed,
  customPosition,
  isDisplayTooltipIndicator = true,
  children,
}) => {
  const isHasTouch = useTouchScreenDetect(),
    [show, setShow] = useState(false),
    [styles, setStyles] = useState({}),
    tooltipWrapperRef = useRef(null),
    tooltipMessage = useRef(null),
    space = 10,
    [childrenWidth, setChildrenWidth] = useState(undefined),
    [showLeftTooltip, setShowLeftTooltip] = useState(false),
    [wrapperParentUpdated, setWrapperParentUpdated] = useState({
      top: 0,
      left: 0,
    });

  const showTooltip = () => {
    setShow(true);
    setStyles(getStylesList());
  };

  const hideTooltip = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show && childrenWidth === undefined && position === availableTooltipPositions.left) {
      setChildrenWidth(tooltipMessage.current?.offsetWidth);
    }
  }, [childrenWidth, show, position]);

  useEffect(() => {
    if (childrenWidth !== undefined && position === availableTooltipPositions.left) {
      setStyles((prev) => ({ ...prev, left: prev.left - childrenWidth }));
      setShowLeftTooltip(true);
    }
  }, [childrenWidth, position]);

  const getStylesList = useCallback(() => {
    if (tooltipWrapperRef.current) {
      const wrapperRect = tooltipWrapperRef.current.getBoundingClientRect(),
        wrapperRef = tooltipWrapperRef.current,
        scrollableParent = getScrollParent(wrapperRef),
        style = {
          //bottom
          left: Math.max(space, wrapperRect.left + wrapperRect.width / 2),
          top: getElementOffset(tooltipWrapperRef.current).top + wrapperRect.height + space,
        };
      if (position === availableTooltipPositions.top) {
        style.top = getElementOffset(tooltipWrapperRef.current).top - space * 4;
      } else if (position === availableTooltipPositions.right) {
        style.top = getElementOffset(tooltipWrapperRef.current).top + wrapperRect.height / 2;
        style.left = Math.max(space, wrapperRect.right + space);
      } else if (position === availableTooltipPositions.left) {
        style.top = getElementOffset(tooltipWrapperRef.current).top + wrapperRect.height / 2;
        style.left = Math.max(space, wrapperRect.left - (childrenWidth || 0) - space);
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
  }, [position, childrenWidth, wrapperParentUpdated, isParentFixed]);

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
    <span
      className="tooltip"
      onMouseEnter={disabled ? undefined : isHasTouch ? undefined : showTooltip}
      onMouseLeave={disabled ? undefined : isHasTouch ? undefined : hideTooltip}
      onTouchStart={disabled ? undefined : isHasTouch ? showTooltip : undefined}
      onTouchEnd={disabled ? undefined : isHasTouch ? hideTooltip : undefined}
      ref={tooltipWrapperRef}
    >
      <Portal wrapperElement="span" wrapperElementId="tooltip">
        {show && tooltipContent && (
          <span
            ref={tooltipMessage}
            className={`tooltip-message 
 on-${position ? position : availableTooltipPositions.top} ${
   isDisplayTooltipIndicator ? 'is-indicator' : ''
 }`}
            dangerouslySetInnerHTML={{ __html: tooltipContent }}
            style={{
              color: color ? color : '#ffffff',
              '--background-color': backgroundColor ? backgroundColor : 'rgba(97, 97, 97, 0.92)',
              ...(customPosition ? customPosition : styles),
              // ...styles,
              ...(position === availableTooltipPositions.left
                ? { visibility: showLeftTooltip ? 'visible' : 'hidden' }
                : {}),
            }}
          />
        )}
      </Portal>
      {children}
    </span>
  );
};

export default Tooltip;
