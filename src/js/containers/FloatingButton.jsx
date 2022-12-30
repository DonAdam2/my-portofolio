import React, { Fragment, useEffect, useRef, useState } from 'react';
//custom hooks
import useTouchScreenDetect from '../customHooks/UseTouchScreenDetect';
import useOutsideClick from '../customHooks/UseOutsideClick';
//constants
import { setTimeoutRAF } from '../constants/helpers';

const FloatingButton = ({ location, buttons, mainButtonIcon, isMenuBtnIdentifier }) => {
  const [isHover, setIsHover] = useState(false),
    [isMenuIdentifier, setIsMenuIdentifier] = useState(true),
    menuIdentifierCancelPauseTimer = useRef(() => {}),
    registerMenuIdentifierCancelPauseTimer = (fn) => (menuIdentifierCancelPauseTimer.current = fn),
    isHasTouch = useTouchScreenDetect(),
    ref = useRef(null),
    radius = 25,
    buttonsLength = buttons.length,
    navigatorDimensions = radius * buttonsLength * 1.6,
    circleRadius = radius * buttonsLength;

  useEffect(() => {
    return () => {
      menuIdentifierCancelPauseTimer.current();
    };
  }, []);

  useOutsideClick(ref, () => {
    if (isHasTouch) {
      hideFloatingBtnMenu();
    }
  });

  const showMenuIdentifier = () => {
    setTimeoutRAF(
      () => {
        setIsMenuIdentifier(true);
      },
      (buttons.length * 200) / 2,
      registerMenuIdentifierCancelPauseTimer
    );
  };

  const showFloatingBtnMenu = () => {
    setIsHover(true);
    setIsMenuIdentifier(false);
  };

  const hideFloatingBtnMenu = () => {
    setIsHover(false);
    showMenuIdentifier();
  };

  const setNavigatorLocation = () => {
    switch (location) {
      case 'top-left':
        return {
          container: {
            top: 4,
            right: 'auto',
            bottom: 'auto',
            left: -7,
          },
          mainButton: {
            top: 0,
            right: 'auto',
            bottom: 'auto',
            left: 0,
          },
        };
      case 'top-right':
        return {
          container: {
            top: 10,
            right: 10,
            bottom: 'auto',
            left: 'auto',
          },
          mainButton: {
            top: 0,
            right: 0,
            bottom: 'auto',
            left: 'auto',
          },
        };
      case 'bottom-left':
        return {
          container: {
            top: 'auto',
            right: 'auto',
            bottom: 10,
            left: 10,
          },
          mainButton: {
            top: 'auto',
            right: 'auto',
            bottom: 0,
            left: 0,
          },
        };
      default:
        return {
          container: {
            top: 'auto',
            right: 10,
            bottom: 10,
            left: 'auto',
          },
          mainButton: {
            top: 'auto',
            right: 0,
            bottom: 0,
            left: 'auto',
          },
        };
    }
  };

  // (x, y) = (r * cos(θ), r * sin(θ))
  const setButtonPosition = (index) => {
    switch (location) {
      case 'top-left':
        return {
          top: Math.round(circleRadius * Math.sin((Math.PI / 2 / (buttonsLength - 1)) * index)),
          right: 'auto',
          bottom: 'auto',
          left: Math.round(circleRadius * Math.cos((Math.PI / 2 / (buttonsLength - 1)) * index)),
        };
      case 'top-right':
        return {
          top: Math.round(circleRadius * Math.sin((Math.PI / 2 / (buttonsLength - 1)) * index)),
          right: Math.round(circleRadius * Math.cos((Math.PI / 2 / (buttonsLength - 1)) * index)),
          bottom: 'auto',
          left: 'auto',
        };
      case 'bottom-left':
        return {
          top: 'auto',
          right: 'auto',
          bottom: Math.round(circleRadius * Math.sin((Math.PI / 2 / (buttonsLength - 1)) * index)),
          left: Math.round(circleRadius * Math.cos((Math.PI / 2 / (buttonsLength - 1)) * index)),
        };
      default:
        return {
          top: 'auto',
          right: Math.round(circleRadius * Math.cos((Math.PI / 2 / (buttonsLength - 1)) * index)),
          bottom: Math.round(circleRadius * Math.sin((Math.PI / 2 / (buttonsLength - 1)) * index)),
          left: 'auto',
        };
    }
  };

  const mouseEnterHandler = () => {
    showFloatingBtnMenu();
  };

  const mouseLeaveHandler = () => {
    hideFloatingBtnMenu();
  };

  const clickHandler = (handler) => {
    hideFloatingBtnMenu();
    handler();
  };

  const { container, mainButton } = setNavigatorLocation();
  return (
    <>
      {buttonsLength > 1 ? (
        <>
          <div
            ref={ref}
            onMouseEnter={!isHasTouch ? mouseEnterHandler : () => {}}
            onMouseLeave={!isHasTouch ? mouseLeaveHandler : () => {}}
            className="toggle-nav"
            style={{
              top: container.top,
              right: container.right,
              bottom: container.bottom,
              left: container.left,
              width: isHover ? navigatorDimensions : 40,
              height: isHover ? navigatorDimensions : 40,
            }}
          >
            <button
              className="main-button"
              style={{
                top: mainButton.top,
                right: mainButton.right,
                bottom: mainButton.bottom,
                left: mainButton.left,
              }}
              onClick={isHasTouch ? mouseEnterHandler : () => {}}
              aria-label="Main menu button"
            >
              {mainButtonIcon}
            </button>
            {buttons.map((el, i) => (
              <Fragment key={i}>
                <button
                  className="sub-button"
                  style={{
                    opacity: isHover ? 0.9 : 0,
                    top: isHover
                      ? setButtonPosition(i).top
                      : setButtonPosition(i).top === 'auto'
                      ? 'auto'
                      : 0,
                    right: isHover
                      ? setButtonPosition(i).right
                      : setButtonPosition(i).right === 'auto'
                      ? 'auto'
                      : 0,
                    bottom: isHover
                      ? setButtonPosition(i).bottom
                      : setButtonPosition(i).bottom === 'auto'
                      ? 'auto'
                      : 0,
                    left: isHover
                      ? setButtonPosition(i).left
                      : setButtonPosition(i).left === 'auto'
                      ? 'auto'
                      : 0,
                    transition: `all 0.2s 0.${i + 1}s ease`,
                  }}
                  onClick={() => clickHandler(el.click)}
                >
                  {el.icon}
                </button>
              </Fragment>
            ))}
          </div>
          {isMenuBtnIdentifier && isMenuIdentifier && (
            <div className="menu-identifier">
              <i className="far fa-hand-point-left" /> Menu
            </div>
          )}
        </>
      ) : (
        <div
          className="toggle-nav"
          style={{
            top: container.top,
            right: container.right,
            bottom: container.bottom,
            left: container.left,
            width: 150,
          }}
        >
          Must be more than one button
        </div>
      )}
    </>
  );
};

export default FloatingButton;
