import Link from "next/link";


export default function Home() {
  return (
   <div>
    <h1 className="flex justify-center self-center mt-10 font-bold text-[40px]">Welcome to the Home Page Buddy</h1>
    <Link className="flex items-center justify-center text-blue-500 " href={"/about"}>
    About
    </Link>
   </div>
  );
}

