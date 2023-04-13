import { useRef } from 'react';
//custom hooks
import useLockScroll from '@/js/customHooks/UseLockScroll';
import useEventListener from '@/js/customHooks/UseEventListener';
//components
import Portal from '@/js/components/shared/Portal';
import Button from '@/js/components/shared/Button';

const Modal = ({ header, footer, wrapper, maxWidth, className, children }) => {
  const {
      enableHeader = true,
      headerButtons,
      title,
      customTitle,
      isNoCloseButton = false,
    } = header ?? {},
    { enableFooter = true, footerButtons } = footer ?? {},
    {
      show,
      closeHandler,
      isCancelClickOnOverlay = false,
      isTransparentBackground = false,
      wrapperClassName,
      wrapperHeader,
      wrapperFooter,
    } = wrapper ?? {},
    modalWrapperRef = useRef(null);

  useLockScroll({ immediate: show, targetElement: document.getElementById('app') });

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
          {customTitle ? customTitle : <h4 className="modal-title">{title}</h4>}
          <div>
            {headerButtons && renderModalBtns(headerButtons)}
            {!isNoCloseButton && (
              <button className="header-close-btn" onClick={closeHandler}>
                ×
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
    return <div className="modal-footer">{footerButtons && renderModalBtns(footerButtons)}</div>;
  };

  const renderModalBtns = (buttons) =>
    buttons.map((el, i) => <Button className="modal-btn" {...el} key={i} />);

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
              if (e.target === modalWrapperRef.current && !isCancelClickOnOverlay) {
                if (closeHandler) {
                  closeHandler();
                }
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
            >
              {wrapperHeader}
              <div
                className={`modal ${show ? 'animate-modal' : ''} ${className ?? ''}`}
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
