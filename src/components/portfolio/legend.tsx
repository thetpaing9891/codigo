import Image from "next/image";

const Legend = (props: any) => {
  return (
    <ul className={props.styles.WorkListLegends}>
      {props.data.legends.map((legend: any, index: number) => {
        let imgSrc = "";
        let altText = "";
        if (legend.type === "App") {
          imgSrc = "/images/legend-phone.svg";
          altText = "Mobile";
        } else if (legend.type === "CMS") {
          imgSrc = "/images/legend-cms.svg";
          altText = "CMS";
        } else if (legend.type == "UI/UX") {
          imgSrc = "/images/legend-uiux.svg";
          altText = "UI/UX";
        } else {
          imgSrc = "/images/legend-web.svg";
          altText = "Web";
        }

        return (
          <li key={index}>
            <Image src={imgSrc} width={13} height={13} alt={altText} />
          </li>
        );
      })}
    </ul>
  );
};

export default Legend;
