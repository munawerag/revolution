import style from "./SearchModal.module.scss";
import generalData from "../../../data/general.json";
import Image from "next/image";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  // Get logo from general.json
  const logo = generalData.logo?.src || "";

  return (
    <div className={`${style["search-modal"]} ${isOpen ? style["active-search-modal"] : ""}`}>
      <div className={style["search-modal__close"]} onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
          fill="#475252"
          stroke="#475252"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
        </svg>
      </div>
      <div className={style["search-modal__wrapper"]}>
        <Link href="/" className={style["search-modal__logo"]}>
          <Image
            src={logo}
            alt="logo"
            height={158}
            width={50}
            priority
            className="img-hack-contain"
          />
        </Link>
        <form action="" className={style["search-modal__form"]}>
          <div className={style["search-modal__form-field"]}>
            <div className="c_form-field">
              <input type="text" className="c_form-field__control" placeholder="Search" />
              <button type="submit" className={`${style["btnn"]} primary-anchor`}>
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
