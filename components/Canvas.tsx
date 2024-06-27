"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import "./Canvas.css";

const Canvas = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [zoomTransform, setZoomTransform] = useState<d3.ZoomTransform>(
    d3.zoomIdentity
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = d3.select(canvasRef.current);

    const zoom = d3
      .zoom<HTMLDivElement, unknown>()
      .scaleExtent([0.1, 10])
      .on("zoom", (event) => {
        setZoomTransform(event.transform);
      }) as d3.ZoomBehavior<HTMLDivElement, unknown>;

    canvas.call(zoom);
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
        const scaleFactor = event.deltaY < 0 ? 1.2 : 0.8;
        canvas
          .transition()
          .duration(200)
          .call(zoom.scaleBy, scaleFactor, [event.clientX, event.clientY]);
      }
    };

    canvasRef.current.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      canvas.on(".zoom", null);
      canvasRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="canvas">
      <div
        className="canvas__container"
        style={{
          width: "100vw",
          height: "100vh",
          border: "1px solid black",
          overflow: "hidden",
        }}
        ref={canvasRef}
      >
        <div
          className="canvas__container"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            transform: `translate(${zoomTransform.x}px, ${zoomTransform.y}px) scale(${zoomTransform.k})`,
            transformOrigin: "top left",
          }}
        >
          <div className="canvas__content">
            <div style={{ position: "absolute", top: 100, left: 100 }}>
              Component 1
            </div>
            <div style={{ position: "absolute", top: 300, left: 200 }}>
              Component 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
