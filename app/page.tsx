import InfiniteCanvas from "@/Provider/InfiniteCanvas"
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";

export default function Home() {
  return (
    <InfiniteCanvas>
      <Feature/>
      <Footer/>
    </InfiniteCanvas>
  );
}
