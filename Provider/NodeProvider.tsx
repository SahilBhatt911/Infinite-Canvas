import React, { useRef } from "react";
import Node from "@/Provider/Node/CustomNode";
import Xarrow from "react-xarrows";

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

interface NodeData {
  id: string;
  title: string;
  position: Position;
}

interface CanvasProps {
  nodes: NodeData[];
  edges: Edge[];
}

const Canvas = ({ nodes, edges }: CanvasProps) => {
  const nodeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  return (
    <div className="relative w-full h-full">
      {nodes.map((node) => (
        <Node
          key={node.id}
          id={node.id}
          title={node.title}
          position={node.position}
          ref={(el:any) => (nodeRefs.current[node.id] = el)}
        />
      ))}
      {edges.map((edge) => (
        <Xarrow
          key={edge.id}
          start={edge.start}
          end={edge.end}
          color="black"
          strokeWidth={2}
          path="grid"
        />
      ))}
    </div>
  );
};

export default Canvas;
