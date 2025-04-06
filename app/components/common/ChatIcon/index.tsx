import SvgComp from "../SvgComp";
import style from "./chatIcon.module.scss";



export default function ChatIcon() {
  return (
    <div className={style.chat}>
      <SvgComp src="/assets/svgs/chat.svg" />
    </div>
  );
}
