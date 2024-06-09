import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container p-0  translate-y-[-4rem] sm:p-8 mx-auto xl:px-0 scale-95 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

