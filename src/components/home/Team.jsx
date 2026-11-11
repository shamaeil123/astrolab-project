// import { useState } from "react";
// import {
//   Brain,
//   Code2,
//   Megaphone,
//   ShoppingCart,
//   BarChart3,
//   Workflow,
// } from "lucide-react";

// const HIDE_EMPTY_LINKS = true;

// const p = (
//   name,
//   role,
//   photo = "",
//   github = "https://github.com/username",
//   linkedin = "https://www.linkedin.com/in/username",
//   instagram = "https://www.instagram.com/username",
//   facebook = "https://www.facebook.com/username",
// ) => ({
//   name,
//   role,
//   photo,
//   github,
//   linkedin,
//   instagram,
//   facebook,
// });

// const DEPTS = [

//   {
//     key: "web",
//     icon: Code2,
//     title: "Web Development",
//     short: "Web",

//     links: ["github", "linkedin"],

//     members: [
//       p(
//         "Hamisha Noori",
//         "Frontend Developer",
//         "/hamisha-noori.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "",
//         "",
//       ),

//       p(
//         "Arezo Ahmadi",
//         "Frontend Developer",
//         "/arezo-ahmadi.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "",
//       ),

//       p(
//         "Fatima Fayazi",
//         "Web Developer",
//         "/fatima-fayazi.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "",
//       ),

//       p(
//         "Nasima Alizada",
//         "Frontend Developer",
//         "/nasima-alizada.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "",
//       ),

//       p(
//         "Shamaeil Mohammadi",
//         "Web Developer",
//         "/shamaeil-mohammadi.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "",
//         "",
//       ),

//       p(
//         "Somaia Ahmadi",
//         "Frontend Developer",
//         "/somaia-ahmadi.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "",
//         "",
//       ),
//     ],
//   },

//   {
//     key: "ecommerce",
//     icon: ShoppingCart,
//     title: "E-Commerce",
//     short: "E-Commerce",

//     links: ["instagram", "facebook", "linkedin"],

//     members: [
//       p(
//         "Kowsar Sediqi",
//         "E-Commerce Specialist",
//         "/kowsar-sediqi.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Hosai Ghafoori",
//         "E-Commerce Specialist",
//         "/hosai-ghafoori.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Soma Ghafoori",
//         "E-Commerce Specialist",
//         "/soma-ghafoori.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Omulbanin Mohammadi",
//         "E-Commerce Specialist",
//         "/omulbanin-mohammadi.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Qudsia Karimi",
//         "E-Commerce Specialist",
//         "/qudsia-karimi.jpg",
//         "https://github.com/username",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),
//     ],
//   },

//   {
//     key: "ai",
//     icon: Brain,
//     title: "AI & Strategy",
//     short: "AI",

//     links: ["github", "linkedin"],

//     members: [
//       p(
//         "Sameera Mahmodi",
//         "AI & Strategy Specialist",
//         "/sameera-mahmodi.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Setara Ahmadi",
//         "AI & Strategy Specialist",
//         "/setara-ahmadi.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Soudabeh Mohammady",
//         "AI & Strategy Specialist",
//         "/soudabeh-mohammady.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Asma Samadi",
//         "AI & Strategy Specialist",
//         "/asma-samadi.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),
//     ],
//   },

//   {
//     key: "marketing",
//     icon: Megaphone,
//     title: "Digital Marketing",
//     short: "Marketing",

//     links: ["instagram", "facebook", "linkedin"],

//     members: [
//       p(
//         "Sanawbar Jalal",
//         "Digital Marketing Specialist",
//         "/sanawbar-jalal.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Zarmina Amiri",
//         "Digital Marketing Specialist",
//         "/zarmina-amiri.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Shukria Ghanizada",
//         "Digital Marketing Specialist",
//         "/shukria-ghanizada.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Zakia Taqdir",
//         "Digital Marketing Specialist",
//         "/zakia-taqdir.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),
//     ],
//   },

//   {
//     key: "data",
//     icon: BarChart3,
//     title: "Data Analytics & BI",
//     short: "Data",

//     links: ["github", "linkedin"],

//     members: [
//       p(
//         "Rosella Khedri",
//         "Data Analyst",
//         "/rosella-khedri.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),

//       p(
//         "Fahima Sharifi",
//         "Data Analyst",
//         "/fahima-sharifi.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),
//     ],
//   },

//   {
//     key: "pm",
//     icon: Workflow,
//     title: "Project Management",
//     short: "Management",

//     links: ["linkedin"],

//     members: [
//       p(
//         "Hadia Sultani",
//         "Project Manager",
//         "/hadia-sultani.jpg",
//         "https://www.linkedin.com/in/username",
//         "https://www.instagram.com/username",
//         "https://www.facebook.com/username",
//         "",
//         "",
//         "",
//         "",
//       ),
//     ],
//   },
// ];

// const initials = (name) =>
//   name
//     .split(" ")
//     .map((word) => word[0])
//     .slice(0, 2)
//     .join("");

// const GithubIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
//   </svg>
// );

// const LinkedinIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45h3.56Z" />
//   </svg>
// );

