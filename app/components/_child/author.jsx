import Image from "next/image";
import Link from "next/link";

export default function author() {
  return (
    <div className="author flex py-5">
      <Image src={"/author/model.jpg"} className="rounded-full" width={45} height={45} alt="Foysal Ahmed" />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <span className="text-orange-600 hover:text-orange-800 font-bold">Mr. Shakib Khan</span>
        </Link>
        <Link href={"/"}>
          <span className="text-gray-600 hover:text-gray-800">CEO & Founder</span>
        </Link>
      </div>
    </div>
  );
}
