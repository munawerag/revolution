import FormButton from "../../Buttons/FormButton";
import style from "./index.module.scss";

interface NewsLetterProps {
  data?: {
    enabled?: boolean;
    title?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
  };
}

const NewsLetter = ({ data }: NewsLetterProps) => {
  // If data is not provided or enabled is explicitly set to false, don't render
  if (!data || data.enabled === false) {
    return null;
  }

  return (
    <section className={`section ${style.newsLetter}`}>
      <div className="container-s">
        <div className={`${style.row} custom-row no-gutters`}>
          <div className="col_12 col_lg_6 col_xl_3">
            <h3>{data.title || ""}</h3>
          </div>
          <div className="col_12 col_lg_6 col_xl_4">
            <p className="fw-400">
              {data.description || ""}
            </p>
          </div>
          <div className="col_12 col_xl_5">
            <div className={style.subscribe}>
              <input
                defaultValue=""
                type="email"
                placeholder={data.placeholder || ""}
                className={`input`}
              />
              <FormButton title={data.buttonText || ""} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
