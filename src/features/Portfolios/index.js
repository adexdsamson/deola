import { useState } from "react";
import {
  Hootr,
  UberClone,
  HillCross,
  Audapp,
  Herfession,
  HerfessionWeb,
  AutogonAI,
  Ulego,
  Eapay
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
      src: HillCross,
      name: "HillCross College",
      keywords: ["all", "website"],
      stacks: [
        "Reactjs",
        "Redux and Redux Toolkit",
        "Tailwind Css",
        "React Router for client-side routing",
        "Git for version control",
        "RTK for API communication",
        "JavaScript ES6+",
      ],
      project_link: "http://online.hillcrosscollege.com/",
      description:
        "•Implemented the application's state management using Redux Toolkit, ensuring a centralized and efficient data flow throughout the platform. <br /> • Translated design concepts into responsive and user-friendly interfaces, enhancing the user experience and engagement. <br /> • Designed and integrated a wide range of features including class schedules, assignment submissions, grade tracking, and messaging for seamless communication between stakeholders. <br /> • Customized user authentication and authorization modules to guarantee secure access for different user roles and maintain data integrity. <br /> • Employed Redux Thunk middleware to manage asynchronous operations, optimizing API requests and enhancing overall application performance. <br /> • Integrated RESTful APIs and managed data fetching using RTK, contributing to a smooth data exchange between the frontend and backend. <br /> • Leveraged React Router for efficient client-side routing, creating a seamless and dynamic user experience.",
    },
    {
      src: Hootr,
      name: "Hootr - dating app",
      keywords: ["all", "mobile"],
      stacks: [
        "• React Native",
        "• Expo",
        "• Firebase for real-time features and backend services",
        "• Redux for state management",
        "• Payment gateway integration (e.g., Stripe) for in-app purchases",
        "• Tailwind css",
        "• Git for version control",
        "• JIRA for project management and issue tracking",
        "• Sentry for error monitoring",
      ],
      project_link: "https://expo.dev/@adexd/hootr",
      github_link: "",
      description:
        "•Engineered the app's front-end using React Native, resulting in a cross-platform mobile application compatible with iOS and Android devices. <br /> • Implemented a robust state management system using Redux, enhancing data flow and application performance. <br /> • Integrated real-time features with Firebase, enabling instant messaging and updates on user interactions. <br /> • Designed and developed an engaging swiping mechanism similar to Tinder's, allowing users to quickly browse and match with potential partners. <br /> • Utilized geolocation services to provide accurate location-based matching, enhancing the app's relevancy and user experience. <br /> • Implemented in-app purchases and subscription management, leveraging payment gateways for monetization strategies. <br /> • Utilized Git for version control to maintain a collaborative and organized development environment.",
    },
    {
      src: UberClone,
      name: "Uber clone app",
      keywords: ["all", "mobile"],
      stacks: ["React Native", "Expo", "Google api"],
      project_link: "https://expo.dev/@adexd/uber_clone",
      github_link: "",
      description:
        "A simple Uber clone that retrieves a position from Google Geolocation API and computes the distance matrix from origin to destination, as well as displaying map distance",
    },
    {
      src: Herfession,
      name: "Herfession",
      keywords: ["all", "mobile"],
      stacks: [
        "React Native",
        "Expo",
        "Firebase (Firestore, Firebase Realtime Database, Authentication, Cloud Functions)",
        "User authentication and authorization",
        "Git for version control",
      ],
      project_link:
        "https://play.google.com/store/apps/details?id=com.thrmedia.herfessionsapp",
      github_link: "",
      description:
        "• Integrated Firebase services, including Firestore and Firebase Realtime Database, to enable real-time data synchronization and live content sharing. <br /> • Engineered the app's mobile interface using React Native, resulting in a seamless and responsive cross-platform application for iOS and Android. <br /> • Spearheaded the development of a live recording application utilizing Firebase, React Native, and cutting-edge technologies. <br /> • Developed a sophisticated live recording feature, empowering users to capture and broadcast live audio and video streams directly within the app.",
    },
    {
      src: HerfessionWeb,
      name: "Herfession expert web app",
      keywords: ["all", "website"],
      stacks: ["ReactJs", "Tailwind", "Firebase", "Redux", "Redux-toolkits"],
      project_link: "https://herfession-expert.firebaseapp.com/",
      github_link: "",
      description: "Built with reactjs firebase redux ",
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
