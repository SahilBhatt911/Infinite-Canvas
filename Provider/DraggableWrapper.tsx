import React from "react";
import Draggable from "react-draggable";

interface DraggableWrapperProps {
  children: React.ReactNode;
}

const DraggableWrapper: React.FC<DraggableWrapperProps> = ({ children }) => {
  return <Draggable handle=".draggable-handle">{children}</Draggable>;
};

export default DraggableWrapper;
