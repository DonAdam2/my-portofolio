import { useRef } from 'react';
//custom hooks
import useLockScroll from '@/js/customHooks/UseLockScroll';
import useEventListener from '@/js/customHooks/UseEventListener';
//icons
import XIcon from '@/js/components/icons/XIcon';
//components
import Portal from '@/js/components/shared/Portal';
import Button from '@/js/components/shared/Button';

const Modal = ({ header, footer, wrapper, maxWidth, className, children }) => {
  const {
      enableHeader = true,
      headerButtons,
      title,
      customTitle,
      isCloseButton = true,
    } = header ?? {},
    {
      enableFooter = true,
      footerButtons,
      isFooterBtnsFullWidth = false,
      isFooterBtnsStacked = false,
    } = footer ?? {},
    {
      targetElementId = 'app',
      isAnimate = true,
      animationType = 'slide-in-down', //slide-in-down | slide-in-up | slide-in-right | slide-in-left
      show,
      closeHandler,
      isCancelClickOnOverlay = false,
      isTransparentBackground = false,
      wrapperClassName,
      wrapperHeader,
      wrapperFooter,
    } = wrapper ?? {},
    modalWrapperRef = useRef(null);

  useLockScroll({ immediate: show, targetElement: document.getElementById(targetElementId) });

  const shortcutsHandler = (event) => {
    if (event.key === 'Escape' && closeHandler && show) closeHandler();
  };

  useEventListener('keydown', shortcutsHandler);

  const renderHeader = () => {
    if (!enableHeader) {
      return;
    }
    return (
      <div className="modal-header">
        <div>
          {customTitle ?? <h4 className="modal-title">{title}</h4>}
          <div>
            {headerButtons && renderModalBtns(headerButtons)}
            {isCloseButton && (
              <button
                data-test="modal-header-close-btn"
                className="header-close-btn"
                onClick={closeHandler}
              >
                <XIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    if (!enableFooter) {
      return;
    }
    return (
      <div
        className={`modal-footer ${isFooterBtnsFullWidth ? 'is-footer-btns-full-width' : ''} ${
          isFooterBtnsStacked ? 'is-footer-btns-stacked' : ''
        }`}
        style={{ gap: isFooterBtnsStacked ? 10 : 0 }}
      >
        {footerButtons && renderModalBtns(footerButtons, true)}
      </div>
    );
  };

  const renderModalBtns = (buttons, isFooter) =>
    buttons.map((el, i) => (
      <Button
        className="modal-btn"
        style={{ flex: isFooterBtnsFullWidth && isFooter ? 1 : 'unset' }}
        {...el}
        key={i}
      />
    ));

  return (
    <>
      {show && (
        <Portal wrapperElement="span" wrapperElementId="modal">
          <div
            className={`modal-window ${!show ? 'inactive-modal' : ''}`}
            style={{
              cursor: closeHandler && !isCancelClickOnOverlay ? 'pointer' : 'initial',
              backgroundColor: isTransparentBackground ? 'transparent' : '',
            }}
            onClick={(e) => {
              if (e.target === modalWrapperRef.current && !isCancelClickOnOverlay && closeHandler) {
                closeHandler();
              }
            }}
          >
            <div
              className={`modal-wrapper ${wrapperClassName ?? ''}`}
              style={{
                flexDirection: wrapperHeader || wrapperFooter ? 'column' : 'row',
                justifyContent: wrapperHeader || wrapperFooter ? 'space-between' : 'center',
              }}
              ref={modalWrapperRef}
              data-test="modal-wrapper"
            >
              {wrapperHeader}
              <div
                className={`modal ${show && isAnimate ? animationType : ''} ${
                  !isAnimate ? 'no-animate-modal' : ''
                } ${className ?? ''}`}
                style={{ maxWidth: maxWidth ?? '' }}
              >
                {renderHeader()}
                <div className="modal-body">{children}</div>
                {renderFooter()}
              </div>
              {wrapperFooter}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
