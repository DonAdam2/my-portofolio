import { useEffect, useRef } from 'react';

// Configuration constants
const AUTO_ROTATE_SPEED = { x: 0.012, y: 0.03 }, // degrees per ms around the screen axes
  DRAG_SENSITIVITY = 0.4, // degrees per dragged pixel
  RETURN_TO_AUTO_ROTATE = 0.04, // how fast a throw eases back into the idle spin (per 60fps frame)
  THROW_TIMEOUT = 80, // ms without movement before release, after which the cube is not thrown
  FRAME = 1000 / 60;

/*Rotations are kept as a quaternion and applied in screen space, so dragging always
turns the cube in the direction of the pointer, whatever its current orientation.*/
const toRadians = (deg) => (deg * Math.PI) / 180;

const axisAngleQuaternion = (x, y, angleDeg) => {
  const length = Math.hypot(x, y);
  if (!length || !angleDeg) return [0, 0, 0, 1];
  const half = toRadians(angleDeg) / 2,
    s = Math.sin(half) / length;
  return [x * s, y * s, 0, Math.cos(half)];
};

const multiplyQuaternions = ([ax, ay, az, aw], [bx, by, bz, bw]) => {
  const q = [
      aw * bx + ax * bw + ay * bz - az * by,
      aw * by - ax * bz + ay * bw + az * bx,
      aw * bz + ax * by - ay * bx + az * bw,
      aw * bw - ax * bx - ay * by - az * bz,
    ],
    length = Math.hypot(...q);
  return q.map((v) => v / length);
};

// rotates the cube around the screen x & y axes by the given amounts (degrees)
const rotateBy = (q, degX, degY) =>
  multiplyQuaternions(axisAngleQuaternion(degX, degY, Math.hypot(degX, degY)), q);

const toCssTransform = ([x, y, z, w]) => {
  const angle = 2 * Math.acos(Math.min(1, Math.abs(w))),
    s = Math.sqrt(1 - w * w);
  if (s < 1e-6) return 'rotate3d(0, 1, 0, 0rad)';
  const sign = w < 0 ? -1 : 1;
  return `rotate3d(${(sign * x) / s}, ${(sign * y) / s}, ${(sign * z) / s}, ${angle}rad)`;
};

const INITIAL_ROTATION = multiplyQuaternions(
  axisAngleQuaternion(1, 0, 15),
  axisAngleQuaternion(0, 1, 45)
);

const Cube = ({ images }) => {
  const cubeRef = useRef(null),
    rotationRef = useRef(INITIAL_ROTATION),
    velocityRef = useRef({ x: 0, y: 0 }), // degrees per ms
    dragRef = useRef(null);

  // Take only the first 6 images
  const cubeImages = images.slice(0, 6);

  // Animation loop
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      autoRotate = prefersReducedMotion ? { x: 0, y: 0 } : AUTO_ROTATE_SPEED;
    let animationFrameId,
      lastTime = performance.now();

    if (!prefersReducedMotion) {
      velocityRef.current = { ...AUTO_ROTATE_SPEED };
    }

    const animate = (time) => {
      // cap the step so returning to a background tab doesn't spin the cube wildly
      const dt = Math.min(time - lastTime, 50);
      lastTime = time;

      if (!dragRef.current) {
        const velocity = velocityRef.current,
          ease = 1 - Math.pow(1 - RETURN_TO_AUTO_ROTATE, dt / FRAME);

        // a throw slows down smoothly and blends back into the idle spin
        velocity.x += (autoRotate.x - velocity.x) * ease;
        velocity.y += (autoRotate.y - velocity.y) * ease;
        rotationRef.current = rotateBy(rotationRef.current, velocity.x * dt, velocity.y * dt);
      }

      if (cubeRef.current) {
        cubeRef.current.style.transform = toCssTransform(rotationRef.current);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handlePointerDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.classList.add('is-dragging');
    dragRef.current = { pointerId: e.pointerId, x: e.clientX, y: e.clientY, time: e.timeStamp };
    velocityRef.current = { x: 0, y: 0 };
  };

  const handlePointerMove = (e) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;

    const degX = -(e.clientY - drag.y) * DRAG_SENSITIVITY,
      degY = (e.clientX - drag.x) * DRAG_SENSITIVITY,
      dt = Math.max(e.timeStamp - drag.time, 1);

    rotationRef.current = rotateBy(rotationRef.current, degX, degY);
    // smoothed pointer speed, used to throw the cube on release
    velocityRef.current = {
      x: velocityRef.current.x * 0.2 + (degX / dt) * 0.8,
      y: velocityRef.current.y * 0.2 + (degY / dt) * 0.8,
    };
    dragRef.current = { ...drag, x: e.clientX, y: e.clientY, time: e.timeStamp };
  };

  const handlePointerUp = (e) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;

    // holding still before releasing shouldn't throw the cube
    if (e.timeStamp - drag.time > THROW_TIMEOUT) {
      velocityRef.current = { x: 0, y: 0 };
    }
    e.currentTarget.classList.remove('is-dragging');
    dragRef.current = null;
  };

  return (
    <div className="cube-wrapper">
      <div
        ref={cubeRef}
        className="cube"
        style={{ transform: toCssTransform(INITIAL_ROTATION) }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {cubeImages.map((el, i) => (
          <div
            className="skill-wrapper"
            key={i}
            style={{
              '--dark-image': `url(${el.image})`,
              '--light-image': `url(${el.lightImage})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cube;
