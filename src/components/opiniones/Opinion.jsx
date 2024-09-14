export default function Opinion({ opinion }) {
  return (
    <article className="opinion">
      <h3>
        Opinión por <i>{opinion.slug}</i>
      </h3>
      <p>{opinion.content}</p>
    </article>
  );
}
