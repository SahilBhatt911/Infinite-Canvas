import React from "react";
import Node from '@/Provider/Node/CustomNode'

interface Section {
  id: string;
  name: string;
  description: string;
}

interface Edge {
  id: string;
  source: string;
  target: string;
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

const NodeProvider = ({ nodes, edges }: CanvasProps) => {
  return (
    <div className="relative w-full h-full">
      {nodes.map((node) => (
        <Node key={node.id} id={node.id} title={node.title} position={node.position} />
      ))}
      <svg className="absolute top-0 left-0 w-full h-full">
        {edges.map((edge) => {
          const sourceNode = nodes.find((node) => node.id === edge.source);
          const targetNode = nodes.find((node) => node.id === edge.target);
          if (!sourceNode || !targetNode) return null;
          return (
            <line
              key={edge.id}
              x1={sourceNode.position.x + 50}
              y1={sourceNode.position.y + 50}
              x2={targetNode.position.x + 50}
              y2={targetNode.position.y}
              stroke="black"
              strokeWidth={1}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default NodeProvider;
