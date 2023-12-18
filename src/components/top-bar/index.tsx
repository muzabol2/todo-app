import ColorModeSwitcher from "./color-mode-switcher";
import LanguageSwitcher from "./language-switcher";
import GithubLink from "./github-link";
import LoadButton from "./load-button";

const TopBar = () => (
  <div className="flex justify-between items-center p-4">
    <LoadButton />
    <div className="flex space-x-4">
      <LanguageSwitcher />
      <ColorModeSwitcher />
      <GithubLink />
    </div>
  </div>
);

export default TopBar;
