import css from "./Notification.module.css";

export default function Notification({ text = "" }) {
  return <p className={css.text}>{text}</p>;
}
