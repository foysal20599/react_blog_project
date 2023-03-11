import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function popular() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-center text-4xl py-12">Popular Post</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-14">
        {PopularPost()}
        {PopularPost()}
      </div>

      {/* <Swiper loop={true} slidesPerView={1}>
          <SwiperSlide>{PopularPost()}</SwiperSlide>
        </Swiper> */}
    </section>
  );
}

function PopularPost() {
  const border = {
    border: "1px solid",
    borderRadius: "8px",
  };
  return (
    <div className="items grid">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/images/post.jpg"} className="rounded-lg" width={600} height={400} alt="Post Image" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link href={"/"}>
          <span className="text-orange-600 hover:text-orange-800">Business, Travel</span>
          <span className="text-gray-600 hover:text-gray-800">-Mar 08, 2023 </span>
        </Link>
      </div>
      <div className="title">
        <Link href={"/"}>
          <span className="text-gray-600 hover:text-gray-300 text-3xl md:text-4xl font-bold">
            Lorem ipsum amet Lorem ipsum dolor sit amet...
          </span>
        </Link>
      </div>
      <p className="text-gray-500 py-3 justify-start">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempora delectus laudantium magni, dolores culpa fugiat cumque,
        suscipit nisi nulla eius iusto quasi aspernatur accusantium...
        <small className="text-blue-300 hover:text-blue-500 cursor-pointer">More See</small>
      </p>
      <Author />
    </div>
  );
}
