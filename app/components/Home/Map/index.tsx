import Image from "next/image";
import PrimaryButton from "../../Buttons/PrimaryButton";

import style from "./index.module.scss"
import Heading from "../../common/Heading";

const Map = () => {
  return (
    <>
      <div className={`${style.mapTitleWrapper}`} id="location">
        <Heading
          title="Location"
          title2="Waterfront Living In Dubai"
          desc="The location of Eywa is her advantage. Eywa is located in Business
            Bay, but away from noisy streets, in a very quiet area, on the banks
            of the Dubai Water Canal in Business Bay, ideally located, just 6-10
            minutes' drive from Downtown Dubai, The Dubai Mall and the Opera
            District and 15-20 minutes from Dubai International Airport." />
      </div>
      <div className={`${style.map__img}`}>
        <Image
          src={"/assets/images/home/seventh-sec-img.jpg"}
          width={1920}
          height={1085}
          alt="img"
        />
      </div>
      <div className={`${style.map__btn}`}>
        <PrimaryButton
          title={"Get Direction on Google Maps"}
          link={"https://maps.app.goo.gl/e6euHA98YKhhnB1o7"}
          target="_blank"
        />
      </div>
    </>
  );
};

export default Map;
