import React from "react";
import Layout from "@/components/layouts";
import Meta from "@/components/layouts/meta";
import WorkItem from "@/components/portfolio/workItem";
import styles from "@/styles/pages/work.module.scss";

import data from "@/mocks/data.json";
import categories from "@/mocks/categories.json";
import FilterLegend from "@/components/work/filter/legend";
import { CategoriesProps, WorkProps } from "@/types";

const Work = () => {
  const [portfolio, setPortfolio] = React.useState<WorkProps[]>(data);

  const handleFilter = (slug: string) => {
    console.log("Slug", slug);
  };

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
                <a onClick={(e) => handleFilter("all")}>All</a>
              </li>
              {categories.map((item: CategoriesProps, index: number) => (
                <li className="" key={index}>
                  <a onClick={(e) => handleFilter(item.slug)}>{item.name}</a>
                </li>
              ))}
            </ul>
            <FilterLegend styles={styles} />
          </section>
        </div>
        <section className={styles.WorkList}>
          {portfolio.map((work: WorkProps) => (
            <WorkItem key={work.title} styles={styles} data={work} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Work;
