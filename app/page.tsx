import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import Grid from "@/components/Grid";
import {navItems} from "@/data";
import RecentProject from "@/components/RecentProject";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
export  const  runtime= "edge";


export default function Home() {
  return (
    <>
      <main
        className="relative  bg-black-100 flex  justify-center items-center  
  flex-col overflow-hidden mx-auto sm:px-10 px-5"
      >
        <div className="max-w-7xl w-full">
          <FloatingNav
            navItems={navItems}
          />
          <Hero />
          <Grid />
          <RecentProject/>
          <Clients />
          <Experience/>
          <Approach />
          <Footer/>
        </div>
      </main>
    </>
  );
}
