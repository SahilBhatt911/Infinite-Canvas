'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Canvas.css'; 

const Canvas = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [components, setComponents] = useState([
    { id: 1, x: 50, y: 50, width: 100, height: 100, color: 'red' },
    { id: 2, x: 200, y: 150, width: 100, height: 100, color: 'blue' }
  ]);
  const [dragging, setDragging] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleWheel = (event) => {
    event.preventDefault();
    const scaleFactor = 1.1;

    if (event.deltaY < 0) {
      // Zoom in
      setScale((prevScale) => Math.min(prevScale * scaleFactor, 5));
    } else {
      // Zoom out
      setScale((prevScale) => Math.max(prevScale / scaleFactor, 0.1));
    }
  };

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left - translate.x) / scale;
    const y = (e.clientY - rect.top - translate.y) / scale;

    const selectedComponent = components.find(component =>
      x >= component.x && x <= component.x + component.width &&
      y >= component.y && y <= component.y + component.height
    );

    if (selectedComponent) {
      setDragging({
        id: selectedComponent.id,
        offsetX: x - selectedComponent.x,
        offsetY: y - selectedComponent.y
      });
    } else {
      setIsPanning(true);
      setPanStart({ x: e.clientX - translate.x, y: e.clientY - translate.y });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left - translate.x) / scale;
      const y = (e.clientY - rect.top - translate.y) / scale;

      setComponents(components.map(component =>
        component.id === dragging.id
          ? { ...component, x: x - dragging.offsetX, y: y - dragging.offsetY }
          : component
      ));
    } else if (isPanning) {
      setTranslate({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
    setIsPanning(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [dragging, isPanning, panStart, scale, translate]);

  return (
    <div
      ref={containerRef}
      className="canvas-container"
      style={{
        transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
        // width: '100%',
        // height: '100%'
      }}
    >
      {components.map(component => (
        <div
          key={component.id}
          className="component"
          style={{
            left: component.x,
            top: component.y,
            width: component.width,
            height: component.height,
            backgroundColor: component.color
          }}
        ></div>
      ))}
    </div>
  );
};

export default Canvas;
