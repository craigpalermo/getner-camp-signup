import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Signup</a>
          </Link>
        </li>
        <li>
          <Link href="/forms">
            <a>Forms</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
