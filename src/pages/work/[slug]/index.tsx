import React from "react";
import Layout from "@/components/layouts";
import Meta from "@/components/layouts/meta";
import Portfolio from "@/components/portfolio";
import styles from "@/styles/pages/work.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import data from "@/mocks/data.json";
import { useRouter } from "next/router";
import { ImagesProps } from "@/types";

const Detail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const result = data.find((item: any) => item.slug === slug);

  const images: any = [];
  if (result?.images) {
    result.images.map((item: ImagesProps) => {
      images.push({
        url: item.url,
      });
    });
  }

  return (
    <Layout>
      {result && (
        <>
          <Meta title={`${result.title} • Codigo`} />
          <div className={styles.workWrapper}>
            <div className={styles.container}>
              <div className={styles.detailWrapper}>
                <div className={styles.slideWrapper}>
                  <h1 className="heading">{result.title}</h1>
                  <div className={styles.slider}>
                    <SimpleImageSlider
                      width={560}
                      height={560}
                      images={images}
                      showBullets={true}
                      showNavs={false}
                      autoPlay={true}
                      loop={true}
                      slideDuration={0.5}
                      bgColor="transparent"
                      style={{ overflow: "visible" }}
                    />
                  </div>
                </div>
                <Portfolio styles={styles} data={result} />
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Detail;
