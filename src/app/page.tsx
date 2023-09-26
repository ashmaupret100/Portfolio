import Image from "next/image";
import Header from "../../components/header/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="bg-yellow-100">Welcome To Ashma's Website</div>
    </main>
  );
}
