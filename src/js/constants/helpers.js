import dayjs from 'dayjs';

export const getYears = (fromDate) => dayjs().diff(dayjs(fromDate), 'year');

export const setTimeoutRAF = (fn, delay, registerCancel) => {
  const start = new Date().getTime();

  const loop = () => {
    const delta = new Date().getTime() - start;

    if (delta >= delay) {
      fn();
      registerCancel(() => {});
      return;
    }

    const raf = requestAnimationFrame(loop);
    registerCancel(() => cancelAnimationFrame(raf));
  };

  const raf = requestAnimationFrame(loop);
  registerCancel(() => cancelAnimationFrame(raf));
};

export function createWrapperAndAppendToBody(wrapper, wrapperElementId) {
  const wrapperElement = document.createElement(wrapper);
  wrapperElement.setAttribute('id', wrapperElementId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

// get {top, left} of the required element
export function getElementOffset(el) {
  let _x = 0,
    _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

const regex = /(auto|scroll)/;

const style = (node, prop) => getComputedStyle(node, null).getPropertyValue(prop);

const scroll = (node) =>
  regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));

// get the first scrollable parent
export const getScrollParent = (node) =>
  !node || node === document.body
    ? document.body
    : scroll(node)
      ? node
      : getScrollParent(node.parentNode);
