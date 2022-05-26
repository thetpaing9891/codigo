import Layout from "@/components/layouts";
import Meta from "@/components/layouts/meta";
import WorkItem from "@/components/portfolio/workItem";
import styles from "@/styles/pages/work.module.scss";
import Image from "next/image";
import data from "@/mocks/data.json";
import Link from "next/link";
import { useRouter } from "next/router";

const Work = () => {
  const router = useRouter();
  const portfolio: any = data;

  return (
    <Layout>
      <Meta title="Work • Codigo" />
      <div className={styles.workWrapper}>
        <div className="container">
          <article className={styles.h1}>
            <h1>Here’s 5% of</h1>
            <h1>our published work.</h1>
            <h1 className={styles.textRed}>See 100% of our power.</h1>
          </article>
          <section className={styles.WorkCategories}>
            <ul className={styles.categories}>
              <li className={styles.active}>
                <Link href="/work?tag=all">All</Link>
              </li>
              <li className="">
                <Link href="/work?tag=food-and-beverage">
                  Food &amp; Beverage
                </Link>
              </li>
              <li className="">
                <Link href="/work?tag=media">Media</Link>
              </li>
              <li className="">
                <Link href="/work?tag=transport-and-logistics">
                  Transport &amp; Logistics
                </Link>
              </li>
              <li className="">
                <Link href="/work?tag=banking-finance">
                  Banking &amp; Finance
                </Link>
              </li>
              <li className="">
                <Link href="/work?tag=lifestyle">Lifestyle</Link>
              </li>
              <li className="">
                <Link href="/work?tag=co-incubation">Co-incubation</Link>
              </li>
              <li className="">
                <Link href="/work?tag=healthcare">Healthcare</Link>
              </li>
              <li className="">
                <Link href="/work?tag=retail-and-entertainment">
                  Retail &amp; Entertainment
                </Link>
              </li>
              <li className="">
                <Link href="/work?tag=telco">Telco</Link>
              </li>
              <li className="">
                <Link href="/work?tag=others">Others</Link>
              </li>
              <li className="">
                <Link href="/work?tag=start-ups">Start-ups</Link>
              </li>
            </ul>
            <div className={styles.legends}>
              <h4>LEGEND</h4>
              <ul>
                <li>
                  <Image
                    src="/images/legend-phone.svg"
                    width={13}
                    height={13}
                    alt="Mobile"
                  />
                  <legend>App</legend>
                </li>
                <li>
                  <Image
                    src="/images/legend-web.svg"
                    width={13}
                    height={13}
                    alt="Web"
                  />
                  <legend>Web</legend>
                </li>
                <li>
                  <Image
                    src="/images/legend-cms.svg"
                    width={13}
                    height={13}
                    alt="Mobile"
                  />
                  <legend>CMS</legend>
                </li>
                <li>
                  <Image
                    src="/images/legend-uiux.svg"
                    width={13}
                    height={13}
                    alt="Web"
                  />
                  <legend>UI/UX</legend>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <section className={styles.WorkList}>
          {portfolio.map((work: any) => (
            <WorkItem key={work.title} styles={styles} data={work} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Work;
