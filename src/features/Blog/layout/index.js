import { Link } from "react-router-dom";
import { Button, Typography } from "../../../common/shared";

const BlogCard = ({ src, link, title, body, onClick }) => {
  return (
    <div class="bg-white shadow-md border border-green-200 rounded-lg max-w-sm mb-5">
      <Link to={link}>
        <img
          class="rounded-t-lg"
          src={src}
          alt=""
        />
      </Link>
      <div class="p-5">
        <Link to={link}>
          <Typography variant="subheader1" className="mb-2">
            {title}
          </Typography>
        </Link>
        <Typography capitalize color="defaultBody" className="mb-3">
          {body}
        </Typography>
        <Button
          onClick={onClick}
          text="read more"
          className="h-8 w-32 hover:text-white"
          textClassName="text-green-400/80 hover:text-white ml-5"
          iconClassName="h-8 w-8 -top-[1px] right-[1px]"
        />
      </div>
    </div>
  );
};

export default BlogCard;
