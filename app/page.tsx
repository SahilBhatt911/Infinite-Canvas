'use client';
import InfiniteCanvas from "@/Provider/InfiniteCanvas";
import Panel from "@/Provider/Panel";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Panel
        position="top-left"
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </Panel>
      <InfiniteCanvas>
        <Feature />
        <Footer />
      </InfiniteCanvas>
    </>
  );
}
