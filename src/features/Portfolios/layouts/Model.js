import { Typography } from "../../../common/shared";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Transition } from "@tailwindui/react";

const PortfolioModel = ({
  open,
  src,
  stacks,
  onClose,
  title,
  project_link,
  github_link,
  description,
}) => {
  return (
    <Transition
      show={open}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed z-50 inset-0 overflow-y-auto`}
        role="dialog"
        onClick={onClose}
        aria-modal="true"
      >
        <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4">
          <div
            className="hidden fixed inset-0 bg-primary/20 bg-opacity-75 transition-opacity md:block"
            aria-hidden="true"
          ></div>
          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-3xl h-98">

            <div className="w-full relative grid lg:grid-cols-2 bg-primary rounded-xl px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 h-full">
              <div className="p-5">
                <img
                  src={src}
                  className="object-cover h-44 w-full rounded-xl"
                  alt={title}
                />
              </div>


              <div className="p-5 overflow-x-auto">
                <div>
                  <Typography variant="small" className="text-green-400">
                    Title
                  </Typography>
                  <Typography variant="h6">{title}</Typography>
                </div>
                <div className="mt-5">
                  <Typography variant="small" className="text-green-400 mt-10">
                    Technology Stack
                  </Typography>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                    {stacks.map((item) => (
                      <li>
                        <Typography key={item} color="defaultBody">
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <Typography variant="small" className="text-green-400 mt-3">
                    website
                  </Typography>
                  <Typography
                    variant="a"
                    target="_blank"
                    href={project_link}
                    className="underline text-blue-400 block text-sm"
                  >
                    {project_link}
                    <ExternalLinkIcon className="h-3.5 w-3.5 inline ml-1 text-white" />
                  </Typography>
                </div>
                <div className="mt-5">
                  <Typography variant="small" className="text-green-400 mt-3">
                    Github link
                  </Typography>
                  <Typography
                    variant="a"
                    target="_blank"
                    href={`https://github.com/adexdsamson/${github_link}`}
                    className="underline text-blue-400 block text-sm"
                  >
                    https://github.com/adexdsamson/{github_link}
                    <ExternalLinkIcon className="h-3.5 w-3.5 inline ml-1 text-white" />
                  </Typography>
                </div>
                <div className="mt-5">
                  <Typography variant="small" className="text-green-400 ">
                    Key Accomplishments:
                  </Typography>
                  <Typography
                    color="defaultBody"
                    variant="body2"
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default PortfolioModel;
