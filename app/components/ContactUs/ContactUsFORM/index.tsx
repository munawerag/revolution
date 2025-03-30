import FormButton from "../../Buttons/FormButton";
import SectionHeading from "../../common/SectionHeading";
import style from "./ContactUsForm.module.scss";

export default function ContactUsFORM() {
  return (
    <section className="section gray2-color-bg">
      <div className="container-s">
        <h3 className="h3 text-center">Express your interest</h3>
        <div className={`${style["wrapper-form"]} white-color-bg`}>
          <form action="">
            <div className="custom-row">
              <div className="col_12 col_md_6">
                <div className="c_form-field">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    id="name"
                    className="c_form-field__control"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col_12 col_md_6">
                <div className="c_form-field">
                  <label htmlFor="name">Last Name</label>
                  <input
                    type="text"
                    id="name"
                    className="c_form-field__control"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col_12 col_md_6">
                <div className="c_form-field">
                  <label htmlFor="name2">Email</label>
                  <input
                    type="email"
                    id="name2"
                    className="c_form-field__control"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col_12 col_md_6">
                <div className="c_form-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="c_form-field__control"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col_12 col_md_12">
                <div className="c_form-field">
                  <label className="label">Message</label>
                  <textarea
                    name=""
                    id=""
                    rows={11}
                    placeholder=""
                    className="c_form-field__control"
                  ></textarea>
                </div>
              </div>
            </div>
            <FormButton title={"Submit"} isWhite={true} />
          </form>
        </div>
      </div>
    </section>
  );
}
