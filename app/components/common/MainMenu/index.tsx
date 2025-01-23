import Image from "next/image";

const MainMenu = () => {
  return (
    <div className="main__menu">
      <div className="col-1">
        <div className="menu__logo">
          <Image
            src={"/assets/svgs/logo.svg"}
            width={277}
            height={88}
            alt="logo"
          />
        </div>
      </div>
      <div className="col-2">
        <div className="locations__wrapper">
          <p className="locations__title">Discover R.evolution In...</p>
          <ul className="locations">
            <li className="locations__item">Barcelona</li>
            <li className="locations__item">Berlin</li>
            <li className="locations__item">Dubai</li>
            <li className="locations__item">Riga</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
