import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                A
              </span>
              urora is a full-service digital marketing agency based in Beirut, Lebanon.
              We specialize in creating innovative digital solutions that help businesses
              thrive in the modern marketplace. From web development and mobile apps to
              AI-powered automation, we bring your vision to life.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Founded in 2020, our team has grown to serve clients across the MENA region
              and beyond. We&apos;ve successfully delivered projects for startups, enterprises,
              and everything in between, always focusing on measurable results and exceptional quality.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Our expertise spans modern web technologies including React, Next.js, Node.js,
              and cutting-edge AI solutions. We take pride in staying ahead of industry trends
              and delivering solutions that not only meet today&apos;s needs but are built for tomorrow&apos;s growth.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              We believe in building long-term partnerships with our clients. Whether you&apos;re
              looking to launch a new product, scale your digital presence, or transform your
              business with technology, we&apos;re here to make it happen. Let&apos;s create something extraordinary together.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>Connect with us</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
