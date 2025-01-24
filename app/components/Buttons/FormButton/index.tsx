interface FormButtonProps {
  title: any;
  isWhite?: boolean;
}

const FormButton = ({ title, isWhite }: FormButtonProps) => {
  return (
    <button
      className={`primary-button ${isWhite ? "white-col" : ""}`}
      type="submit"
    >
      <span>{title}</span>
    </button>
  );
};

export default FormButton;
