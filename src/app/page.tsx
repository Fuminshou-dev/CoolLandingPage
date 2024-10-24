import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Herotwo from "./components/herotwo";
import EarlyAccess from "./components/earlyaccess";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="h-full my-0 py-0">
      <Header />
      <Hero />
      <Herotwo />
      <EarlyAccess />
      <Footer />
    </div>
  );
}
