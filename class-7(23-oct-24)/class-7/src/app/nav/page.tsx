import Link from "next/link";

export default function Navbar() {
  return (
     <div className="text-black bg-[rgb(102,152,209)] px-20 py-1 no-underline font-bold text-[22px] flex items-center justify-between">
      <span>logo</span>
      <div className="text-black  no-underline mr-10 font-semibold text-[20px]">
        <Link href="/">Home</Link>
        <Link href="./about">About</Link>
        <Link href="./contact">Contact</Link>
        <Link href="./services">Services</Link>
        </div>
        <button className="mt-2 mr-2 p-1 bg-[rgba(73,71,73,0.75)] border-4 border-black hover:bg-[rgba(142,140,143,0.75)] ">login</button>
      </div>
  );
}
