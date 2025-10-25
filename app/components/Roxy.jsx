"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Roxy = () => {
  const roxyRef = useRef(null);

  useEffect(() => {
    const imageElement = roxyRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          if (entry.isIntersecting) {
            imageElement.style.opacity = ratio;
          } else {
            imageElement.style.opacity = 0;
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        root: null,
      }
    );

    observer.observe(imageElement);

    return () => {
      observer.unobserve(imageElement);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-screen h-screen p-8 bg-roxy-bg text-roxy-primary-font"
    >
      <div className="flex flex-col w-full max-w-3xl gap-5">
        <div className="flex justify-center text-xl font-normal">
          <h1>Mushoku Tensei</h1>
        </div>
        <div className="flex justify-center w-full mt-[20px] text-xl font-bold gap-12">
          <motion.h1
            initial={{ transform: "translateX(-30px)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
          >
            GODDESS
          </motion.h1>
          <h1>ROXY M. GREYRAT</h1>
          <motion.h1
            initial={{ transform: "translateX(30px)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
          >
            SHISHOU
          </motion.h1>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex justify-center z-20">
          <div className="max-w-md w-full relative">
            <Image
              ref={roxyRef}
              priority
              fetchPriority="high"
              className="w-full h-auto object-cover [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              alt="Full body portrait of Roxy Migurdia from Mushoku Tensei"
              src="/roxy.png"
              style={{ opacity: 0, transition: "opacity 0.2s ease-out" }}
              height={300}
              width={500}
            />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-3 z-10 px-4 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
          <div className="flex flex-col items-center">
            <div
              style={{
                transition: "transform 0.3s linear, opacity 0.3s linear",
              }}
              className="text-[120px] sm:text-[300px] md:text-[520px] roxy-main-text"
            >
              <p>ROXY</p>
            </div>

            <div className="flex justify-center w-full max-w-4xl px-4">
              <div className="flex justify-center sm:justify-between w-full max-w-3xl mx-auto">
                <div className="w-full sm:w-80">
                  <div className="text-xs sm:text-sm font-medium leading-4 text-center sm:text-left">
                    Roxy is shown as a short statured adult woman in her
                    physical teenage appearance between 15 or 16 years old. Her
                    complexion is like sand but paler, and has long blue hair
                    tied in 2 braids that reach below her waist. Her eyes match
                    the color of her hair. Her hair color sometimes appears
                    green in sunlight, which makes people distrustful or even
                    afraid of her because of the similarity between her and the
                    Superd Tribe&apos;s green hair.
                  </div>
                </div>
                <div className="hidden sm:block sm:w-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
