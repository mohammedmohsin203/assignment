import React from "react";
import { Container } from "@/components/Container";
import localFont from "next/font/local";

const bold = localFont({ src: "../../public/fonts/ClashDisplay-Bold.woff2" });
const regular = localFont({
  src: "../../public/fonts/ClashDisplay-Regular.woff2",
});


interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <main className={regular.className}>
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        <div className="text-md font-bold tracking-[0.25em] text-black dark:text-white uppercase">
          {props.preTitle}
        </div>
      )}
    <aside className={bold.className}>

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-normal text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}
      </aside>

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
    </main>
  );
}

