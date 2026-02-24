import { AiFillMail, AiFillPhone } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Get Started<span className="text-indigo-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Ready to transform your digital presence? Get in touch with us today!
            Whether you have a project in mind or just want to explore possibilities,
            we&apos;re here to help bring your vision to life.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <div className="flex flex-col gap-4 items-center">
            <Link href="mailto:contact@auroracreative.com">
              <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-xl whitespace-normal hover:text-indigo-300 transition-colors">
                <AiFillMail />
                <span>contact@auroracreative.com</span>
              </div>
            </Link>
            <Link href="tel:+96181296457">
              <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-xl whitespace-normal hover:text-indigo-300 transition-colors">
                <AiFillPhone />
                <span>+961 81 296 457</span>
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
