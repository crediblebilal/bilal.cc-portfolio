import Link from "next/link";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <main className=" min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm ">
      <HomePage />
    </main>
  )
}