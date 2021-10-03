import React, { Fragment } from "react";
import Image from "next/image";
import messageManagerPic from "../public/messageManagerAvatar.png";
import avatarPic from "../public/avatar.png";

import classNames from "classnames";

type BoxProps = {
  image: React.ReactElement;
  title: string;
  repo: string;
  description: string;
  marginClasses?: string;
};
type BoxesProps = {
  boxes: BoxProps[];
};

export function Box(props: BoxProps) {
  return (
    <div
      className={classNames(
        "w-5/6 sm:w-3/5 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6",
        props.marginClasses,
        " shadow-lg rounded-lg dark:bg-gray-800"
      )}
    >
      <div className="flex-shrink-0">
        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md text-white">
          {props.image}
        </div>
      </div>
      <div className="py-4">
        <a
          href={`https://github.com/${props.repo}`}
          target="_blank"
          rel="noreferrer"
          className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-gray-100 hover:underline"
        >
          {props.title}
        </a>
      </div>
      <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
        {props.description}
      </p>
    </div>
  );
}

export default function Boxes(props: BoxesProps) {
  const compiledBoxes = props.boxes.map((boxData) => (
    <Box key={boxData.title} {...boxData} />
  ));
  return (
    <div className="flex flex-wrap justify-center items-center text-center gap-8">
      {compiledBoxes}
    </div>
  );
}
