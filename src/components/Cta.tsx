import React from "react";
import { Container } from "@/components/Container";
import localFont from "next/font/local";
import Image from "next/image";
import img from "../../public/img/iPhone 13 Pro.png"

const bold = localFont({ src: "../../public/fonts/ClashDisplay-Bold.woff2" });
const regular = localFont({
  src: "../../public/fonts/ClashDisplay-Regular.woff2",
});

export const Cta = () => {
  return (
    <Container className={bold.className}>
      <div className="flex flex-wrap items-center justify-between w-full max-w-7xl gap-5 mx-auto text-white bg-black  px-7 py-2 sm:py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to Get Started?
          </h2>
          <aside className={regular.className}>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.{" "}
          </p>
          </aside>
          <div className="mt-5">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-black- bg-white text-black rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Download App 🍎
          </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto scale-100 sm:scale-[1.30]">
         <Image src={img} alt="img" className="w-[400px] h-[450px] translate-x-[1.35rem] sm:translate-x-0 "/>
        </div>
      </div>
    </Container>
  );
};
