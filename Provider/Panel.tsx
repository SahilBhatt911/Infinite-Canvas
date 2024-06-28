import React from "react";
import Draggable from "react-draggable";

interface PanelProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  children?: React.ReactNode;
  backgroundColor?: string;
  draggable?: boolean;
}

const Panel = ({ position, children, backgroundColor, draggable }: PanelProps) => {
  const panelContent = (
    <div
      className={`position-${position} panel-content`}
      style={{ backgroundColor: backgroundColor || "transparent", zIndex: 50 }}
    >
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
    </div>
  );

  return draggable ? <Draggable>{panelContent}</Draggable> : panelContent;
};

export default Panel;
