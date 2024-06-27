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
  const canvasRef = useRef<HTMLDivElement | null>(null);4
  const zoomRef = useRef<d3.ZoomBehavior<HTMLDivElement, unknown> | null>(null);
  const [zoomTransform, setZoomTransform] = useState<d3.ZoomTransform>(
    d3.zoomIdentity
  );
  const [zoomFactor, setZoomFactor] = useState<number>(0.1);
  const [zoomPercentage, setZoomPercentage] = useState<number>(100)

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = d3.select(canvasRef.current);

    const zoom = d3
      .zoom<HTMLDivElement, unknown>()
      .scaleExtent([minScale, maxScale])
      .on("zoom", (event) => {
        setZoomTransform(event.transform);
      }) as d3.ZoomBehavior<HTMLDivElement, unknown>;

    zoomRef.current = zoom;

    canvas
      .call(zoom)
      .on("dblclick.zoom", null) 
      
    return () => {
      canvas.on(".zoom", null);
    };
  }, [minScale, maxScale]);

  useEffect(() => {
    if (!zoomRef.current || !canvasRef.current) return;

    const canvas = d3.select(canvasRef.current);
    const newScale = zoomPercentage / 100;
    const newTransform = d3.zoomIdentity
      .translate(zoomTransform.x, zoomTransform.y)
      .scale(newScale);

    canvas.transition().duration(500).call(zoomRef.current.transform, newTransform);
    setZoomTransform(newTransform);
  }, [zoomPercentage]);


  // Zoom percentage
  useEffect(() => {
    if (!zoomRef.current || !canvasRef.current) return;

    const canvas = d3.select(canvasRef.current);

    const zoomHandler = (event: WheelEvent) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? -1 : 1;
      const newZoomPercentage = zoomPercentage + direction * 25; // Adjust zoom increment here
      if (newZoomPercentage >= 25 && newZoomPercentage <= 100) {
        setZoomPercentage(newZoomPercentage);
      }
    };

    canvas.node()!.addEventListener("wheel", zoomHandler);

    return () => {
      canvas.node()!.removeEventListener("wheel", zoomHandler);
    };
  }, [zoomPercentage]);
  
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
          Zoom Percentage:
          <select
            onChange={(e) => setZoomPercentage(Number(e.target.value))}
            value={zoomPercentage}
          >
            <option value={25}>25%</option>
            <option value={50}>50%</option>
            <option value={75}>75%</option>
            <option value={100}>100%</option>
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
