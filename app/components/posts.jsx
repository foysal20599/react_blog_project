import Image from "next/image";
import Author from "./_child/author";

export default function posts() {
  return (
    <>
      <div className="flex justify-center">
        <Author />
      </div>
      <div className="post py-5">
        <h1 className="font-bold text-gray-400 text-center text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quam.
        </h1>
        <p className="py-3 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores quis natus odit officiis inventore, numquam
          temporibus vero deserunt, pariatur accusamus consequuntur. Quo asperiores voluptates porro possimus repellendus ad voluptas!
        </p>
        <div className="py-5">
          <Image src={"/images/post.jpg"} className="rounded " alt="post image" width={900} height={500} />
        </div>
        <div className="content">
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora aliquam eos dolor, animi facilis culpa magni maiores nobis
            harum dolores odio hic alias eveniet voluptates cum ea rem? Ipsa, minus? Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora aliquam eos dolor, animi facilis culpa magni maiores nobis
            harum dolores odio hic alias eveniet voluptates cum ea rem? Ipsa, minus? Lorem ipsum dolor sit.
          </p>
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora aliquam eos dolor, animi facilis culpa magni maiores nobis
            harum dolores odio hic alias eveniet voluptates cum ea rem? Ipsa, minus? Lorem, ipsum.
          </p>
        </div>
      </div>
    </>
  );
}
