import React from "react";

interface PanelProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  children?: React.ReactNode;
  backgroundColor?: string;
}

const Panel = ({ position, children, backgroundColor }: PanelProps) => {
  return <div className={`position-${position} absolute z-50`}>
    {children}
    <style jsx>{`
      .position-top-left {
        position: absolute;
        left: 50px;
        top: 50px;
      }
      .position-top-right {
        position: absolute;
        top: 50px;
        right: 50px;
      }
      .position-bottom-left {
        position: absolute;
        bottom: 50px;
        left: 50px;
      }
      .position-bottom-right {
        position: absolute;
        bottom: 50px;
        right: 50px;
      }
    `}</style>
  </div>;
};

export default Panel;
