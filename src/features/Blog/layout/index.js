import { Button, Typography } from "../../../common/shared";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const BlogCard = ({ coverImage, slug, title, body, }) => {
  return (
    <div class="bg-gray-700 shadow-md border border-gray-700 rounded-lg max-w-sm mb-5">
      <img class="rounded-t-lg object-cover h-52" src={coverImage} alt="" />
      <div class="p-5">
        <Typography variant="subheader1" color="white" className="mb-2">
          {title}
        </Typography>
        <Typography capitalize color="white" className="mb-3 text-opacity-60">
          {body}
        </Typography>
        <Button
          component="a"
          href={`https://hashnode.com/${slug}`}
          text="read more"
          className="h-8 w-32"
          textClassName="text-white/80 ml-5"
          icon={
            <ArrowNarrowRightIcon className="text-white h-3 w-3 animate-pulse" />
          }
          iconClassName="h-8 w-8 -top-[1px] right-[1px]"
        />
      </div>
    </div>
  );
};

export default BlogCard;
