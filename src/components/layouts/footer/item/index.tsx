import Image from "next/image";

const FooterItem = () => {
  return (
    <div className="footer-wrapper">
      <section className="footer-item">
        <div className="footer-inner-item">
          <h5>Build</h5>
          <div className="r-arrow">
            <Image
              src="/images/r-arrow.svg"
              width={15}
              height={9}
              alt="Instagram"
            />
          </div>
        </div>
        <p>Help you build something</p>
      </section>
      <section className="footer-item">
        <div className="footer-inner-item">
          <h5>Co-incubate</h5>
          <div className="r-arrow">
            <Image
              src="/images/r-arrow.svg"
              width={15}
              height={9}
              alt="Instagram"
            />
          </div>
        </div>
        <p>Co-incubate an idea together</p>
      </section>
      <section className="footer-item">
        <div className="footer-inner-item">
          <h5>Customise</h5>
          <div className="r-arrow">
            <Image
              src="/images/r-arrow.svg"
              width={15}
              height={9}
              alt="Instagram"
            />
          </div>
        </div>
        <p>Customise a solution for your business</p>
      </section>
      <section className="footer-item">
        <div className="footer-inner-item">
          <h5>Organise</h5>
          <div className="r-arrow">
            <Image
              src="/images/r-arrow.svg"
              width={15}
              height={9}
              alt="Instagram"
            />
          </div>
        </div>
        <p>Organise learning sessions with us</p>
      </section>
    </div>
  );
};

export default FooterItem;
