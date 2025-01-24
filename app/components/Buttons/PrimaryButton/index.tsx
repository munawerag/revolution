import Image from "next/image";
import Link from "next/link";

interface PrimaryButtonProps {
  title: any;
  link: any;
  isWhite?: boolean;
  target?: string;
  className?: string;
}

const PrimaryButton = ({
  title,
  link,
  isWhite,
  target,
  className,
}: PrimaryButtonProps) => {
  return (
    <Link
      className={`primary-anchor ${isWhite ? "white-col" : ""} ${
        className || ""
      }`}
      href={link}
      target={target ? target : "_self"}
    >
      <span>{title}</span>
      {/* <div className="primary-anchor-img">
        <Image
          src={"/assets/svgs/button-arrow.svg"}
          width={30}
          height={30}
          alt="img"
        />
      </div> */}
    </Link>
  );
};

export default PrimaryButton;
