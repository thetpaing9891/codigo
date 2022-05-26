import { WorkProps } from "@/types";
import Download from "./download";

type Props = {
  styles: any;
  data: WorkProps;
};

const Portfolio = ({ styles, data }: Props) => {
  return (
    <article>
      <h1 className="heading">{data.title}</h1>
      {data.downloads.length > 0 && <Download styles={styles} data={data} />}
      <p className={styles.Summary}>{data.description}</p>
      <section className={styles.Features}>
        <h5>Key Features</h5>
        <div>
          <ul>
            {data.features.map((feature: any, index: number) => (
              <li key={index}>{feature.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Portfolio;
