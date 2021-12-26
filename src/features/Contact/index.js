import { Button, Input, Typography } from "../../common/shared";

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
      <div className="flex items-center justify-center gap-10 mt-14 px-20">
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
            <div className="flex gap-7 mt-9">
              <div className=" bg-orange-400"></div>
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
            <div className="flex gap-7 mt-7">
              <div className=" bg-orange-400"></div>
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
            <div className="flex gap-7 mt-7">
              <div className=""></div>
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
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        <div className="h-full grow">
          <form className="mx-10">
            <div className="flex gap-3 mb-10 items-center">
              <Input placeholder="Your name" />
              <Input placeholder="your email" />
            </div>
            <Input className="mb-10" placeholder="subject" />
            <Input
              variant="textarea"
              className="rounded-2xl mb-10"
              placeholder="your message"
              rows={6}
            />
            <Button text="send message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
