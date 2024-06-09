"use client";
import React from "react";
import { Container } from "@/components/Container";
import localFont from "next/font/local";

const bold = localFont({ src: "../../public/fonts/ClashDisplay-Bold.woff2" });
const regular = localFont({
  src: "../../public/fonts/ClashDisplay-Regular.woff2",
});
export const Faq = () => {
  return (
    <Container className={regular.className}>
      <section className="bg-white dark:bg-trueGray-900">
        <div className="px-4 mx-auto max-w-screen-xl  lg:px-6">
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="sm:mb-4 mb-4  bg-red-500 p-4 rounded-xl">
                <aside className={bold.className}>
                  <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                    The Best Financial Accounting App Ever!{" "}
                  </h3>
                </aside>
                <p className="text-white">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              <div className="sm:mb-4   mb-4  bg-white p-4 rounded-xl">
                <aside className={bold.className}>
                  <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                    The Best Financial Accounting App Ever!{" "}
                  </h3>
                </aside>
                <p className="text-black">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              <div className="sm:mb-4 mb-1 bg-red-500 rounded-xl p-4">
                <aside className={bold.className}>
                  <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                    The Best Financial Accounting App Ever!{" "}
                  </h3>
                </aside>
                <p className="text-white">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
            </div>
            <div>
              <div className="sm:mb-4 mb-1 bg-white p-4 rounded-xl">
                <aside className={bold.className}>
                  <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                    The Best Financial Accounting App Ever!{" "}
                  </h3>
                </aside>
                <p className="text-black">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              <div className="sm:mb-4 mb-1 bg-red-500 p-4 rounded-xl">
                <aside className={bold.className}>
                  <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                    The Best Financial Accounting App Ever!{" "}
                  </h3>
                </aside>
                <p className="text-white">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
              <div className="sm:mb-4 mb-1 bg-white p-4 rounded-xl">
                <aside className={bold.className}>
                  <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                    The Best Financial Accounting App Ever!{" "}
                  </h3>
                </aside>
                <p className="text-black">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
