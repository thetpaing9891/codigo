import Image from "next/image";

const Download = ({ styles, data }: any) => {
  return (
    <section className={styles.marketPlace}>
      {data.downloads.map((download: any, index: number) => {
        let imgSrc = "";
        let marketBody;
        if (download.type === "Android") {
          imgSrc = "/images/google.png";
          marketBody = (
            <>
              <p>Available on</p>
              <h4>Google Play</h4>
            </>
          );
        } else if (download.type === "iOS") {
          imgSrc = "/images/apple.png";
          marketBody = (
            <>
              <p>Available on</p>
              <h4>Apple Store</h4>
            </>
          );
        } else {
          imgSrc = "/images/web.png";
          marketBody = (
            <>
              <p>Live On</p>
              <h4>website.com</h4>
            </>
          );
        }

        return (
          <a
            href={download.url}
            className={styles.marketPlaceItems}
            key={index}
          >
            <div className={styles.marketPlaceContent}>
              <Image src={imgSrc} width={21} height={25} alt="" />
              <div className={styles.marketPlaceBody}>{marketBody}</div>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Download;
