import React, { forwardRef } from "react";
import { EllipsisVertical, GripVertical, Plus } from "lucide-react";

interface Section {
  id: string;
  name: string;
  description: string;
}

interface Edge {
  id: string;
  start: string;
  end: string;
}

interface Position {
  x: number;
  y: number;
}

interface NodeProps {
  id: string;
  title?: string;
  sections?: Section[];
  edges?: Edge[];
  position: Position;
}

// eslint-disable-next-line react/display-name
const Node = forwardRef<HTMLDivElement, NodeProps>(({ id, title = "Node", position }: NodeProps, ref) => {
  return (
    <div
      ref={ref}
      id={id}
      className="border-2 border-red-400 w-[200px] absolute"
      style={{ left: position.x, top: position.y }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <GripVertical size={16} />
          <p className="text-lg font-bold">{title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-gray-100 rounded-full">
            <Plus size={16} />
          </button>
          <button className="p-2 bg-gray-100 rounded-full">
            <EllipsisVertical size={16} />
          </button>
        </div>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg mt-2">
        <p className="text-sm text-gray-500">Node description</p>
      </div>
    </div>
  );
});

export default Node;
