import { Link } from "react-router-dom";
import { Button, Typography } from "../../../common/shared";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const BlogCard = ({ src, link, title, body, onClick }) => {
  return (
    <div class="bg-gray-700 shadow-md border border-gray-700 rounded-lg max-w-sm mb-5">
      <Link to={link}>
        <img
          class="rounded-t-lg"
          src={src}
          alt=""
        />
      </Link>
      <div class="p-5">
        <Link to={link}>
          <Typography variant="subheader1" color="white" className="mb-2">
            {title}
          </Typography>
        </Link>
        <Typography capitalize color="white" className="mb-3 text-opacity-60">
          {body}
        </Typography>
        <Button
          onClick={onClick}
          text="read more"
          className="h-8 w-32"
          textClassName="text-white/80 ml-5"
          icon={<ArrowNarrowRightIcon className="text-white h-5 w-5 animate-pulse" />}
          iconClassName="h-8 w-8 -top-[1px] right-[1px]"
        />
      </div>
    </div>
  );
};

export default BlogCard;
