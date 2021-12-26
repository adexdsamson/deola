import { Typography } from "../../common/shared";

const ContactUs = () => {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-black">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold"}
          uppercase
        >
          Get in <span className="text-green-400">Touch</span>
        </Typography>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-14 px-20"></div>
    </div>
  );
};

export default ContactUs;
