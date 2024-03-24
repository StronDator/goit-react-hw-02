import css from "./Description.module.css";

export default function Description() {
  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>
        Будь ласка, залиште ваш відгук про наш сервіс, обравши один з варіантів
        нижче
      </p>
    </>
  );
}
