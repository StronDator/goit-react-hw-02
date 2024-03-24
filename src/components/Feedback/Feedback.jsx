import css from "./Feedback.module.css";

export default function Feedback({
  good = 0,
  neutral = 0,
  bad = 0,
  totalReviews = 0,
  positivePercentage = 0,
}) {
  return (
    <div>
      <p className={css.text}>{`Good: ${good}`}</p>
      <p className={css.text}>{`Neutral: ${neutral}`}</p>
      <p className={css.text}>{`Bad: ${bad}`}</p>
      {totalReviews && <p className={css.text}>{`Total: ${totalReviews}`}</p>}
      {totalReviews && (
        <p className={css.text}>{`Positive: ${positivePercentage}%`}</p>
      )}
    </div>
  );
}
