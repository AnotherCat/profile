import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import messageManagerPic from "../public/messageManagerAvatar.png";
import avatarPic from "../public/avatar.png";
import Slash from "../components/icons/Slash";
import Boxes from "../components/BoxesLayout";
import { TopWave, BottomWave } from "../components/Waves";
import Header from "../components/Header";
import Section from "../components/SectionLayout";
import OpenGraph from "../components/OpenGraph";

//https://github.com/tailwindtoolbox/Landing-Page

const Home: NextPage = () => {
  return (
    <Fragment>
      <OpenGraph />
      <div className="leading-normal tracking-normal text-gray-100 gradient">
        <section>
          <Header
            title="AnotherCat"
            description="Student developer, working in Python and Javascript"
          />
        </section>
        <TopWave />
        <Section title="Projects">
          <Boxes
            boxes={[
              {
                image: (
                  <Image
                    src={messageManagerPic}
                    height="50"
                    width="50"
                    alt="Message Manager's avatar"
                  />
                ),
                title: "Message Manager",
                repo: "message-manager-discord",
                description:
                  "A Discord bot focused on managing important messages",
              },
              {
                image: (
                  <Image
                    className="rounded-full"
                    src={avatarPic}
                    height="50"
                    width="50"
                    alt="AnotherCat's avatar"
                  />
                ),
                title: "Profile",
                repo: "AnotherCat/profile",
                description: "A next.js site utilizing tailwindcss",
                marginClasses: "sm:mt-16 md:mt-20 lg:mt-24",
              },
              {
                image: <Slash />,
                title: "Interactions Proxy",
                repo: "AnotherCat/interactions-proxy",
                description:
                  "A Discord HTTP interactions bot built to proxy messages to different fronts, using slash commands",
              },
            ]}
          />
        </Section>
        <BottomWave />
      </div>
    </Fragment>
  );
};

export default Home;
