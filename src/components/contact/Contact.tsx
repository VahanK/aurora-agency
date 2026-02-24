import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="w-full max-w-xl mx-auto space-y-6">
        <div>
          <p className="mb-1.5 text-sm font-light uppercase text-indigo-400">/ Get in Touch</p>
          <hr className="border-zinc-700" />
        </div>
        <p className="max-w-lg text-xl leading-relaxed text-zinc-200">
          <strong className="text-white">Ready to start your project?</strong> We&apos;d love to hear from you!
          Reach out via WhatsApp or email for any inquiries.
        </p>
        <div>
          <Typewrite
            examples={[
              "Can you help us redesign our website?",
              "We need a mobile app for our business",
              "How much does a web development project cost?",
              "Do you offer ongoing support after launch?",
              "Can you integrate AI into our platform?",
            ]}
          />
          <hr className="border-zinc-700" />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/96181296457"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-green-500 bg-green-500/10 py-3 px-4 text-sm font-medium transition-colors hover:bg-green-500 hover:text-white flex items-center justify-center gap-2 text-green-400 hover:border-green-500"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>
          <a
            href="mailto:contact@auroracreative.com"
            className="flex-1 rounded-lg border border-indigo-500 bg-indigo-500/10 py-3 px-4 text-sm font-medium transition-colors hover:bg-indigo-500 hover:text-white flex items-center justify-center gap-2 text-indigo-400 hover:border-indigo-500"
          >
            <AiFillMail className="text-xl" />
            Email Us
          </a>
        </div>
        <p className="text-center text-sm text-zinc-500 pt-4">
          <a href="tel:+96181296457" className="hover:text-indigo-400 transition-colors">
            +961 81 296 457
          </a>
          {" • "}
          <a href="mailto:contact@auroracreative.com" className="hover:text-indigo-400 transition-colors">
            contact@auroracreative.com
          </a>
        </p>
      </div>
    </section>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-zinc-400">
      <span className="inline-block size-2 bg-indigo-500" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-indigo-500"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