// const FacebookIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//   </svg>
// );

// const InstagramIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.75 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
//   </svg>
// );

// const NETWORKS = {
//   github: {
//     label: "GitHub",
//     Icon: GithubIcon,
//     bg: "#24292F",
//   },

//   linkedin: {
//     label: "LinkedIn",
//     Icon: LinkedinIcon,
//     bg: "#0A66C2",
//   },

//   facebook: {
//     label: "Facebook",
//     Icon: FacebookIcon,
//     bg: "#1877F2",
//   },

//   instagram: {
//     label: "Instagram",
//     Icon: InstagramIcon,
//     bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
//   },
// };

// function SocialLink({ href, label, Icon, bg }) {

//   if (!href && HIDE_EMPTY_LINKS) {
//     return null;
//   }

//   const cls =
//     "grid h-9 w-9 place-items-center rounded-full text-white transition-all duration-200";

//   if (href) {
//     return (
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={label}
//         title={label}
//         style={{ background: bg }}
//         className={`${cls} hover:scale-110 hover:shadow-lg`}
//       >
//         <Icon className="h-[18px] w-[18px]" />
//       </a>
//     );
//   }

//   return (
//     <span
//       aria-hidden="true"
//       style={{ background: bg }}
//       className={`${cls} opacity-40`}
//     >
//       <Icon className="h-[18px] w-[18px]" />
//     </span>
//   );
// }

// function MemberCard({ m, role, links }) {
//   return (
//     <li className="group w-[calc(50%-0.5rem)] sm:w-[calc((100%-3rem)/3)] lg:w-[300px]">
//       <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">

//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/25 via-transparent to-transparent" />
//         </div>

//         <div className="relative z-10 mx-3 -mt-10 rounded-[16px] bg-white px-3 pb-4 pt-3.5 text-center shadow-[0_14px_34px_rgba(0,0,0,0.25)] sm:mx-4">

//           <p className="text-[13px] font-bold leading-tight text-[#F1842D]">
//             {m.role || role}
//           </p>

//           <p className="mt-1 text-base font-extrabold leading-tight tracking-[-0.01em] text-[#0B1F3F] sm:text-[17px]">
//             {m.name}
//           </p>

//           <div className="mt-3 flex min-h-[36px] justify-center gap-2">
//             {links.map((network) => {
//               const item = NETWORKS[network];

//               if (!item) return null;

//               return (
//                 <SocialLink
//                   key={network}
//                   href={m[network]}
//                   label={`${m.name} on ${item.label}`}
//                   Icon={item.Icon}
//                   bg={item.bg}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// }

// export default function Team() {
//   const [active, setActive] = useState(0);

//   const d = DEPTS[active];

//   const Icon = d.icon;

//   return (
//     <section
//       id="team"
//       aria-labelledby="team-title"
//       className="scroll-mt-[74px] bg-[#0B1F3F] px-5 pb-20 pt-16 text-white sm:px-8 lg:px-10 lg:pb-24 lg:pt-20"
//     >

//       <style>{`

//         @keyframes team-in {

//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }

//           to {
//             opacity: 1;
//             transform: none;
//           }

//         }

//       `}</style>

//       <div className="mx-auto max-w-[1100px]">

//         <header className="text-center">
//           <h2
//             id="team-title"
//             className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[50px]"
//           >
//             The Team
//           </h2>

//           <div className="mx-auto mt-4 h-1 w-14 rounded bg-[#F1842D]" />

//           <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
//             Five specialties. One team. Coordinated by Project Management.
//           </p>
//         </header>

//         <div className="sticky top-[74px] z-30 -mx-5 mt-8 bg-[#0B1F3F]/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
//           <div
//             role="tablist"
//             aria-label="Specialties"
//             className="mx-auto flex max-w-full gap-2 overflow-x-auto sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//           >
//             {DEPTS.map((x, i) => {
//               const I = x.icon;

//               const on = i === active;

//               return (
//                 <button
//                   key={x.key}
//                   role="tab"
//                   aria-selected={on}
//                   aria-controls="team-panel"
//                   onClick={() => setActive(i)}
//                   className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
//                     on
//                       ? "bg-[#F1842D] text-white shadow-lg"
//                       : "bg-white/10 text-white/85 hover:bg-white/20"
//                   }`}
//                 >
//                   <I size={16} strokeWidth={1.9} />

//                   {x.short}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         <div
//           key={d.key}
//           id="team-panel"
//           role="tabpanel"
//           className="mt-8"
//           style={{
//             animation: "team-in .45s ease both",
//           }}
//         >

//           <div className="text-center">
//             <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#F1842D]">
//               <Icon size={20} strokeWidth={1.8} />
//             </span>

//             <h3 className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] sm:text-[32px]">
//               {d.title}
//             </h3>
//           </div>

//           <ul className="mx-auto mt-8 flex max-w-[960px] flex-wrap justify-center gap-x-4 gap-y-10 sm:gap-x-6">
//             {d.members.map((m) => (
//               <MemberCard key={m.name} m={m} role={d.title} links={d.links} />
//             ))}
//           </ul>
//         </div>
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
