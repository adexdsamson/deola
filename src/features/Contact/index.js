import { Button, Input, Typography } from "../../common/shared";
import { Link } from "react-router-dom";
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
  FaGithub
} from "react-icons/fa";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  let data = [
    {
      icon: <FaFacebookF className="text-primary h-4 w-4" />,
      link: "https://www.facebook.com/samsonadeola94",
    },
    {
      icon: <FaTwitter className="text-primary h-4 w-4" />,
      link: "https://www.twitter.com",
    },
    {
      icon: <FaLinkedinIn className="text-primary h-4 w-4" />,
      link: "https://www.linkedin.com/in/adeolasadediran/",
    },
    {
      icon: <FaInstagram className="text-primary h-4 w-4" />,
      link: "https://www.instagram.com/diran_deola",
    },
    {
      icon: <FaGithub className="text-primary h-4 w-4" />,
      link: "https://github.com/adexdsamson",
    },
  ];


  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-black">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold text-secondary"}
          uppercase
        >
          Get in <span className="text-primary">Touch</span>
        </Typography>
      </div>
      <div className="lg:flex items-center justify-center gap-10 mt-14 lg:px-20 px-8 pb-10 lg:pb-0">
        <div className="h-full w-80">
          <Typography
            variant="h4"
            color="white"
            className={"font-bold text-secondary"}
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
                <LocationMarkerIcon className="text-primary h-10 w-10" />
              </div>
              <div>
                <Typography
                  variant="subheader2"
                  color="white"
                  className={"font-bold text-secondary"}
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
                <MailIcon className="text-primary h-10 w-10" />
              </div>
              <div>
                <Typography
                  variant="subheader2"
                  color="white"
                  className={"font-bold text-secondary"}
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
                <PhoneIcon className="text-primary h-10 w-10" />
              </div>
              <div>
                <Typography
                  variant="subheader2"
                  color="white"
                  className={"font-bold text-secondary"}
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
                <div
                  key={i}
                  className="w-8 h-8 bg-secondary flex items-center justify-center rounded-full"
                >
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="h-full grow">
          <form className="lg:mx-10 mt-10 lg:mt-0">
            <div className="lg:flex gap-3 lg:mb-10 mb-5 items-center">
              <Input
                placeholder="Your name"
                onChange={(value) => setName(value)}
              />
              <Input
                placeholder="your email"
                className="mt-5 lg:mt-0"
                onChange={(value) => setEmail(value)}
              />
            </div>
            <Input
              className="lg:mb-10 mb-5"
              placeholder="subject"
              onChange={(value) => setSubject(value)}
            />
            <Input
              variant="textarea"
              className="rounded-2xl lg:mb-10 mb-5"
              onChange={(value) => setMessage(value)}
              placeholder="your message"
              rows={6}
            />
            <Button
              component="a"
              href={`mailto:offers@deolaadediran.com?cc=${email}?subject=${subject}&body=${message}`}
              text="send message"
              icon={
                <ArrowNarrowRightIcon className="text-white h-5 w-5 animate-pulse" />
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
