import PrimaryButton from "./components/Buttons/PrimaryButton";

export default async function NotFound() {
    return (
      <div className="main__wrapper">
        <div className="notFound__wrapper">
          <h6>Error</h6>
          <h2>404</h2>
          <p>{"Page Not Found."}</p>
          <p>
            The page you were looking for does not exist. You may have mistyped
            the address or the page may have moved.
          </p>
          <PrimaryButton title={"Back to Home"} link={"/"}  />
        </div>
      </div>
    );
  }