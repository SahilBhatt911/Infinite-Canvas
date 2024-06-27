"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
// import "./Canvas.css";

interface InfiniteCanvasProps {
  initialScale?: number;
  minScale?: number;
  maxScale?: number;
  children?: React.ReactNode;
}

const InfiniteCanvas: React.FC<InfiniteCanvasProps> = ({
  minScale = 0.1,
  maxScale = 1,
  children,
}) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [zoomTransform, setZoomTransform] = useState<d3.ZoomTransform>(
    d3.zoomIdentity
  );
  const [zoomFactor, setZoomFactor] = useState<number>(0.5);

  useEffect(() => {
    if (!canvasRef.current) return;
    console.log(zoomFactor)
    const canvas = d3.select(canvasRef.current);

    const zoom = d3
      .zoom<HTMLDivElement, unknown>()
      .scaleExtent([minScale, maxScale])
      .on("zoom", (event) => {
        setZoomTransform(event.transform);
      }) as d3.ZoomBehavior<HTMLDivElement, unknown>;

    canvas
      .call(zoom)
      .on("dblclick.zoom", null) 
      .on("wheel.zoom", (event) => {
        event.preventDefault();
        const direction = event.deltaY > 0 ? -1 : 1;
        const newScale = zoomTransform.k * (1 + direction * zoomFactor);

        if(newScale < minScale || newScale > maxScale) return;

        const newTransform = d3.zoomIdentity
          .translate(zoomTransform.x, zoomTransform.y)
          .scale(newScale);
        canvas.call(zoom.transform, newTransform);
        setZoomTransform(newTransform);
      });
    return () => {
      canvas.on(".zoom", null);
      canvas.on(".wheel", null);
    };
  }, [minScale, maxScale, zoomTransform, zoomFactor]);

  return (
    <div
      className="canvas__container"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f3f3f3",
        position: "relative",
      }}
      ref={canvasRef}
    >
      <div className="controls" style={{ position: "absolute", top: 10, left: 10, zIndex: 10 }}>
        <label>
          Zoom Factor:
          <select
            onChange={(e) => setZoomFactor(Number(e.target.value))}
            value={zoomFactor}
          >
            <option value={0.01}>0.01</option>
            <option value={0.02}>0.02</option>
            <option value={0.05}>0.05</option>
            <option value={0.1}>0.1</option>
          </select>
        </label>
      </div>
      <div
        className="canvas__container"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: `translate(${zoomTransform.x}px, ${zoomTransform.y}px) scale(${zoomTransform.k})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default InfiniteCanvas;
