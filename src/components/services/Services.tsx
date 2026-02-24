import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import {
  SiNextdotjs,
  SiAmazon,
} from "react-icons/si";
import { AiOutlineMobile, AiOutlineRobot } from "react-icons/ai";
import { BiPalette } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";

export const Services = () => {
  return (
    <section className="section-wrapper" id="services">
      <SectionHeader title="Services" dir="l" />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
      <div className="text-indigo-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-zinc-100 mb-2">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
};

const services = [
  {
    icon: <SiNextdotjs />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks like Next.js, React, and TypeScript. Fast, responsive, and optimized for conversions.",
  },
  {
    icon: <AiOutlineMobile />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android. Built with React Native and cutting-edge technologies.",
  },
  {
    icon: <AiOutlineRobot />,
    title: "AI Integration",
    description:
      "Intelligent automation solutions powered by AI. From chatbots to custom ML models, we help businesses leverage AI to streamline operations and improve customer experiences.",
  },
  {
    icon: <BiPalette />,
    title: "UI/UX Design",
    description:
      "Beautiful, user-centered designs that blend aesthetics with functionality. We create intuitive interfaces that engage users and drive business results.",
  },
  {
    icon: <BsGraphUpArrow />,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies including SEO, content marketing, and analytics. We help you reach your target audience and grow your online presence.",
  },
  {
    icon: <SiAmazon />,
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and CI/CD pipelines on AWS, Docker, and modern DevOps tools. Ensuring your applications are reliable, secure, and performant.",
  },
];
