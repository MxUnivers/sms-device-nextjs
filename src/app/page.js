import NavbarWeb from "@/components/web/NavbarWeb";
import HomeAvantage from "@/components/web/home/HomeAvantage";
import HomeCategory from "@/components/web/home/HomeCategory";
import HomeDemo from "@/components/web/home/HomeDemo";
import HomeStart from "@/components/web/home/HomeStart";
import Image from "next/image";
import Link from "next/link"; // Pour la navigation entre pages

export default function Home() {
  return (
    <main>

      <NavbarWeb />
      <HomeStart />
      <HomeCategory />
      <HomeDemo />
      <HomeAvantage />

    </main>
  );
}
