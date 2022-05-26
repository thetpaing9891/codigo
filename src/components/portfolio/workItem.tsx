import Image from "next/image";
import Legend from "./legend";
import Link from "next/link";
import { useRouter } from "next/router";

const myLoader = ({ src, width, quality }: any) => {
  return `${src}`;
};

const WorkItem = ({ styles, data }: any) => {
  const router = useRouter();

  const wrapClass = `${styles.WorkListItem} ${
    data.isWidely ? "colSpan2" : "false"
  }`;

  const workLinkClick = (src: string) => {
    router.push(src);
  };

  return (
    <div
      onClick={() => workLinkClick(`/work/${data.slug}`)}
      className={wrapClass}
      style={{ cursor: "pointer" }}
    >
      <Image
        loader={myLoader}
        src={data.featured_image}
        width={data.isWidely ? "100%" : 320}
        height={416}
        alt="work"
        layout="fill"
      />
      <div className={styles.WorkListContent}>
        <p className={styles.tags}>{data.tags}</p>
        <h2>{data.title}</h2>
        {data.legends && <Legend styles={styles} data={data} />}
      </div>
    </div>
  );
};

export default WorkItem;
