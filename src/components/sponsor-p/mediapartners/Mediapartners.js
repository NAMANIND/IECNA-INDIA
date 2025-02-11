"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import coin from "../../../../public/images/sponsors/coinpedia.png";
import ply from "../../../../public/images/sponsors/deriveply.png";
import gluf from "../../../../public/images/sponsors/gulf.png";
import aitime from "../../../../public/images/sponsors/aitime.png";
import cyberdefence from "../../../../public/images/sponsors/cyberdefence.png";
import womenera from "../../../../public/images/sponsors/womenera.png";
import impact from "../../../../public/images/sponsors/impact.png";

import business from "../../../../public/images/sponsors/businesss.png";

function Mediapartners() {
  // Define data for sponsors
  const sponsors = [
    // {
    //   name: "Gulf Moments",
    //   description:
    //     "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
    //   imageUrl:
    //     "https://cdn.builder.io/api/v1/image/assets/TEMP/2177b778065eb53456e9aae35c54027c06ae1da4769bc4ccee832d4b516451f3?apiKey=5e27b1defd60460eaa6dca842133145f&",
    //   logoUrl: gluf,
    // },
    // {
    //   name: "Coin Pedia",
    //   description:
    //     "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
    //   imageUrl: "/images/sponsors/coinpedia-og.jpg",
    //   logoUrl: coin,
    // },
    {
      name: "Drive Ply",
      description:
        "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
      imageUrl: "/images/sponsors/deriveply-og.jpg",
      logoUrl: ply,
      link: "https://www.driveply.com/ ",
    },
    {
      name: "AI time journal",
      description:
        "AI Time Journal explores how Artificial Intelligence and Exponential Technologies bring opportunities for people, organizations, and societies to increase their wealth and health.",
      imageUrl: "/images/sponsors/aitime-og.png",
      logoUrl: aitime,
      link: "https://www.aitimejournal.com/",
    },
    {
      name: "Cyber defense Magazine",
      description:
        "Cyber Defense Magazine is by ethical, honest, passionate information security professionals for IT Security professionals.",
      imageUrl: "/images/sponsors/cyberdefence-og.png",
      logoUrl: cyberdefence,
      link: "https://www.cyberdefensemagazine.com/",
    },
    {
      name: "Woman’s Era",
      description:
        "Woman’s Era is one of the front runners in publications from Delhi Press. Woman’s Era editorial team strives to bring interesting, informative and useful articles and features to make your life beautiful.",
      imageUrl: "/images/sponsors/womenera-og.png",
      logoUrl: womenera,
      link: "https://www.womansera.com/",
    },
    {
      name: "iMPACT",
      description:
        "iMPACT serves as a dedicated media outlet for nonprofits, civil society, and socially-focused businesses, offering curated news, trends, insights, and best practices from influential voices within the development sector.",
      imageUrl: "/images/sponsors/impact-og.png",
      logoUrl: impact,
      link: "https://theimpactmagazine.org/",
    },
    {
      name: "Business outreach",
      description:
        "Business Outreach is one of the fastest growing business magazines in India, where CEOs, CXOs and top executives of a company share their insights about their industry and initiate productive discussion about the latest market trends with the editorial staff and peers.",
      imageUrl: "images/sponsors/business-og.png",
      logoUrl: business,
      link: "https://www.businessoutreach.in/",
    },
  ];

  const offscreen = {
    y: 100,
    opacity: 0,
  };
  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.41,
    },
  };

  return (
    <div
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[50px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        MEDIA PARTNERS
      </motion.div>

      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] gap-y-14 flex-wrap  max-md:flex-col max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[31%] max-md:ml-0 max-md:w-full"
            >
              <div
                className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter 
              group
               leading-6 text-white bg-black rounded-[36px] max-md:mt-6"
              >
                <div className="overflow-hidden rounded-t-[36px]">
                  <img
                    loading="lazy"
                    src={sponsor.imageUrl}
                    className="w-full aspect-[2.38] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <motion.div
                  initial={offscreen}
                  whileInView={onscreen}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col px-11 mt-7 max-md:px-5"
                >
                  <div className=" font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank">
                    <Image
                      loading="lazy"
                      src={sponsor.logoUrl}
                      className="mt-20 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <Button href="./register" color="green" img="arrow">
          BECOME A PARTNER
        </Button>
      </div>
    </div>
  );
}

export default Mediapartners;
