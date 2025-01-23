import React from "react";
import SVG from "react-inlinesvg";

type svgProps = {
  src: string;
  classes?: string;
  svgId?: string;
};

const SvgComp = ({ src, classes, svgId }: svgProps) => {
  return <SVG id={svgId} src={src} className={`${classes}`} />;
};
export default SvgComp;
