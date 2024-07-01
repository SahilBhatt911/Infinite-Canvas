"use client";
import InfiniteCanvas from "@/Provider/InfiniteCanvas";
import NodeProvider from "@/Provider/NodeProvider";
import Panel from "@/Provider/Panel";

export default function Home() {
  const nodes = [
    { id: "1", title: "Node 1", position: { x: 100, y: 200 } },
    { id: "2", title: "Node 2", position: { x: 300, y: 400 } },
    { id: "3", title: "Node 3", position: { x: 500, y: 300 } },
  ];

  const edges = [
    { id: "e1-2", start: "1", end: "2"},
    { id: "e2-3", start: "2", end: "3"},
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
