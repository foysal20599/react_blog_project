"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Author from "./_child/author";

export default function tranding() {
  // SwiperCore.use([autoplay]);

  const bg = {
    background: "url('/images/tranding_bg.jpg')no-repeat",
    backgroundPosition: "right",
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="py-16">
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
      <div className="container mx-auto md:px-20 mb-5 mt-5">
        <h1 className="text-center font-bold text-4xl mb-5 mt-5">Tranding</h1>
      </div>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="bg-red-500">
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/images/model.jpg"} className="rounded-xl" width={500} height={500} alt="Post Image" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <span className="text-orange-600 hover:text-orange-800">Business, Travel</span>
            <span className="text-gray-600 hover:text-gray-800">-Mar 08, 2023 </span>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <span className="text-gray-600 hover:text-gray-300 text-3xl font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempora delectus laudantium magni, dolores culpa fugiat cumque,
          suscipit nisi nulla eius iusto quasi aspernatur accusantium ratione voluptas praesentium earum quos consequatur exercitationem. Et
          soluta perferendis corporis quas rerum sed ab nisi! Quidem odit autem nam, natus commodi quis earum. Voluptate?
        </p>
        <Author />
      </div>
    </div>
  );
}
