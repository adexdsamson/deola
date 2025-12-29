import { useState } from "react";
import {
  Audapp,
  AutogonAI,
  Ulego,
  Eapay,
  Gidaah,
  Setraco,
  Swiftpro,
  Orbipayx,
} from "../../assets";
import { Typography } from "../../common/shared";
import { PortfolioImage, PortfolioModel } from "./layouts";

const Portfolios = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("all");
  const [fullDetail, setFullDetail] = useState(null);

  let data = [
    {
      src: Audapp,
      name: "Audapp",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Redux", "Tailwind-ui"],
      project_link: "http://audapp.com/",
      description:
        "AudApp features a Creator Studio tool and a robust set of features that make it easy to create and promote high-quality audio content for the pleasure and growth of their listening community. ",
    },
    {
      src: AutogonAI,
      name: "Autogon AI",
      keywords: ["all", "website"],
      stacks: [
        "• ReactJs",
        "• Tailwind",
        "• Redux",
        "• Redux-toolkits",
        "• RTK for API communication",
        "• React Router for client-side routing",
        "• Git for version control",
        "• Draft.js for rich text editing",
        "• Sentry for error monitoring",
        "• Third-party authentication (Google and Github)",
        "• React Flow and React DnD for visual flow editing",
      ],
      project_link: "https://autogon.ai/",
      github_link: "",
      description:
        "• Integrated RESTful APIs and managed data fetching using RTK, contributing to a smooth data exchange between the frontend and backend. <br /> • Mentored junior developers, conducted code reviews, and maintained coding standards to ensure the team's productivity and code quality. <br /> • Collaborated closely with QA testers to identify and address software defects, resulting in a polished and reliable application. <br /> • Customized user authentication and authorization modules to guarantee secure access for different user roles and maintain data integrity. <br /> • Integrated a drag n drop component for the no-code feature of the app. <br /> • Integrated a workflow. <br /> • Designed and implemented complex user interfaces using React.js, delivering a seamless and intuitive user experience. <br /> • Utilized Redux Toolkit to efficiently manage the application's state, resulting in improved maintainability and performance. <br /> • Integrated React Flow and React DnD libraries to create a sophisticated visual flow editor, empowering users to design intricate processes effortlessly. <br /> • Leveraged third-party authentication methods, including Google and Github, to ensure secure and convenient user access. <br /> • Implemented Stripe payment processing, enabling seamless subscription management and online transactions. <br /> • Integrated Sentry for real-time error monitoring, proactively identifying and addressing issues to maintain a stable user experience. <br /> • Utilized Draft.js to develop a rich text editor, allowing users to create and customize content seamlessly. <br /> • Employed Formik and Yup for form management and validation, streamlining data collection and ensuring data accuracy.",
    },
    {
      src: Ulego,
      name: "Ulego ",
      keywords: ["all", "mobile"],
      stacks: [
        "React Native",
        "Tailwind",
        "Expo",
        "Redux",
        "Redux-toolkits",
        "JavaScript ES6+",
        "RESTful API integration",
        "Tailwindcss for styling",
        "Git for version control",
        "JIRA for project management and issue tracking",
      ],
      project_link: "https://play.google.com/store/search?q=ulego&c=apps",
      github_link: "",
      description: `• Successfully integrated Redux Toolkit to manage the app's state, resulting in improved state management efficiency and better code maintainability. <br /> •Integrate push notification <br /> • Integrated secure authentication and authorization mechanisms to ensure the safety of user data and transactions. <br /> • Implemented real-time financial data updates using WebSocket connections, providing users with up-to-the-minute market information. <br /> • Developed custom UI components to reflect the app's unique branding and optimized performance for both iOS and Android platforms. <br /> • Collaborated closely with cross-functional teams including designers, backend developers, and product managers to deliver a feature-rich application meeting all requirements.`,
    },
    {
      src: Eapay,
      name: "Eapay ",
      keywords: ["all", "mobile"],
      stacks: [
        "React Native",
        "Tailwind",
        "Expo",
        "Redux",
        "Redux-toolkits",
        "JavaScript ES6+",
        "RESTful API integration",
        "Tailwindcss for styling",
        "Git for version control",
        "JIRA for project management and issue tracking",
      ],
      project_link:
        "https://play.google.com/store/apps/details?id=com.tryeapay.mobile",
      github_link: "",
      description: `• Built project with React Native, Tailwind CSS, Redux and its supporting libraries. <br /> • Employed push notifications to help customers perform different kinds of payment.<br />  • Gave the merchant a feature, to upload products to be visible to customers within their neighbourhood.<br />  • Customers can make money transfers by using phone numbers from their contact lists.<br />  • In-person payment is performed by customers scanning the merchant's QR code.The project is to help merchants accept in-person payments from their customers. <br /> • Developed custom UI components to reflect the app's unique branding and optimized performance for both iOS and Android platforms. <br /> • Integrated secure authentication and authorization mechanisms to ensure the safety of user data and transactions.
`,
    },
    {
      src: Orbipayx,
      name: "OrbiPayX – Fintech Compliance & Admin Portal",
      keywords: ["all", "website"],
      stacks: [
        "React 18",
        "TypeScript",
        "Vite",
        "TanStack Query",
        "Zustand",
        "AES-GCM encryption",
        "RBAC",
        "Jest",
        "Playwright",
      ],
      project_link: "https://orbipayx.com/",
      github_link: "",
      description:
        "• Architected financial compliance dashboard enabling real-time monitoring of transactions, disputes, and FINTRAC regulatory reporting. <br /> • Engineered end-to-end AES-GCM encryption for all API payloads and responses ensuring banking-grade data security. <br /> • Built scalable Role-Based Access Control (RBAC) with granular permissions for admins and compliance teams. <br /> • Optimized high-volume audit log visualizations using TanStack Query and Zustand achieving sub-second load times.",
    },
    {
      src: Gidaah,
      name: "Gidaah – Vacation Rentals & Booking Platform",
      keywords: ["all", "website"],
      stacks: [
        "Next.js 15 (App Router)",
        "SSR/ISR",
        "Axios",
        "React Query",
        "Radix/ShadCN UI",
        "React Hook Form",
        "Zod",
        "Stripe",
        "Veriff",
        "Jest",
        "Playwright",
      ],
      project_link: "https://www.gidaah.com/",
      github_link: "",
      description:
        "• Delivered production-grade booking flows with 70% faster page loads via SSR/ISR optimization. <br /> • Architected type-safe API layer with centralized auth, 401 handling, and intelligent caching. <br /> • Integrated Stripe payment intents and Veriff identity verification for regulatory compliance. <br /> • Established automated quality gates with Jest/RTL and Playwright for robust releases.",
    },
    {
      src: Swiftpro,
      name: "SwiftPro – B2B eProcurement Portal",
      keywords: ["all", "website"],
      stacks: [
        "React + TypeScript",
        "React Router",
        "Role-based navigation",
        "Centralized HTTP layer",
        "React Query",
        "Tailwind + Radix primitives",
        "Shared DataTables",
        "Playwright",
      ],
      project_link: "https://swiftpro.tech/",
      github_link: "",
      description:
        "• Led SPA architecture across solicitation publishing, vendor onboarding, proposal evaluation, and contract workflows. <br /> • Implemented secure route guards and role-based access across admin, vendor, and evaluator roles. <br /> • Standardized backend integration via centralized HTTP layer with React Query reducing duplication by 50%. <br /> • Built reusable component library maintaining consistency across 20+ procurement workflows and added E2E coverage.",
    },
    {
      src: Setraco,
      name: "Setraco – Residential Community App",
      keywords: ["all", "mobile"],
      stacks: [
        "React Native (Expo, TypeScript)",
        "Shared UI components",
        "Redux Toolkit",
        "NativeWind/Tailwind",
        "QR/Biometric auth",
        "EAS pipeline",
      ],
      project_link: "https://play.google.com/store/apps/details?id=com.setraco.app&hl=en",
      github_link: "",
      description:
        "• Architected cross-platform mobile app for amenities booking, guest access, maintenance requests, and emergencies. <br /> • Designed modular feature architecture with 15+ shared components across 20+ modules. <br /> • Integrated secure authentication flows with QR and biometrics ensuring resident privacy. <br /> • Established EAS-based release pipeline enabling one-command Android submissions.",
    },
  ];

  let keywords = ["all", "website", "mobile"];

  const filteredPortfolios = data.filter((item) =>
    item.keywords.includes(selectedKeyword)
  );
  
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-black">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold text-secondary"}
          uppercase
        >
          Recent <span className="text-primary">Portfolios</span>
        </Typography>
      </div>
      <div className="flex items-center justify-center mt-2">
        {keywords.map((item, i) => (
          <Typography
            {...{
              key: i,
              variant: "body1",
              className: `mx-1 ${
                selectedKeyword === item &&
                "border-b-2 p-2 border-green-400 font-bold"
              } cursor-pointer hover:text-green-400`,
              color: "white",
              onClick: () => setSelectedKeyword(item),
              capitalize: true,
            }}
          >
            {item}
          </Typography>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-10 gap-10 mt-14 lg:px-20 px-8 pb-10">
        {filteredPortfolios.map(({ src, name }, key) => (
          <PortfolioImage
            {...{
              src,
              name,
              key,
              onClick: () => {
                let result = data.find((item) => item.name === name);
                setFullDetail(result);
              },
            }}
          />
        ))}
      </div>
      <PortfolioModel
        {...{
          src: fullDetail?.src,
          title: fullDetail?.name,
          open: fullDetail !== null,
          onClose: () => setFullDetail(null),
          stacks: fullDetail?.stacks ?? [],
          project_link: fullDetail?.project_link,
          github_link: fullDetail?.github_link,
          description: fullDetail?.description,
        }}
      />
    </div>
  );
};

export default Portfolios;
