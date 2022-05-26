import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  return (
    <ul>
      <li className={router.pathname == "/work" ? "active" : ""}>
        <Link href="/work">Work</Link>
      </li>
      <li className={router.pathname == "/solutions" ? "active" : ""}>
        <Link href="/">Solutions</Link>
      </li>
      <li className={router.pathname == "/services" ? "active" : ""}>
        <a href="">Services</a>
      </li>
      <li className={router.pathname == "/about" ? "active" : ""}>
        <a href="">About us</a>
      </li>
      <li className={router.pathname == "/blog" ? "active" : ""}>
        <a href="">Blog</a>
      </li>
      <li>
        <button className="btn btn-primary">Request a quote</button>
      </li>
      <li>
        <a href="">Let&apos;s chat</a>
      </li>
    </ul>
  );
};

export default Menu;
