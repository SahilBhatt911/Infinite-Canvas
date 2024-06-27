import InfiniteCanvas from "@/components/Canvas";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";

export default function Home() {
  return (
    <InfiniteCanvas>
      <HeroHeader/>
      <Footer/>
    </InfiniteCanvas>
  );
}
