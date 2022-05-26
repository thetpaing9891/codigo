import Image from "next/image";

const FilterLegend = (props: any) => {
  return (
    <div className={props.styles.legends}>
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
  );
};

export default FilterLegend;
