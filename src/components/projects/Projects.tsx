import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Zendo",
    imgSrc: "project-imgs/zendo.jpg",
    code: "",
    projectLink: "https://zendo.work",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "Modern landing page and web presence for a productivity platform. Clean design with engaging animations and conversion-focused layout.",
    modalContent: (
      <>
        <p>
          Aurora designed and developed Zendo's complete web presence, creating a modern, conversion-optimized
          landing page that effectively communicates their productivity platform's value proposition.
        </p>
        <p>
          The website features smooth animations, responsive design, and strategic CTAs to maximize user engagement
          and drive sign-ups. We focused on creating a clean, professional aesthetic that resonates with their target audience.
        </p>
        <p>
          Our work included brand identity refinement, UX/UI design, full website development, and performance
          optimization. The result is a fast-loading, visually striking site that converts visitors into users.
        </p>
        <p>
          Built with Next.js for SEO optimization and fast page loads, styled with Tailwind CSS for responsive design,
          and enhanced with Framer Motion for engaging micro-interactions.
        </p>
      </>
    ),
  },
  {
    title: "Macorva",
    imgSrc: "project-imgs/macorva.jpg",
    code: "",
    projectLink: "https://macorva.com",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Professional corporate website redesign for an enterprise experience management platform. Modern UI with clear value proposition and seamless user journey.",
    modalContent: (
      <>
        <p>
          Aurora partnered with Macorva to redesign their corporate website, creating a polished,
          professional presence that effectively showcases their enterprise experience management platform.
        </p>
        <p>
          The website features a clean, modern design that highlights Macorva's AI-powered capabilities
          through strategic content placement, engaging visuals, and intuitive navigation. We optimized the user
          journey to guide visitors from awareness to conversion.
        </p>
        <p>
          Our comprehensive approach included sitemap restructuring, content strategy, custom design system,
          full development, and performance optimization. The result is a fast, accessible website that positions
          Macorva as an industry leader.
        </p>
        <p>
          Developed with Next.js and TypeScript for type-safe, maintainable code, styled with Tailwind CSS
          for consistent, responsive design, and optimized for search engines and conversion rates.
        </p>
      </>
    ),
  },
  {
    title: "ATEIQ HSE",
    imgSrc: "project-imgs/ateiqhse.jpg",
    code: "",
    projectLink: "https://ateiqhse.com",
    tech: ["Next.js", "TypeScript", "MongoDB", "AWS"],
    description:
      "Comprehensive HSE management platform for industrial sectors. Training modules, compliance tracking, and real-time safety monitoring.",
    modalContent: (
      <>
        <p>
          ATEIQ HSE is a comprehensive Health, Safety, and Environment management platform
          designed for industrial and construction sectors across the Middle East.
        </p>
        <p>
          The platform features digital training modules, compliance documentation, incident reporting,
          and real-time safety monitoring dashboards for management teams.
        </p>
        <p>
          We built the entire platform from scratch, including the admin dashboard, mobile-responsive
          training portal, and automated compliance reporting system. The platform serves multiple
          industrial clients with thousands of employees.
        </p>
        <p>
          Developed with Next.js and TypeScript for type-safe frontend development, MongoDB for
          flexible document storage, and deployed on AWS with multi-region support for reliability.
        </p>
      </>
    ),
  },
  {
    title: "Elevate Mena",
    imgSrc: "project-imgs/elevate-mena.jpg",
    code: "",
    projectLink: "https://elevate-mena.com",
    tech: ["React", "Node.js", "Tailwind CSS", "Strapi CMS"],
    description:
      "Digital transformation consultancy platform. Showcasing services, case studies, and client success stories across the MENA region.",
    modalContent: (
      <>
        <p>
          Elevate Mena is a digital transformation consultancy helping businesses across the Middle East
          and North Africa leverage technology for growth and innovation.
        </p>
        <p>
          We created their complete digital presence including a modern website with case study showcases,
          service offerings, and an integrated CMS for easy content management.
        </p>
        <p>
          The website features dynamic case studies, client testimonials, interactive service pages,
          and a lead generation system that increased qualified inquiries by 200%.
        </p>
        <p>
          Built with React for a smooth user experience, Node.js backend, Tailwind CSS for responsive design,
          and Strapi CMS for flexible content management. Optimized for SEO and conversion.
        </p>
      </>
    ),
  },
];
