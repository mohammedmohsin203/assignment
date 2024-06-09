"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import img1 from "../../public/img/cube-02.png"
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://www.coreldraw.com/static/cdgs/images/learn/guide-to-vector-design/how-do-vector-graphics-work/img-01.png"
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    "https://www.coreldraw.com/static/cdgs/images/free-trials/2024/accordion-1.png"},
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwtW534k8ARaZgT8yJ9XLgqpRJVaWDDO5cQ&s"},
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
    "https://www.coreldraw.com/static/cdgs/images/learn/guide-to-vector-design/how-do-vector-graphics-work/img-01.png"
},
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1HMs8-S72zomIYkF9uFeVcQOmihgQwQ_Sg&s"},
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRVkMLjqAPmKOB1oRIKDCg6jvy-s1d-U3DA&s"},
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-start justify-center sm:justify-start mt-4  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
