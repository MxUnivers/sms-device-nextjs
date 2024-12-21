import NavbarWeb from "@/components/web/NavbarWeb";
import HomeStart from "@/components/web/home/HomeStart";
import Image from "next/image";
import Link from "next/link"; // Pour la navigation entre pages

export default function Home() {
  return (
    <main>
      <NavbarWeb />
      <HomeStart/>
    </main>
  );
}
