import { useEffect, useState } from "react";
import Opinion from "./Opinion";
import "./Opiniones.css";

export default function Opiniones() {
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
      .then((res) => res.json())
      .then((data) => {
        setComments(data.slice(0, 5));
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <section className="opiniones">
      <h2>Opiniones de nuestros clientes</h2>
      {loaded ? (
        comments.map((comment) => {
          return <Opinion opinion={comment} key={comment.id} />;
        })
      ) : (
        <h4>Cargando...</h4>
      )}
    </section>
  );
}
