import { useEffect, useRef, useState } from 'react';

const Cube = ({ images }) => {
  const [isDragging, setIsDragging] = useState(false),
    rotationRef = useRef({ x: 15, y: 45 }),
    mousePositionRef = useRef({ x: 0, y: 0 }),
    lastPositionRef = useRef({ x: 0, y: 0 }),
    torqueRef = useRef({ x: 0, y: 0 }),
    /*Used during a single drag operation to prevent calculating movement
    on the first frame of dragging. It's reset to true at the start of each
    drag and becomes false after the first mouse/touch movement.
    This helps prevent a sudden jump in the cube's rotation when starting to drag.*/
    isFirstDragFrameRef = useRef(true),
    /*Track whether the user has ever interacted with the cube since the component mounted.
    So that the cube's rotation can be reset to the front face only on the first interaction.
    It would only be set to false once and stay that way until the component is unmounted.*/
    isFirstInteractionRef = useRef(true),
    cubeRef = useRef(null);

  // Configuration constants
  const SENSITIVITY = 0.1,
    SENSITIVITY_FADE = 0.93,
    SPEED = 2,
    TOUCH_SENSITIVITY = 1.5,
    FPS = 30;

  // Take only the first 6 images
  const cubeImages = images.slice(0, 6);

  const handleStart = (clientX, clientY) => {
    setIsDragging(true);
    isFirstDragFrameRef.current = true;
    lastPositionRef.current = { x: clientX, y: clientY };
    mousePositionRef.current = { x: clientX, y: clientY };
    // Reset torque on start
    torqueRef.current = { x: 0, y: 0 };

    // Reset rotation to front face only on first interaction
    if (isFirstInteractionRef.current) {
      rotationRef.current = { x: 0, y: 0 };
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
      }
      isFirstInteractionRef.current = false;
    }

    // Remove animation class when starting to drag
    if (cubeRef.current) {
      cubeRef.current.classList.remove('auto-rotate');
    }
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return;

    const mouseX = clientX / (window.TouchEvent ? TOUCH_SENSITIVITY : 1);
    const mouseY = clientY / (window.TouchEvent ? TOUCH_SENSITIVITY : 1);

    if (isFirstDragFrameRef.current) {
      isFirstDragFrameRef.current = false;
      lastPositionRef.current = { x: mouseX, y: mouseY };
    }

    mousePositionRef.current = { x: mouseX, y: mouseY };
  };

  const handleEnd = () => {
    setIsDragging(false);

    /*// Add animation class back when drag ends
    if (cubeRef.current) {
      cubeRef.current.classList.add('auto-rotate');
    }*/
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.pageX, e.pageY);
  };

  // Touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleStart(touch.pageX, touch.pageY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMove(touch.pageX, touch.pageY);
  };

  // Animation loop
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (isDragging) {
        const distanceX = mousePositionRef.current.x - lastPositionRef.current.x;
        const distanceY = mousePositionRef.current.y - lastPositionRef.current.y;

        torqueRef.current = {
          x:
            torqueRef.current.x * SENSITIVITY_FADE +
            (distanceX * SPEED - torqueRef.current.x) * SENSITIVITY,
          y:
            torqueRef.current.y * SENSITIVITY_FADE +
            (distanceY * SPEED - torqueRef.current.y) * SENSITIVITY,
        };

        let newX = rotationRef.current.x - torqueRef.current.y;
        let newY = rotationRef.current.y + torqueRef.current.x;

        // Keep angles within 0-360 range
        newX = newX % 360;
        newY = newY % 360;
        if (newX < 0) newX += 360;
        if (newY < 0) newY += 360;

        rotationRef.current = { x: newX, y: newY };
        lastPositionRef.current = { ...mousePositionRef.current };

        // Update cube transform
        if (cubeRef.current) {
          cubeRef.current.style.transform = `rotateX(${newX}deg) rotateY(${newY}deg)`;
        }
      } else {
        // Apply torque fade-out when not dragging
        torqueRef.current = {
          x: torqueRef.current.x * SENSITIVITY_FADE,
          y: torqueRef.current.y * SENSITIVITY_FADE,
        };
      }

      animationFrameId = setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000 / FPS);
    };

    animate();
    return () => {
      if (animationFrameId) {
        clearTimeout(animationFrameId);
      }
    };
  }, [isDragging]); // Only depend on isDragging state

  useEffect(() => {
    const handleMouseMove = (e) => handleMove(e.pageX, e.pageY);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
    //eslint-disable-next-line
  }, [isDragging]);

  return (
    <div className="cube-wrapper">
      <div
        ref={cubeRef}
        className="cube auto-rotate"
        style={{
          transform: isDragging
            ? 'none'
            : `rotateX(${rotationRef.current.x}deg) rotateY(${rotationRef.current.y}deg)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          touchAction: 'none',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {cubeImages.map((el, i) => (
          <div
            className="skill-wrapper"
            key={i}
            style={{
              backgroundImage: `url(${el.image})`,
              touchAction: 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cube;
