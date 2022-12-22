import React, { useEffect, useRef, Fragment, useCallback } from 'react';

const Modal = ({
  headerCloseHandler,
  show,
  enableHeader,
  customTitle,
  title,
  headerBtns,
  isHeaderNoCloseBtn,
  enableFooter,
  footerBtns,
  isCancelClickOnOverlay,
  maxWidth,
  children,
}) => {
  const modalWrapper = useRef(null);

  const shortcutsHandler = useCallback(
    (event) => {
      if (event.key === 'Escape' && headerCloseHandler && show) headerCloseHandler();
    },
    [headerCloseHandler, show]
  );

  useEffect(() => {
    window.addEventListener('keydown', shortcutsHandler);

    return () => {
      window.removeEventListener('keydown', shortcutsHandler);
    };
  }, [shortcutsHandler]);

  const renderHeader = () => {
    if (enableHeader === false) {
      return;
    }
    return (
      <div className="modal-header">
        <div>
          {customTitle ? customTitle : <h4 className="modal-title">{title}</h4>}
          <div>
            {headerBtns && renderModalBtns(headerBtns)}
            {!isHeaderNoCloseBtn && (
              <button className="header-close-btn" onClick={headerCloseHandler}>
                ×
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    if (enableFooter === false) {
      return;
    }
    return <div className="modal-footer">{footerBtns && renderModalBtns(footerBtns)}</div>;
  };

  const renderModalBtns = (buttons) =>
    buttons.map((el, i) => {
      let buttonColorClass = 'modal-btn-primary';

      if (el.color === 'red') {
        buttonColorClass = 'modal-btn-danger';
      } else if (el.color === 'grey') {
        buttonColorClass = 'modal-btn-secondary';
      } else if (el.color === 'green') {
        buttonColorClass = 'modal-btn-success';
      } else if (el.color === 'yellow') {
        buttonColorClass = 'modal-btn-warning';
      } else if (el.color === 'lightBlue') {
        buttonColorClass = 'modal-btn-info';
      } else if (el.color === 'black') {
        buttonColorClass = 'modal-btn-dark';
      }

      return (
        <Fragment key={i}>
          <button
            className={`modal-btn ${buttonColorClass}`}
            onClick={el.click}
            disabled={el.disabled}
          >
            <span className="btn-content">
              {el.icon && <i className={`fas ${el.icon} icon`} />}
              {el.label}
            </span>
          </button>
        </Fragment>
      );
    });

  return (
    <div
      className={`modal-window ${!show ? 'inactive-modal' : ''}`}
      onClick={(e) => {
        if (e.target === modalWrapper.current && !isCancelClickOnOverlay) {
          headerCloseHandler();
        }
      }}
    >
      <div className="modal-wrapper" ref={modalWrapper}>
        <div
          className={`modal ${show ? 'animate-modal' : ''}`}
          style={{ maxWidth: maxWidth ? maxWidth : '' }}
        >
          {renderHeader()}
          <div className="modal-body">{show ? children : null}</div>
          {renderFooter()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
