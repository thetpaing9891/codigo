import Social from "@/components/social";
import Image from "next/image";
import FooterItem from "./item";

const Footer = () => {
  return (
    <footer>
      <h2 className="footer-title">Let&apos;s have a chat</h2>
      <FooterItem />
      <section className="social-wrap">
        <Social />
      </section>
      <section className="footer-address">
        <p className="mb-1">
          Copyright © Codigo - Mobile App Developer Singapore
        </p>
        <p>
          +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
        </p>
      </section>
    </footer>
  );
};

export default Footer;
