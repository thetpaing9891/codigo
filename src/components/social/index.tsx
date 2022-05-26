import Image from "next/image";

const Social = () => {
  return (
    <>
      <a href="https://www.facebook.com" target="__blank">
        <Image
          src="/images/social/facebook.svg"
          width={26}
          height={26}
          alt="Facebook"
        />
      </a>
      <a href="https://www.twitter.com" target="__blank">
        <Image
          src="/images/social/twitter.svg"
          width={26}
          height={26}
          alt="Twitter"
        />
      </a>
      <a href="https://www.instagram.com" target="__blank">
        <Image
          src="/images/social/instagram.svg"
          width={26}
          height={26}
          alt="Instagram"
        />
      </a>
      <a href="https://www.linkedin.com" target="__blank">
        <Image
          src="/images/social/linkedin.svg"
          width={26}
          height={26}
          alt="Linkedin"
        />
      </a>
    </>
  );
};

export default Social;
