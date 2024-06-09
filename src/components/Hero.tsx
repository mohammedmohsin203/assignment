import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import play from "../../public/img/play-button.png";
import hero1 from "../../public/img/iPhone-13-Pro-Front (1).png";
import hero2 from "../../public/img/iPhone-13-Pro-Front.png";
import hero3 from "../../public/img/gropu.png";

import localFont from "next/font/local";

const bold = localFont({ src: "../../public/fonts/ClashDisplay-Bold.woff2" });
const regular = localFont({
  src: "../../public/fonts/ClashDisplay-Regular.woff2",
});

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <aside className={bold.className}>
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Make The Best Financial Decisions
              </h1>
            </aside>
            <aside className={regular.className}>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </aside>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row m-2">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-black dark:bg-white dark:text-black rounded-md "
              >
                Get Started   →
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 m-6"
              >
                <Image src={play} className="w-4 h-4" alt="play" />

                <span> Watch Video</span>
              </a>
            </div>
            <Image src={hero3} className="w-[650px] h-[500px] sm:block hidden" alt="ribbon" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 relative h-[650px] sm:scale-100 scale-90">
          <Image
            src={hero1}
            width="616"
            height="617"
            className={" absolute scale-[80%] translate-x-8 translate-y-8   "}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
          <Image
            src={hero2}
            width="616"
            height="617"
            className={" absolute"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
          <Image
            src={hero2}
            width="616"
            height="617"
            className={" absolute translate-x-[-4rem] translate-y-[-4rem]"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </Container>

    </>
  );
};
