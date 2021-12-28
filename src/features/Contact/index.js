import { Button, Input, Typography } from "../../common/shared";
import { Link } from 'react-router-dom'
import {
  ArrowNarrowRightIcon,
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  let data = [
    { icon: <FaFacebookF className="text-white h-4 w-4" />, link: 'https://www.facebook.com' },
    { icon: <FaTwitter className="text-white h-4 w-4" />,  link: 'https://www.twitter.com' },
    { icon: <FaLinkedinIn className="text-white h-4 w-4" />,  link: 'https://www.linkedin.com/' },
    { icon: <FaInstagram className="text-white h-4 w-4" />,  link: 'https://www.instagram.com/' },
  ];
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
      <div className="lg:flex items-center justify-center gap-10 mt-14 lg:px-20 px-8 pb-10 lg:pb-0">
        <div className="h-full w-80">
          <Typography
            variant="h4"
            color="white"
            className={"font-bold"}
            uppercase
          >
            DON'T BE SHY !
          </Typography>
          <Typography
            variant={"body2"}
            color="white"
            className={"text-opacity-60 mt-2 leading-5"}
          >
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </Typography>
          <div>
            <div className="flex gap-5 mt-9">
              <div className="">
                <LocationMarkerIcon className="text-green-400 h-10 w-10" />
              </div>
              <div>
                <Typography
                  variant="subheader2"
                  color="white"
                  className={"font-bold"}
                  uppercase
                >
                  Address point
                </Typography>
                <Typography
                  variant={"body2"}
                  color="white"
                  className={"text-opacity-60 mt-2"}
                >
                  26, okeowo - somorin ifako - gbagada Lagos, Nigeria.
                </Typography>
              </div>
            </div>
            <div className="flex gap-5 mt-7">
              <div className="">
                <MailIcon className="text-green-400 h-10 w-10" />
              </div>
              <div>
                <Typography
                  variant="subheader2"
                  color="white"
                  className={"font-bold"}
                  uppercase
                >
                  mail me
                </Typography>
                <Typography
                  variant={"body2"}
                  color="white"
                  className={"text-opacity-60 mt-2"}
                >
                  adexdsamson@gmail.com
                </Typography>
              </div>
            </div>
            <div className="flex gap-5 mt-7">
              <div className="">
                <PhoneIcon className="text-green-400 h-10 w-10" />
              </div>
              <div>
                <Typography
                  variant="subheader2"
                  color="white"
                  className={"font-bold"}
                  uppercase
                >
                  call me
                </Typography>
                <Typography
                  variant={"body2"}
                  color="white"
                  className={"text-opacity-60 mt-2"}
                >
                  +2348160622940
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-7 items-center">
            {data.map((item, i) => (
              <a href={item.link}>
                <div key={i} className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              </a>
            ))}
          </div>
        </div>
        <div className="h-full grow">
          <form className="lg:mx-10 mt-10 lg:mt-0">
            <div className="lg:flex gap-3 lg:mb-10 mb-5 items-center">
              <Input placeholder="Your name" />
              <Input placeholder="your email" className="mt-5 lg:mt-0" />
            </div>
            <Input className="mlg:b-10 mb-5" placeholder="subject" />
            <Input
              variant="textarea"
              className="rounded-2xl lg:mb-10 mb-5"
              placeholder="your message"
              rows={6}
            />
            <Button
              text="send message"
              icon={<ArrowNarrowRightIcon className="text-white h-5 w-5 animate-pulse" />}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
