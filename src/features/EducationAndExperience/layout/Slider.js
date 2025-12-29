/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from "../../../common/shared";

const SliderComponent = ({ data }) => {
  return (
    <ul className="overflow-x-auto scrollbar-hide w-full items-center flex flex-wrap gap-4 snap-x pb-16 max-h-[80vh]">
      {data.map(
        (
          {
            company,
            position,
            content,
            highlights = [],
            duration,
            icon,
            tags = [],
          },
          i
        ) => {
          const desc =
            Array.isArray(highlights) && highlights.length > 0
              ? highlights.slice(0, 4).join(" ")
              : content;
          return (
            <li key={i} className="snap-center">
              <div className="rounded-2xl min-h-56 w-[22rem] md:w-[24rem] p-6 bg-primary/25 border border-accent/30 hover:border-accent/60 transition-colors">
                <a href="#" className="w-full h-full block">
                  <div className="relative">
                    <span className="absolute -top-3 -left-1 text-secondary/30 text-5xl leading-none select-none">
                      “
                    </span>
                    <Typography
                      variant={"body2"}
                      className={"text-white/90 italic leading-7"}
                    >
                      {desc}
                    </Typography>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-9 w-9 bg-primary flex items-center justify-center rounded-full ring-1 ring-accent/40">
                        {icon}
                      </div>
                      <div className="pl-3">
                        <Typography
                          capitalize
                          className="font-semibold tracking-wide"
                          variant={"subheader1"}
                          color={"white"}
                        >
                          {company}
                        </Typography>
                        <Typography
                          capitalize
                          className="text-white/70"
                          variant={"small"}
                          color={"white"}
                        >
                          {position}
                        </Typography>
                      </div>
                    </div>
                    {duration && (
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full ring-1 ring-secondary/50">
                        {duration}
                      </span>
                    )}
                  </div>
                  {tags.length > 0 && (
                    <div className="w-full mt-3 flex flex-wrap gap-2">
                      {tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 text-[0.7rem] px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default SliderComponent;
