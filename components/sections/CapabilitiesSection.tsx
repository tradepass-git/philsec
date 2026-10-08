"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          mobile: "(max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, mobile, reduceMotion } = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) return;

          // Section fade/depth as it enters the viewport.
          gsap.fromTo(
            section,
            { opacity: 0.5 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "top 20%",
                scrub: 1,
              },
            }
          );

          // Main horizontal content groups reveal with depth.
          const groups = gsap.utils.toArray<HTMLElement>(
            ".capabilities-content-list > *"
          );

          groups.forEach((group, index) => {
            gsap.fromTo(
              group,
              {
                y: mobile ? 45 : 90,
                opacity: 0,
                scale: mobile ? 0.98 : 0.94,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.1,
                delay: index * 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: group,
                  start: "top 88%",
                  end: "top 58%",
                  scrub: 1,
                },
              }
            );
          });

          // Large headings: masked reveal.
          gsap.utils
            .toArray<HTMLElement>(".capabilities-content-list h2")
            .forEach((heading) => {
              gsap.fromTo(
                heading,
                {
                  y: mobile ? 35 : 80,
                  opacity: 0,
                  clipPath: "inset(0 0 100% 0)",
                },
                {
                  y: 0,
                  opacity: 1,
                  clipPath: "inset(0 0 0% 0)",
                  ease: "power4.out",
                  scrollTrigger: {
                    trigger: heading,
                    start: "top 85%",
                    end: "top 52%",
                    scrub: 1,
                  },
                }
              );
            });

          // Body copy and labels.
          gsap.utils
            .toArray<HTMLElement>(".capabilities-content-list p")
            .forEach((paragraph) => {
              gsap.fromTo(
                paragraph,
                { y: 22, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: paragraph,
                    start: "top 92%",
                    end: "top 70%",
                    scrub: 1,
                  },
                }
              );
            });

          // Buttons pop in after copy.
          gsap.utils
            .toArray<HTMLElement>(".capabilities-content-list a")
            .forEach((button, index) => {
              gsap.fromTo(
                button,
                { y: 25, opacity: 0, scale: 0.96 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "back.out(1.4)",
                  scrollTrigger: {
                    trigger: button,
                    start: "top 92%",
                    toggleActions: "play none none reverse",
                  },
                }
              );
            });

          // All capability images get subtle depth/parallax.
          gsap.utils
            .toArray<HTMLImageElement>(".capabilities-content-list img")
            .forEach((image, index) => {
              gsap.fromTo(
                image,
                { scale: 1.08, y: mobile ? 12 : 28 },
                {
                  scale: 1,
                  y: mobile ? -8 : -22,
                  ease: "none",
                  scrollTrigger: {
                    trigger: image,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                  },
                }
              );

              if (desktop) {
                gsap.to(image, {
                  yPercent: index % 2 === 0 ? -4 : 4,
                  ease: "none",
                  scrollTrigger: {
                    trigger: image,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                  },
                });
              }
            });

          // Glass cards lift slightly on hover (using dedicated class).
          const cards = gsap.utils.toArray<HTMLElement>(
            ".capabilities-content-list .capability-card"
          );

          cards.forEach((card) => {
            gsap.fromTo(
              card,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  end: "top 68%",
                  scrub: 1,
                },
              }
            );

            const enter = () =>
              gsap.to(card, {
                y: -8,
                scale: 1.015,
                duration: 0.35,
                ease: "power2.out",
                overwrite: "auto",
              });

            const leave = () =>
              gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "power3.out",
                overwrite: "auto",
              });

            card.addEventListener("mouseenter", enter);
            card.addEventListener("mouseleave", leave);
          });

          // Decorative orbit motion.
          gsap.utils
            .toArray<HTMLElement>('[style*="translate(43.125rem)"]')
            .forEach((item, index) => {
              gsap.to(item, {
                y: index % 2 === 0 ? -24 : 24,
                rotation: index % 2 === 0 ? 2 : -2,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 2,
                },
              });
            });

          const dotGroup = section.querySelector<HTMLElement>(".dot-group");
          if (dotGroup) {
            gsap.to(dotGroup, {
              rotation: "+=45",
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
              },
            });
          }

          // Draw decorative SVG path while scrolling.
          const path = section.querySelector<SVGPathElement>("svg path");
          if (path) {
            const length = path.getTotalLength();

            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });

            gsap.to(path, {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "bottom 10%",
                scrub: 1.5,
              },
            });
          }

          // Horizontal camera movement on desktop.
          const content = section.querySelector<HTMLElement>(
            ".capabilities-content"
          );

          if (content && desktop) {
            gsap.to(content, {
              x: -80,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            });
          }

          requestAnimationFrame(() => ScrollTrigger.refresh());
        }
      );

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative h-screen sticky bottom-0 bg-neutral-950 text-white overflow-x-hidden">
      <div className="container mx-auto h-full max-lg:overflow-hidden px-4 md:px-8">
        <div className="h-full flex relative">
          <div className="flex-none flex flex-row gap-80 capabilities-content will-change-transform">
            
            {/* Background SVG Curve */}
            <svg
              className="absolute -bottom-32 h-[calc(100%+16rem)] w-full pointer-events-none -z-10"
              viewBox="0 0 7296.83349609375 1081.3333740234375"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 61.37971973016688 540.6666870117188 C 337.6711632349495 375.3819843635559, 551.4679755787288 743.642616078186, 921.844662000057 763.1336501449586 C 1584.7533260110918 798.0192026481628, 1497.262233297697 33.807598295974735, 2232.113775572031 43.53901937644959 C 2966.9516814541093 53.27053700454712, 3259.479568126139 1076.737707183838, 4270.822599779648 914.0935820159913 C 5282.1656314331585 751.4465604194642, 5929.048807265143 -196.32959072113036, 7234.119728109195 1037.8869438171387"
                stroke="#08C380"
                strokeWidth="90"
                strokeLinecap="round"
                style={{ strokeDashoffset: "0px", strokeDasharray: "8006.81" }}
              />
            </svg>

            <div className="h-full flex-row gap-96 flex capabilities-content-list">
              
              {/* SECTION 1 */}
              <div className="flex flex-row gap-72 justify-between items-center self-center flex-none">
                <div className="flex flex-col gap-5 max-w-md">
                  <p className="text-xs font-medium text-white/50 uppercase tracking-wider">Roles within guardrails</p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    <span>Everyone creates. <br />Brand stays in control.</span>
                  </h2>
                  <p className="text-base text-white/50 max-w-sm">
                    <span>Marketing ships campaigns. Sales builds decks. Regional teams localize. HR recruits. All inside the brand system your design team defines, with locked templates, approval workflows, and roles that keep every asset safe to ship.</span>
                  </p>
                  <div className="flex items-center gap-3 md:gap-5 mt-8">
                    <a
                      href="https://cloud.linearity.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative cursor-pointer rounded-full font-medium flex items-center justify-center text-center select-none text-white bg-white/5 backdrop-blur-md px-6 py-3 text-sm w-37 border border-white/10 hover:bg-white/10 transition"
                    >
                      <span>Get started</span>
                    </a>
                    <a
                      href="https://form.typeform.com/to/lSocCNm5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative cursor-pointer rounded-full font-medium flex items-center justify-center text-center select-none text-white bg-[#FF4800] px-6 py-3 text-sm w-37 shadow-lg hover:bg-[#e03f00] transition"
                    >
                      <span>Contact sales</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-9">
                  <div className="w-auto">
                    <div className="relative flex gap-10 md:gap-16 lg:gap-26 items-center">
                      
                      {/* Department Badges */}
                      <div className="flex flex-col gap-3 lg:gap-5">
                        {["Marketing", "Sales", "Regional", "HR"].map((dept) => (
                          <div
                            key={dept}
                            className="flex gap-2 lg:gap-3 p-1.5 md:p-2 lg:py-3.5 lg:px-4 min-w-[6.25rem] lg:min-w-[11.25rem] relative items-center bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                          >
                            <div className="w-6 lg:w-9 h-6 lg:h-9 flex items-center justify-center rounded-full bg-white/10 overflow-hidden">
                              <img
                                alt={dept}
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                              />
                            </div>
                            <p className="text-sm text-white font-medium">{dept}</p>
                          </div>
                        ))}
                      </div>

                      {/* Center Feature Card */}
                      <div className="relative p-5 lg:p-5 w-25 md:w-50 lg:w-80 h-fit bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                        <img
                          alt="Main dashboard preview"
                          className="w-full relative z-10 rounded-xl object-cover aspect-[560/864]"
                          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=640&q=80"
                        />
                      </div>

                      {/* Right Sub-Cards */}
                      <div className="flex flex-col gap-3 lg:gap-5">
                        <div className="relative p-2 lg:p-3 w-18 md:w-30 lg:w-51 h-fit bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                          <img
                            alt="Secondary UI element"
                            className="w-full relative z-10 rounded-lg object-cover aspect-[360/416]"
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                          />
                        </div>
                        <div className="relative p-2 lg:p-3 w-18 md:w-30 lg:w-51 h-fit bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                          <img
                            alt="Secondary UI widget"
                            className="w-full relative z-10 rounded-lg object-cover aspect-[360/74]"
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="flex flex-row gap-72 justify-between items-center self-center flex-none">
                <div className="flex flex-col gap-5 max-w-md">
                  <p className="text-xs font-medium text-white/50 uppercase tracking-wider">Capabilities</p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    <span>Your brand, <br />built in.</span>
                  </h2>
                  <p className="text-base text-white/50 max-w-sm">
                    <span>Add your logos, colors, fonts, and templates once. Every asset arrives on-brand, from the first generation.</span>
                  </p>
                  <div className="flex items-center gap-3 md:gap-5 mt-8">
                    <a
                      href="https://cloud.linearity.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative cursor-pointer rounded-full font-medium flex items-center justify-center text-center select-none text-white bg-white/5 backdrop-blur-md px-6 py-3 text-sm w-37 border border-white/10 hover:bg-white/10 transition"
                    >
                      <span>Get started</span>
                    </a>
                    <a
                      href="https://form.typeform.com/to/lSocCNm5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative cursor-pointer rounded-full font-medium flex items-center justify-center text-center select-none text-white bg-[#FF4800] px-6 py-3 text-sm w-37 shadow-lg hover:bg-[#e03f00] transition"
                    >
                      <span>Contact sales</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-9">
                  <div className="w-auto">
                    <div className="relative flex gap-10 md:gap-16 lg:gap-26 items-center">
                      <div className="relative p-2.5 md:p-5 w-30 md:w-50 lg:w-80 h-fit bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                        <img
                          alt="Brand Kit"
                          className="w-full relative z-10 rounded-xl object-cover aspect-[560/864]"
                          src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=640&q=80"
                        />
                      </div>
                      <div className="relative p-2.5 md:p-5 w-30 md:w-50 lg:w-80 h-fit bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                        <img
                          alt="Templates"
                          className="w-full relative z-10 rounded-xl object-cover aspect-[560/864]"
                          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=640&q=80"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3 */}
              <div className="flex flex-row gap-72 justify-between items-center self-center flex-none">
                <div className="flex flex-col gap-5 max-w-md">
                  <p className="text-xs font-medium text-white/50 uppercase tracking-wider">The business case</p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    <span>More campaigns. <br />Same team.</span>
                  </h2>
                  <p className="text-base text-white/50 max-w-sm">
                    <span>Campaign demand grows every quarter. Linearity turns content creation into a system, so your team keeps up without burning out.</span>
                  </p>
                  <div className="flex items-center gap-3 md:gap-5 mt-8">
                    <a
                      href="https://cloud.linearity.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative cursor-pointer rounded-full font-medium flex items-center justify-center text-center select-none text-white bg-white/5 backdrop-blur-md px-6 py-3 text-sm w-37 border border-white/10 hover:bg-white/10 transition"
                    >
                      <span>Get started</span>
                    </a>
                    <a
                      href="https://form.typeform.com/to/lSocCNm5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative cursor-pointer rounded-full font-medium flex items-center justify-center text-center select-none text-white bg-[#FF4800] px-6 py-3 text-sm w-37 shadow-lg hover:bg-[#e03f00] transition"
                    >
                      <span>Contact sales</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-9">
                  <div className="w-auto">
                    <div className="relative flex lg:gap-26 md:gap-16 gap-6 items-center">
                      <div className="relative p-2.5 md:p-5 w-30 md:w-50 lg:w-80 h-fit bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                        <img
                          alt="Campaign efficiency visual"
                          className="w-full relative z-10 rounded-xl object-cover aspect-[565/866]"
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=80"
                        />
                      </div>
                      <div className="relative p-2.5 md:p-5 w-30 md:w-50 lg:w-80 h-fit bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                        <img
                          alt="Analytics view"
                          className="w-full relative z-10 rounded-xl object-cover aspect-[565/864]"
                          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=640&q=80"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TESTIMONIAL & FEATURE ACCORDION SECTION */}
              <section className="relative h-screen w-screen flex-none">
                <div className="h-full container mx-auto grid grid-cols-12 gap-8 items-center">
                  
                  {/* Left Interactive Circular Gallery */}
                  <div className="relative col-span-6 lg:flex hidden h-screen items-center justify-center">
                    <div className="absolute w-[48.25rem] h-[48.25rem] flex justify-center items-center">
                      <div className="absolute inset-0 border border-white/10 rounded-full" />
                      <div className="w-[23.5rem] h-[23.5rem] relative flex justify-center items-center">
                        <div className="absolute z-10 flex items-center justify-center pointer-events-none select-none">
                          <span className="text-2xl font-bold tracking-widest text-white">TESTIMONIAL</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg width="100%" viewBox="0 0 386 386" fill="none">
                            <circle cx="193" cy="193" r="188" stroke="#E2E2E2" strokeOpacity="0.2" strokeWidth="10" strokeDasharray="1 6" />
                          </svg>
                        </div>
                        <div className="absolute inset-5 dot-group will-change-transform" style={{ transform: "rotate(-145.872deg)" }}>
                          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                            <div
                              key={deg}
                              className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full transition-all duration-500 ${
                                i === 3 ? "bg-white scale-125" : "bg-white/20"
                              }`}
                              style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translate(10.5rem)` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Orbiting Images */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[23.5rem] h-[28.125rem] flex items-center justify-center">
                      {[
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
                        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
                        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                      ].map((url, idx) => (
                        <div
                          key={idx}
                          className="absolute w-full h-full flex items-center justify-center overflow-visible rounded-xl shadow-2xl"
                          style={{
                            transform: `rotate(${-145 + idx * 45}deg) translate(35rem) rotate(${145 - idx * 45}deg) scale(0.85)`,
                            opacity: 0.7 + idx * 0.05,
                          }}
                        >
                          <img alt={`Gallery item ${idx + 1}`} className="h-48 w-36 object-cover rounded-xl shadow-lg" src={url} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Accordion / Category Selector */}
                  <div className="relative col-span-12 lg:col-span-6 h-auto lg:h-screen flex flex-col justify-center gap-10">
                    <div className="flex flex-col max-lg:text-center">
                      <p className="text-xs font-semibold text-[#FF4800] mb-3 tracking-widest uppercase">
                        BUILT FOR HOW TEAMS ACTUALLY WORK
                      </p>
                      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        <span>One brand.<br />Every </span>
                        <span className="text-[#08C380]">team asset</span>
                      </h2>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      {[
                        { title: "Marketing", desc: "Campaign assets and launch creative, generated on-brand and resized for every channel. Ready in minutes, not days.", active: false },
                        { title: "Social", desc: "Social media posts, stories, templates, and banners that match your brand guidelines perfectly.", active: false },
                        { title: "Ecommerce", desc: "Product listings, banners, and promotional ads tailored for storefronts.", active: false },
                        { title: "Performance", desc: "High-converting ad creatives and landing page visual assets.", active: true },
                        { title: "Events", desc: "Visual kits, posters, and banners for events, webinars, and conferences.", active: false },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className={`capability-card relative flex flex-row items-start p-5 rounded-[18px] transition-all duration-300 border border-white/10 cursor-pointer ${
                            item.active ? "bg-gradient-to-b from-white/10 to-white/5 border-white/20" : "bg-transparent hover:bg-white/5"
                          }`}
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-5 border border-white/10">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex flex-col justify-center min-h-[3rem] flex-1">
                            <div className={`text-base font-semibold ${item.active ? "text-white" : "text-white/50"}`}>
                              {item.title}
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed pt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}