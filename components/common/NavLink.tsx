import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  as: string;
  children: React.ReactNode;
}

const NavLink = ({ href, as, children }: NavLinkProps) => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <Link href={href}>
      <a
        className={`${
          encodeURIComponent(asPath) === encodeURIComponent(as) &&
          `activeSidebar`
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
