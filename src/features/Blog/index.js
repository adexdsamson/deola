/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Typography } from "../../common/shared";
import BlogCard from "./layout";

const BlogSection = () => {
  let data = [
    {
      src: "https://flowbite.com/docs/images/blog/image-1.jpg",
      link: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      src: "https://flowbite.com/docs/images/blog/image-1.jpg",
      link: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      src: "https://flowbite.com/docs/images/blog/image-1.jpg",
      link: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      src: "https://flowbite.com/docs/images/blog/image-1.jpg",
      link: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      src: "https://flowbite.com/docs/images/blog/image-1.jpg",
      link: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      src: "https://flowbite.com/docs/images/blog/image-1.jpg",
      link: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];
  return (
    <div className="h-screen overflow-x-hidden scrollbar-hide bg-black ">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold"}
          uppercase
        >
          My <span className="text-green-400">Blogs</span>
        </Typography>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-14 px-20">
        {data.map(({ src, title, link, body }, i) => (
          <BlogCard {...{ src, link, title, body }} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
