import React from "react";
import Image from "next/image";
import Social from "@/components/social";
import Menu from "../menu";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const menuOpen = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen ? true : false);
  };

  const homeClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <header>
      <Image
        src="/logo.svg"
        width={150}
        height={30}
        className="logo"
        alt="Codigo"
        onClick={homeClick}
      />
      <nav className={`menu-wrapper ${isOpen && "open"}`}>
        <Menu />
        <section className="header-social social-wrap">
          <Social />
        </section>
      </nav>
      <button
        onClick={menuOpen}
        aria-label="Close menu bar"
        className={`menuBtn ${isOpen && "open"}`}
      >
        <span className="circle"></span>
        <ul className="menuBtnList">
          <li className="menuListItem"></li>
          <li className="menuListItem"></li>
          <li className="menuListItem"></li>
          <li className="menuListItem"></li>
        </ul>
      </button>
    </header>
  );
};
export default Header;
