import style from "./EnquireNowPopup.module.scss";

interface EnquireNowPopupProps {
  className?: string;
  onClose: () => void;
}

export default function EnquireNowPopup({ className = "", onClose }: EnquireNowPopupProps) {
  return (
    <div className={`${style["main-wrapper"]} ${style[className]}`}>
      <div className={`${style["container"]} container`}>
        <div className="title-wrapper">
          <h2 className="h2">Express your interest</h2>
          <div className={`${style["tab-wrapper"]}`}>
            <ul>
              <li>Enquire now</li>
              <li>Schedule a visit</li>
            </ul>
          </div>
        </div>
        <div className="form-wrapper">
          <form action="">
            <div className="custom-row">
              <div className="col_12 col_md_6">
                <div className="c_form-field">
                  <label>First Name</label>
                  <input type="text" placeholder="" className="c_form-field__control" />
                </div>
              </div>
              <div className="col_12 col_md_6">
                <div className="c_form-field">
                  <label>First Name</label>
                  <input type="text" placeholder="" className="c_form-field__control" />
                </div>
              </div>
              <div className="col_12 col_md_6">
                <div className="c_form-field">
                  <label>First Name</label>
                  <input type="text" placeholder="" className="c_form-field__control" />
                </div>
              </div>
              <div className="col_12 col_md_6">
                <div className="c_form-field">
                  <label>First Name</label>
                  <input type="text" placeholder="" className="c_form-field__control" />
                </div>
              </div>
            </div>
            <button className={`primary-button white-col`} type="submit">
              <span className={`wrapper__text`}>
                {/* {loading ? <FormLoading /> : <span>{"Submit"}</span>} */}
              </span>
            </button>
          </form>
          {/* form 2 */}
          <form action="">
            <h2>form2</h2>
          </form>
        </div>
      </div>
      <div className={`${style["back-btn-wrapper"]}`}>
        <button className="primary-anchor white-col" onClick={onClose}>
          Back
        </button>
      </div>
    </div>
  );
}
