// const HELP_ITEMS = [
//   "Not selling online yet, or not getting results from your store?",
//   "Have data but no clear insights?",
//   "Unsure how AI can support your work?",
//   "Need a stronger digital presence on a limited budget?",
// ];

// const PROCESS = [
//   {
//     step: "01",
//     title: "Understand",
//     text: "We start by learning your business, your audience, and the problem you need to solve.",
//   },
//   {
//     step: "02",
//     title: "Strategize",
//     text: "We identify the right opportunities and priorities, and build a plan that fits your resources.",
//   },
//   {
//     step: "03",
//     title: "Implement",
//     text: "Where needed, we help put the plan into action, from websites and online stores to AI-powered workflows and marketing.",
//   },
//   {
//     step: "04",
//     title: "Measure",
//     text: "We track results and refine, so progress is based on data.",
//   },
// ];

// export default function About() {
//   return (
//     <section
//       id="about"
//       aria-labelledby="about-title"
//       className="scroll-mt-[74px] bg-[#0B1F3F] py-24 text-white lg:py-32"
//     >
//       <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">
//         <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
//           <header>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F1842D]">
//               About Nexora Digital
//             </p>

//             <h2
//               id="about-title"
//               className="mt-5 text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[56px]"
//             >
//               Our Perspective
//             </h2>

//             <p className="mt-6 max-w-[520px] text-lg leading-8 text-white/75">
//               Good digital solutions begin with a clear understanding of the
//               problem, the people involved, and the goals they support. That
//               principle shapes every project we take on.
//             </p>
//           </header>

//           <div>
//             <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
//               Where We Can Help
//             </h3>

//             <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
//               {HELP_ITEMS.map((item) => (
//                 <li key={item} className="flex items-start gap-4 py-5">
//                   <span
//                     aria-hidden="true"
//                     className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F1842D]"
//                   />
//                   <span className="text-base leading-7 text-white/85">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <ol
//           aria-label="Process"
//           className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
//         >
//           {PROCESS.map(({ step, title, text }) => (
//             <li
//               key={step}
//               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F1842D]/50 hover:bg-white/[0.07] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
//             >
//               <span
//                 aria-hidden="true"
//                 className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F1842D] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
//               />
//               <span className="text-sm font-bold tracking-[0.2em] text-[#F1842D]">
//                 {step}
//               </span>
//               <h3 className="mt-4 text-lg font-bold">{title}</h3>
//               <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
//             </li>
//           ))}
//         </ol>

//         <p className="mt-16 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/60 sm:text-sm">
//           One Team. Integrated Expertise.{" "}
//           <span className="text-[#F1842D]">Digital Progress.</span>
//         </p>
//       </div>
//     </section>
//   );
// }

import { ArrowUpRight } from "lucide-react";

const HELP_ITEMS = [
  "Not selling online yet, or not getting results from your store?",
  "Have data but no clear insights?",
  "Unsure how AI can support your work?",
  "Need a stronger digital presence on a limited budget?",
];

const PROCESS = [
  {
    step: "01",
    title: "Understand",
    text: "We start by learning your business, your audience, and the problem you need to solve.",
  },
  {
    step: "02",
    title: "Strategize",
    text: "We identify the right opportunities and priorities, and build a plan that fits your resources.",
  },
  {
    step: "03",
    title: "Implement",
    text: "Where needed, we help put the plan into action, from websites and online stores to AI-powered workflows and marketing.",
  },
  {
    step: "04",
    title: "Measure",
    text: "We track results and refine, so progress is based on data.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden scroll-mt-[74px] bg-[#0B1F3F] py-24 text-white lg:py-32"
    >
      {/* هاله‌های رنگی متحرک پس‌زمینه مشابه عکس اول و دوم */}
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#173B66]/60 blur-[120px] animate-glow-right" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-96 w-96 rounded-full bg-[#F1842D]/10 blur-[130px] animate-glow-left" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">
        {/* Row 1 */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <header>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F1842D]">
              About Astrolab Digital
            </p>
            <h2
              id="about-title"
              className="mt-5 text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[56px]"
            >
              Our Perspective
            </h2>
            <p className="mt-6 max-w-[520px] text-lg leading-8 text-white/75">
              Good digital solutions begin with a clear understanding of the
              problem, the people involved, and the goals they support. That
              principle shapes every project we take on.
            </p>
          </header>

          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Where We Can Help
            </h3>
            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {HELP_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-4 py-5">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F1842D]"
                  />
                  <span className="text-base leading-7 text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: پیاده‌سازی کارت‌ها دقیقا مطابق ساختار عکس سوم شما با دکمه هوور شو */}
        <ol
          aria-label="Process"
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {PROCESS.map(({ step, title, text }) => (
            <li
              key={step}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0f274d]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-[#13305c]/80"
            >
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#F1842D]">
                  {step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
              </div>

              {/* دکمه اختصاصی که در حالت عادی مخفی است و با هوور کارت پدیدار می‌شود */}
              <div className="mt-5 grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066fe] py-3 text-xs font-bold text-white shadow-lg transition-colors hover:bg-[#0052cc]">
                    Learn more
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Closing line */}
        <p className="mt-16 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/60 sm:text-sm">
          One Team. Integrated Expertise.{" "}
          <span className="text-[#F1842D]">Digital Progress.</span>
        </p>
      </div>
    </section>
  );
}
