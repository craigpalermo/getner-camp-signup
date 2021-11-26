import React from "react";
import Link from "next/link";
import classNames from "classnames";

export const Navbar = ({ activeRoute }: { activeRoute: string }) => {
  const links = [
    { href: "/", text: "Signup" },
    { href: "/forms", text: "Forms" },
  ];

  return (
    <>
      <div className="w-full inline-flex justify-center space-x-5 my-4">
        {links.map(({ href, text }) => {
          const linkCSS = classNames("hover:bg-blue-200 p-2 rounded", {
            underline: activeRoute === href,
          });
          return (
            <Link href={href}>
              <a className={linkCSS}>{text}</a>
            </Link>
          );
        })}
      </div>
    </>
  );
};
