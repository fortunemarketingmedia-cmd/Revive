"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const words = [
  "confidence.",
  "radiance.",
  "expertise.",
  "elegance.",
  "excellence.",
];

const particlesData = Array.from({ length: 25 }).map((_, index) => ({
  id: index,
  size: [2, 4, 6][Math.floor(Math.random() * 3)],
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 12 + Math.random() * 18,
  delay: Math.random() * -15,
}));

const INTRO_CHANNEL_NAME = "revive-intro-video";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const introVideoRef = useRef<HTMLVideoElement>(null);

  /*
   * Wait until the component has mounted.
   * This also prevents hydration issues caused by random particles.
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * Change the highlighted word every 3.2 seconds.
   */
  useEffect(() => {
    if (!mounted) return;

    const interval = window.setInterval(() => {
      setWordIndex((previousIndex) => {
        return (previousIndex + 1) % words.length;
      });
    }, 3200);

    return () => {
      window.clearInterval(interval);
    };
  }, [mounted]);

  /*
   * Intro video playback behavior.
   * Plays every time the page is loaded/refreshed.
   */
  useEffect(() => {
    if (!mounted) return;

    const video = introVideoRef.current;

    if (!video) return;

    let introChannel: BroadcastChannel | null = null;

    if ("BroadcastChannel" in window) {
      introChannel = new BroadcastChannel(INTRO_CHANNEL_NAME);

      introChannel.onmessage = (event) => {
        if (event.data === "pause-intro") {
          video.pause();
        }
      };
    }

    /*
     * Tell any other open tabs to pause their intro video.
     */
    introChannel?.postMessage("pause-intro");

    const playIntroVideo = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;

        await video.play();
      } catch (error) {
        console.warn("Intro video autoplay was blocked:", error);
      }
    };

    void playIntroVideo();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();

        /*
         * Pause the intro in other open tabs too.
         */
        introChannel?.postMessage("pause-intro");
      }
    };

    const handlePageHide = () => {
      video.pause();
      introChannel?.postMessage("pause-intro");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    window.addEventListener("pagehide", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      window.removeEventListener("pagehide", handlePageHide);

      introChannel?.close();
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F8E7DF] pb-12 pt-20 select-none lg:pb-16 lg:pt-24">
      {/* Clear looping background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-hidden="true"
          className="absolute inset-x-0 top-0 w-full object-cover"
          style={{ height: "106%" }}
        >
          <source src="/videos/revive-hero.webm" type="video/webm" />
        </video>
        {/* Soft overlay gradient to blend colors and enhance readability */}
        <div className="absolute inset-0 bg-[#F8E7DF]/25  " />
      </div>

      {/* Floating particles (colored to match the new light brand style) */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {particlesData.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#7C131F]/15"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-4 sm:px-6 md:px-12 lg:grid-cols-12 lg:gap-12 2xl:px-16">
        {/* Left intro video */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex w-full items-center justify-center lg:col-span-5 lg:justify-start"
        >
          {/* Feathered mask to seamlessly blend the video into the background video */}
          <div 
            className="relative h-[500px] w-full max-w-[500px] overflow-hidden sm:h-[600px] lg:h-[650px]"
            style={{
              maskImage: "radial-gradient(ellipse at center, black 70%, transparent 95%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 70%, transparent 95%)"
            }}
          >
            <video
              ref={introVideoRef}
              muted
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              poster="/images/intro-video-poster.webp"
              aria-label="Revive clinic introduction"
              className="absolute inset-x-0 top-0 w-full object-cover brightness-100 contrast-100 saturate-100"
              style={{ height: "108%" }}
              onEnded={(event) => {
                event.currentTarget.pause();
              }}
            >
              <source src="/videos/revive-intro.webm" type="video/webm" />
            </video>
          </div>
        </motion.div>

        {/* Right-side text */}
        <div className="flex w-full flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
            className="mb-2 font-playfair text-4xl font-bold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-[86px]"
          >
            Making skin &amp;
            <br />
            hair care
          </motion.h1>

          {/* Rotating highlighted word */}
          <div className="relative my-2 h-[56px] w-full overflow-hidden sm:h-[72px] md:h-[88px] lg:h-[115px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-playfair text-4xl font-bold italic leading-none tracking-tight text-[#7C131F] sm:text-5xl md:text-6xl lg:left-0 lg:translate-x-0 lg:text-[86px]"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mb-10 mt-4 max-w-[500px] font-inter text-sm leading-[1.8] text-neutral-700 sm:text-base"
          >
            Expert dermatological solutions and aesthetic care with
            board-certified clinical excellence. Led by Dr. Shraddha Sonanis.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start"
          >
            <Link
              href="/contact?book=true"
              className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-[#7C131F] px-8 py-4 font-inter text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(124,19,31,0.15)] transition-all duration-500 hover:scale-105 hover:bg-neutral-900 hover:text-white active:scale-95 sm:w-auto"
            >
              Book Appointment
              <FiArrowRight className="shrink-0 text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/treatments"
              className="flex w-full items-center justify-center rounded-full border border-[#7C131F]/30 bg-[#7C131F]/5 px-8 py-4 font-inter text-xs font-bold uppercase tracking-widest text-[#7C131F] transition-all duration-500 hover:scale-105 hover:bg-[#7C131F] hover:text-white active:scale-95 sm:w-auto"
            >
              Explore Treatments
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
