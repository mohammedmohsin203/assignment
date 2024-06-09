import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/grp6.png";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";
import localFont from "next/font/local";
import { Benefits } from "./Benefits";
import { AnimatedTooltipPreview } from "./Tooltip";

const bold = localFont({ src: "../../public/fonts/ClashDisplay-Bold.woff2" });
const regular = localFont({
  src: "../../public/fonts/ClashDisplay-Regular.woff2",
});

export const Testimonials = () => {
  return (
    // <Container>
    //   <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
    //     <div className="lg:col-span-2 xl:col-auto">
    //       <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
    //         <p className="text-2xl leading-normal ">
    //           Share a real <Mark>testimonial</Mark>
    //           that hits some of your benefits from one of your popular customer.
    //         </p>

    //         <Avatar
    //           image={userOneImg}
    //           name="Sarah Steiner"
    //           title="VP Sales at Google"
    //         />
    //       </div>
    //     </div>
    //     <div className="">
    //       <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
    //         <p className="text-2xl leading-normal ">
    //           Make sure you only pick the <Mark>right sentence</Mark>
    //           to keep it short and simple.
    //         </p>

    //         <Avatar
    //           image={userTwoImg}
    //           name="Dylan Ambrose"
    //           title="Lead marketer at Netflix"
    //         />
    //       </div>
    //     </div>
    //     <div className="">
    //       <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
    //         <p className="text-2xl leading-normal ">
    //           This is an <Mark>awesome</Mark> landing page template I&apos;ve
    //           seen. I would use this for anything.
    //         </p>

    //         <Avatar
    //           image={userThreeImg}
    //           name="Gabrielle Winn"
    //           title="Co-founder of Acme Inc"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </Container>

    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div className={`flex items-center justify-between  w-full lg:w-1/2 `}>
        <div className="">
          <Image
            src={userOneImg}
            width={500}
            height={500}
            alt="Benefits"
            className={
              "object-cover scale-90 sm:scale-[1.25] sm:translate-x-[6rem]"
            }
            placeholder="blur"
          />
        </div>
      </div>
      <div className={`flex flex-wrap items-center w-full lg:w-1/2 `}>
        <div>
          <div className="flex flex-col w-full mt-4">
            <aside className={bold.className}>
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                The Best Financial Accounting App Ever!
              </h3>
            </aside>
            <aside className={regular.className}>
              <p className="max-w-2xl pt-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Review :
              </p>
            </aside>
          </div>

          <div className="w-full mt-5">
            <aside className={regular.className}>
              <Benefit title="Nick Jonas">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </Benefit>
              <AnimatedTooltipPreview/>
            </aside>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
