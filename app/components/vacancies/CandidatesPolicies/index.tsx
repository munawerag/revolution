import style from "./CandidatesPolicies.module.scss";

export default function CandidatesPolicies() {
  return (
    <section className="relative">
      <div className="container">
        <div className={`${style["title-wrapper"]}`}>
          <h2 className="h2 text-center">Enter your email</h2>
          <div className={`${style["c_form-field"]} c_form-field`}>
            <input type="text" placeholder="Email" className="c_form-field__control" />
          </div>
        </div>
        <div className="text-editor">
          <h3>R.Evolution privacy notice for job candidates</h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat cursus ullamcorper magna
            eget ac at fames. Lectus justo mauris litora mus accumsan mollis. Auctor luctus nibh
            vulputate; at gravida purus. Sed lobortis commodo convallis amet ipsum. Magna conubia
            curae conubia ante mauris fermentum. Quam hac habitasse auctor mi fusce.
          </p>
          <p>
            Dis scelerisque hac vehicula velit vulputate at curabitur. Semper quisque faucibus dolor
            dolor nascetur pretium eu sem. Parturient dapibus ridiculus venenatis tempus neque
            netus. Fermentum ornare praesent duis turpis tristique malesuada nullam mauris mattis.
            Porttitor eu quisque quam tempus mi maximus vitae semper. Finibus in integer dapibus
            laoreet, dignissim blandit potenti orci. Montes sollicitudin nec conubia ac ultrices non
            auctor. Varius sagittis suscipit justo imperdiet bibendum ac montes nibh. Dignissim
            scelerisque litora, felis vivamus augue parturient accumsan rutrum. Ultricies dictum ut
            turpis; consequat rutrum commodo torquent sollicitudin.
          </p>
          <h5>Lorem ipsum odor amet, consectetuer elit?</h5>
          <p>
            Volutpat cursus ullamcorper magna eget ac at fames. Lectus justo mauris litora mus
            accumsan mollis. Auctor luctus nibh vulputate; at gravida purus. Sed lobortis commodo
            convallis amet ipsum. Magna conubia curae conubia ante mauris fermentum. Quam hac
            habitasse auctor mi fusce. Dis scelerisque hac vehicula velit vulputate at curabitur.
            Semper quisque faucibus dolor dolor nascetur pretium eu sem. Parturient dapibus
            ridiculus venenatis tempus neque netus. Fermentum ornare praesent duis turpis tristique
            malesuada nullam mauris mattis. Porttitor eu quisque quam tempus mi maximus vitae
            semper. Finibus in integer dapibus laoreet, dignissim blandit potenti orci. Montes
            sollicitudin nec conubia ac ultrices non auctor. Varius sagittis suscipit justo
            imperdiet bibendum ac montes nibh. Dignissim scelerisque litora, felis vivamus augue
            parturient accumsan rutrum. Ultricies dictum ut turpis; consequat rutrum commodo
            torquent sollicitudin.
          </p>
          <h5>Lorem ipsum odor amet, consectetuer elit?</h5>
          <p>
            Volutpat cursus ullamcorper magna eget ac at fames. Lectus justo mauris litora mus
            accumsan mollis. Auctor luctus nibh vulputate; at gravida purus. Sed lobortis commodo
            convallis amet ipsum. Magna conubia curae conubia ante mauris fermentum. Quam torquent
            sollicitudin.
          </p>
          <h5>Lorem ipsum odor amet, consectetuer elit?</h5>
          <p>
            Volutpat cursus ullamcorper magna eget ac at fames. Lectus justo mauris litora mus
            accumsan mollis. Auctor luctus nibh vulputate; at gravida purus. Sed lobortis commodo
            convallis amet ipsum. Magna conubia curae conubia ante mauris fermentum. Quam torquent
            sollicitudin.
          </p>
          <div className={`${style["accept-policy-wrapper"]}`}>
            <label className="custom-checkbox">
              I accept
              <input type="checkbox" name="example" />
              <span className="checkmark"></span>
            </label>
            <div>
              <button className={`primary-button`} type="submit">
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className={`${style["back-btn-wrapper"]}`}>
          <button className="primary-anchor white-col">Back</button>
        </div>
      </div>
    </section>
  );
}
