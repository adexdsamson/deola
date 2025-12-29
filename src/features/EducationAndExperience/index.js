/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Typography } from "../../common/shared";
import Carousel from "./layout/Slider";
import { HandIcon, } from "@heroicons/react/solid";
import Fade from "react-reveal/Fade";

const BackgroundExperience = () => {
  const [activeTab, setActtiveTab] = useState("carousel");


  let data = [
    {
      company: "Autogon.ai",
      position: "Frontend Team Lead",
      duration: "Jan 2023 – Present",
      highlights: [
        "Lead frontend architecture for AI-powered platform, managing team of 3 developers",
        "Built visual flow editor with React, Redux Toolkit, React Flow and DnD",
        "Integrated Stripe subscriptions reducing payment friction by 35%",
        "Implemented secure OAuth auth with Google and GitHub",
        "Established real-time error monitoring with Sentry reducing downtime by 60%",
      ],
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
      tags: ["React", "Redux Toolkit", "OAuth", "Sentry", "Stripe"],
    },
    {
      company: "Eapay",
      position: "Senior Mobile Developer",
      duration: "May 2022 – Present",
      highlights: [
        "Architected cross-platform fintech app with React Native and WebSocket",
        "Migrated state from Context to Redux Toolkit, 25% faster app launch",
        "Implemented secure payments incl. contact transfers and QR merchant",
        "Built custom UI library optimized for iOS and Android",
      ],
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
      tags: ["React Native", "Redux Toolkit", "WebSocket", "Security"],
    },
    {
      company: "OrbiPayX (Contract)",
      position: "Senior Frontend Engineer",
      duration: "2021 – Present",
      highlights: [
        "Architected compliance dashboard with React 18 and TypeScript",
        "Implemented AES-GCM encryption across API payloads",
        "Developed granular RBAC with role-based permissions",
        "Optimized high-volume logs with TanStack Query and Zustand",
      ],
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
      tags: ["React", "TypeScript", "AES-GCM", "RBAC"],
    },
    {
      company: "Gidaah (Contract)",
      position: "Senior Frontend Engineer",
      duration: "2021 – Present",
      highlights: [
        "Delivered Next.js 15 app with SSR/ISR for performance",
        "Type-safe API layer with React Query and centralized auth",
        "Integrated Stripe and Veriff identity verification",
        "Established automated tests with Jest and Playwright",
      ],
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
      tags: ["Next.js", "React Query", "Stripe", "SSR/ISR"],
    },
    {
      company: "SwiftPro (Contract)",
      position: "Senior Frontend Engineer",
      duration: "2021 – Present",
      highlights: [
        "Led SPA architecture with React + TypeScript",
        "Route guards and role-based navigation for secure access",
        "Centralized HTTP layer with React Query",
        "Playwright test coverage and performance benchmarks",
      ],
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
      tags: ["React", "TypeScript", "HTTP Layer", "Playwright"],
    },
  ];


  return (
    <div className="lg:h-screen md:h-screen h-full lg:overflow-hidden bg-black">
      <div className="text-center pt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold text-secondary"}
          uppercase
        >
          Professional Experience 
        </Typography>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-center mt-2">
          {/* <Typography
            {...{
              variant: "body1",
              className: `transition ease-in-out mx-1 ${
                activeTab === "carousel" &&
                "border-b-2 p-2 border-green-400 font-bold"
              } cursor-pointer hover:text-green-400 duration-300`,
              color: "white",
              onClick: () => setActtiveTab("carousel"),
            }}
          >
            Carousel
          </Typography> */}
          {/* <Typography
            {...{
              variant: "body1",
              className: `transition ease-in-out mx-1 ${
                activeTab === "sparsed" &&
                "border-b-2 p-2 border-green-400 font-bold"
              } cursor-pointer hover:text-green-400 duration-300`,
              color: "white",
              onClick: () => setActtiveTab("sparsed"),
            }}
          >
            Sparse
          </Typography> */}
        </div>

        <div className="mt-14 px-20">
          <Fade when={activeTab === "carousel"} left>
            {activeTab === "carousel" && <Carousel {...{ data }} />}
          </Fade>
          {/* <Fade when={activeTab === "sparsed"} right>
            {activeTab === "sparsed" && <Sparsed {...{ data }} />}
          </Fade> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 px-8 lg:hidden md:px-16 pb-10">
        {data.map(({ company, position, content, highlights = [], duration, icon, tags = [] }, i) => {
          const desc =
            Array.isArray(highlights) && highlights.length > 0
              ? highlights.slice(0, 4).join(" ")
              : content;
          return (
          <li key={i} className="snap-center">
            <div className="rounded-2xl min-h-56 w-full p-5 bg-primary/25 border border-accent/30">
              <a href="#" className="w-full h-full block">
                <div className="relative">
                  <span className="absolute -top-3 -left-1 text-secondary/30 text-5xl leading-none select-none">
                    “
                  </span>
                  <Typography variant={"body2"} className={"text-white/90 italic leading-7"}>
                    {desc}
                  </Typography>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <div className="h-9 w-9 bg-primary flex items-center justify-center rounded-full ring-1 ring-accent/40">
                    {" "}
                    {icon}{" "}
                  </div>

                  <div className="pl-3">
                    <div className="flex items-center">
                      <Typography
                        capitalize
                        className="font-semibold tracking-wide"
                        variant={"subheader1"}
                        color={"white"}
                      >
                        {company}
                      </Typography>
                    </div>
                    <div className="flex py-1 items-center">
                      <div className="text-white/70 text-xs">
                        <Typography
                          capitalize
                          className=""
                          variant={"small"}
                          color={"white"}
                        >
                          {position}
                        </Typography>{" "}
                       
                      </div>
                      
                    </div>
                  </div>
                  </div>
                  {duration && (
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full ring-1 ring-secondary/50">
                      {duration}
                    </span>
                  )}
                </div>
                
                {tags.length > 0 && (
                  <div className="w-full mt-3 flex flex-wrap gap-2">
                    {tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 text-[0.7rem] px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </div>
          </li>
        );
        })}
      </div>
    </div>
  );
};

export default BackgroundExperience;
