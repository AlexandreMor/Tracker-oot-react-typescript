import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

export const useNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      return setMenuOpen(true);
    }
    return setMenuOpen(false);
  };

  const classLink: string = "mt-4 ms-2 lg:mt-0 text-teal-200 hover:text-white";

  const link = (path: string, name: string): ReactNode => {
    return (
      <Link to={path} className={classLink}>
        {name}
      </Link>
    );
  };

  const tab = [
    {
      element: link("./", "Main"),
    },
    {
      element: link("./settings", "Settings"),
    },
    {
      element: (
        <a
          href="https://github.com/AlexandreMor/Tracker-oot-react-typescript/blob/main/UserGuide.md"
          className={classLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          Help
        </a>
      ),
    },
  ];
  const githubLink = (
    <a
      href="https://github.com/AlexandreMor/"
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
    >
      Github
    </a>
  );
  return { menuOpen, toggleMenu, tab, githubLink };
};
