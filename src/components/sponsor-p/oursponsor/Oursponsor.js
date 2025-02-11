"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import chef from "../../../../public/images/sponsors/insta.png";
import fly from "../../../../public/images/sponsors/flybharti.png";
import views from "../../../../public/images/sponsors/views.jpg";
import soge from "../../../../public/images/sponsors/soge.png";
import greenroom from "../../../../public/images/sponsors/greenroom.png";
import flaunt from "../../../../public/images/sponsors/flaunt.png";
import Image from "next/image";

function Oursponsor() {
  // Define data for sponsors
  const sponsors_series = [
    {
      title: "TITLE SPONSOR",
      name: "Insta Chef",
      description:
        "InstaChef, Dubai’s top Chef service, offers professional chefs for hire at your home. Available for daily, weekly, monthly needs, or parties, our chefs create delicious, personalized home-cooked meals.",
      imageUrl: "/images/sponsors/instachef-og.jpg",
      logoUrl: chef,
      link: "https://www.instachef.ae/",
    },
    {
      title: "PRESENTING PARTNER",
      name: "Fly Bharathi",
      description:
        "Fly Bharathi Aviations and Aeronautics Pvt Ltd (FBAA) is a new Indian aviation company offering airport operations, aircraft MRO, cargo handling, and flight training services.",
      imageUrl: "/images/sponsors/flybharathi-og.jpg",
      logoUrl: fly,
      link: "#",
    },
    {
      title: "DATA ANALYTICS PARTNER",
      name: "Views",
      description:
        "Views is a platform designed for charities, non-profits, and social purpose organizations to manage data and measure impact. It features modules for managing contacts, tracking projects, storing evidence, and generating reports.",
      imageUrl: "/images/sponsors/views-og.jpg",
      logoUrl: views,
      link: "https://www.viewsapp.net/",
    },
    {
      title: "Lanyard Sponsor",
      name: "Socio Genee",
      description:
        "Socio Genee is the leading platform offering 100% transparency and business growth for Influencers, focused on building communities to enhance and uplift the creator ecosystem.",
      imageUrl: "/images/sponsors/soge-og.jpg",
      logoUrl: soge,
      link: "https://sociogenee.com/",
    },
    {
      title: "Solution Partner",
      name: "Greenroom now",
      description:
        "Greenroom is a content and influencer marketing agency based in Bangalore and Mumbai. We believe in turning attention to retention: crafting long-term impact. We are here for brands and creators who are looking to navigate and thrive in the attn economy and work with some of the top brands in the country.",
      imageUrl: "/images/sponsors/greenroom-og.png",
      logoUrl: greenroom,
      link: "https://www.greenroomnow.com/",
    },
  ];

  const sponsors = [
    {
      title: "EXHIBITOR",
      name: "Flaunt",
      description:
        "Flaunt offers an AI-powered SaaS platform purposefully designed for beauty & fashion brands to grow their social media & scale their influencer marketing!",
      imageUrl: "/images/sponsors/flaunt-og.png",
      logoUrl: flaunt,
      link: "https://www.letsflaunt.com/",
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
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[100px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        OUR SPONSORS
      </motion.div>

      <div className="self-stretch mt-24 mb-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] gap-y-14 flex-wrap max-md:flex-col  max-md:gap-0">
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
                  <div className="self-center font-medium text-center">
                    {sponsor.title}
                  </div>
                  <div className="mt-9 font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank">
                    <Image
                      loading="lazy"
                      src={sponsor.logoUrl}
                      className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* series sponsors #################################### */}
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        OUR SERIES SPONSORS
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-2xl font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        We extend our sincere gratitude to our valued sponsors for their
        <br />
        support and contribution towards the success of the event.
      </motion.div>
      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] gap-y-14 flex-wrap max-md:flex-col  max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors_series.map((sponsor, index) => (
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
                  <div className="self-center font-medium text-center">
                    {sponsor.title}
                  </div>
                  <div className="mt-9 font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank">
                    <Image
                      loading="lazy"
                      src={sponsor.logoUrl}
                      className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
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
          Become a Sponsor
        </Button>
      </div>
    </div>
  );
}

export default Oursponsor;
