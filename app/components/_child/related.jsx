import Image from "next/image";
import Link from "next/link";
import Author from "./author";

export default function related() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="font-bold text-3xl">Related post </h1>
      <div className="post py-12 ">
        {RelatedPost()}
        {RelatedPost()}
        {RelatedPost()}
        {RelatedPost()}
        {RelatedPost()}
      </div>
    </section>
  );
}

function RelatedPost() {
  const border = {
    border: "1px solid",
    borderRadius: "8px",
  };
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start py-4">
        <Link href={"/"}>
          <Image src={"/images/post.jpg"} className="rounded-lg" width={250} height={200} alt="Post Image" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link href={"/"}>
          <span className="text-orange-600 hover:text-orange-800">Business, Travel</span>
          <span className="text-gray-600 hover:text-gray-800">-Mar 08, 2023 </span>
        </Link>
        <div className="title">
          <Link href={"/"}>
            <span className="text-gray-600 hover:text-gray-300 text-lg font-bold">
              Lorem ipsum dolor sit Lorem, ipsum dolor Lorem. Lorem, ipsum dolor.{" "}
            </span>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
