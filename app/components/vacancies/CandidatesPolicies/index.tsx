import { useState } from "react";
import style from "./CandidatesPolicies.module.scss";
import Designation from "../Designation";

interface Vacancy {
  id: number;
  title?: string;
  location?: string;
  categories?: string[];
  description: string;
}

interface CandidatesPoliciesProps {
  vacancy?: Vacancy;
  onBackClick?: () => void;
}

export default function CandidatesPolicies({ vacancy, onBackClick }: CandidatesPoliciesProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [showDesignation, setShowDesignation] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleNextClick = () => {
    if (isChecked) {
      setShowDesignation(true);
    }
  };

  if (showDesignation && vacancy) {
    return <Designation vacancy={vacancy} onBackClick={() => setShowDesignation(false)} />;
  }

  return (
    <div id="candidates-policies">
      <div className="container">
        <div className={`${style["title-wrapper"]}`}>
          <h2 className="h2 text-center">Enter your email</h2>
          <div className={`${style["c_form-field"]} c_form-field`}>
            <input type="text" placeholder="Email" className="c_form-field__control" required />
          </div>
        </div>
        <div className="text-editor">
          {vacancy?.description && (
            <div dangerouslySetInnerHTML={{ __html: vacancy.description }} />
          )}
          <div className={`${style["accept-policy-wrapper"]}`}>
            <label className="custom-checkbox">
              I accept
              <input 
                type="checkbox" 
                name="example" 
                required 
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
            </label>
            <div>
              <button 
                className={`primary-button`} 
                type="button"
                onClick={handleNextClick}
                disabled={!isChecked}
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className={`${style["back-btn-wrapper"]}`}>
          <button className="primary-anchor white-col" onClick={onBackClick}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
