import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function category() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12"> Business</h1>
          <div className="flex flex-col gap-6">
            {categoryPost()}
            {categoryPost()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12"> Travel</h1>
          <div className="flex flex-col gap-6">
            {categoryPost()}
            {categoryPost()}
          </div>
        </div>
      </div>
    </section>
  );
}

function categoryPost() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start py-4">
        <Link href={"/"}>
          <Image src={"/images/post.jpg"} className="rounded-lg" width={350} height={250} alt="Post Image" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link href={"/"}>
          <span className="text-orange-600 hover:text-orange-800">Business, Travel</span>
          <span className="text-gray-600 hover:text-gray-800">-Mar 08, 2023 </span>
        </Link>
        <div className="title">
          <Link href={"/"}>
            <span className="text-gray-600 hover:text-gray-300 text-xl font-bold">Lorem ipsum dolor sit Lorem, ipsum dolor Lorem.</span>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
