
import { ModeToggle } from "@/components/global/mode-toggle";

import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

AnimatedGradientText
import Pricing from './components/Pricing';
import About from "./components/About";
import Documentation from "./components/Documentation";
import Features from "./components/Features";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-lightMode:bg-white dark:bg-darkMode-bg">
      {/* Light and System Mode Overlay */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:hidden"></div>

      {/* Content */}
      <section>
        {/* Landing Page */}
        <section
          id="landing"
          className="w-full h-full pt-20 md:pt-3 relative flex items-center justify-center flex-col overflow-hidden"
        >
          {/* Landing Page Grids */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

          {/* Motto */}
          <p className="text-center text-lg md:text-xl lg:text-2xl px-4 mt-20 font-semibold text-blue-600 dark:text-blue-400 tracking-wide leading-relaxed animate-fade-in">
            Simply built, Simply designed & Simply hosted
          </p>

          {/* Project Title */}
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative mb-6 md:mb-12 mt-2">
            <AnimatedGradientText>
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl md:text-7xl xl:text-[100px] font-bold text-center px-4 pb-7`,
                )}
              >
                WEBORA
              </span>
            </AnimatedGradientText>
          </div>

          {/* Image Section */}
          <div className="relative mt-2 md:mt-[-20px] flex justify-center items-center w-full max-w-screen-lg">
            <Image
              src={'/assets/preview.png'}
              alt="banner image"
              height={800}
              width={1200}
              className="w-full h-auto rounded-tl-2xl rounded-tr-2xl border-12 border-muted shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_16px_4px_rgba(0,191,255,0.7)]"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <div className="absolute bottom-0 top-[50%] left-0 right-0 bg-gradient-to-t dark:from-background z-10" />
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <Pricing />
        </section>

        {/* Other sections like About, Documentation, Features with IDs */}
        <section>
          <About />
        </section>


        <section>
          <Documentation />
        </section>


        <section>
          <Features />
        </section>


        {/* Footer */}
        <footer className="relative w-full py-10 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
          <div className="w-full px-8 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <aside className="flex items-center gap-3">
                  <Image
                    src={"./assets/plura-logo.svg"}
                    width={40}
                    height={40}
                    alt="plura-logo"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-2xl font-bold text-primary dark:text-blue-500">
                    WebOra.
                  </span>
                </aside>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Simplifying your web development experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Product Links */}
                <ul>
                  {/* <p className="block mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
            Pricing
          </p> */}
                  <li>
                    <a href="#features" className="block py-1 hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 transition-colors text-sm">
                      Features
                    </a>
                    <a href="#features" className="block py-1 hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 transition-colors text-sm">
                      Pricing
                    </a>
                  </li>
                </ul>

                {/* Company Links */}
                <ul>
                  {/* <p className="block mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
            Documnenatation
          </p> */}
                  <li>
                    <a href="#about" className="block py-1 hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 transition-colors text-sm">
                      About
                    </a>
                    <a href="#about" className="block py-1 hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 transition-colors text-sm">
                      Documnenatation
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 WebOra. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>


      </section>
    </div>
  );
}
