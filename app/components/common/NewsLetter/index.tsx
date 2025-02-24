import FormButton from "../../Buttons/FormButton";
import style from "./index.module.scss";

const NewsLetter = () => {
  return (
    <section className={`section ${style.newsLetter}`}>
      <div className="container-s">
        <div className={`custom-row ${style.row}`}>
          <div className="col_12 col_lg_6 col_xl_3">
            <h3>Subscribe to our newsletter</h3>
          </div>
          <div className="col_12 col_lg_6 col_xl_4">
            <p className="fw-400">
              Register to receive updates about exclusive experiences, events,
              new destinations and more.
            </p>
          </div>
          <div className="col_12 col_xl_5">
            <div className={style.subscribe}>
              <input
                defaultValue=""
                type="email"
                placeholder="Enter your email"
                className={`input`}
              />
              <FormButton title="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
