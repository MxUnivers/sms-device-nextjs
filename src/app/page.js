import NavbarWeb from "@/components/web/NavbarWeb";
import HomeAvantage from "@/components/web/home/HomeAvantage";
import HomeAvantage2 from "@/components/web/home/HomeAvantage2";
import HomeCategory from "@/components/web/home/HomeCategory";
import HomeDemo from "@/components/web/home/HomeDemo";
import HomeHelp from "@/components/web/home/HomeHelp";
import HomeStart from "@/components/web/home/HomeStart";
import Image from "next/image";
import Link from "next/link"; // Pour la navigation entre pages

export default function Home() {
  return (
    <main>

      <NavbarWeb />
      <HomeStart />
      <div className="mx-10">
        <HomeCategory />
        <HomeDemo />
        <HomeAvantage />
        <HomeAvantage2 />
        <HomeHelp/>
      </div>


    </main>
  );
}
