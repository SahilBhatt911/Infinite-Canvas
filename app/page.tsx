"use client";
import InfiniteCanvas from "@/Provider/InfiniteCanvas";
import CustomNode from "@/Provider/Node/CustomNode";
import NodeProvider from "@/Provider/NodeProvider";
import Panel from "@/Provider/Panel";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";

export default function Home() {
  const nodes = [
    { id: "1", title: "Node 1", position: { x: 300, y: 200 } },
    { id: "2", title: "Node 2", position: { x: 300, y: 400 } },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2" },
  ];
  return (
    <>
      <Panel position="top-right" draggable={true} >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </Panel>
      <InfiniteCanvas>
        <NodeProvider nodes={nodes} edges={edges} />
      </InfiniteCanvas>
    </>
  );
}
