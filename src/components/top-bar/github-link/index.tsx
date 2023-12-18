import { GithubIcon } from "icons";

import { paths } from "consts";

const GithubLink = () => (
  <a
    href={paths.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-blue-500 dark:text-blue-400 underline cursor-pointer px-2"
  >
    <GithubIcon />
  </a>
);

export default GithubLink;
