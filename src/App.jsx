import "./app.css";
import Benefits from "./components/benefits/Benefits";
import Opiniones from "./components/opiniones/Opiniones";
import ProductSection from "./components/products/ProductSection";
//import { reviews } from "../reviews.json";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="">¿Qué ofrecemos?</a>
            </li>
            <li>
              <a href="">Opiniones</a>
            </li>

            <li>
              <a href="">¿Por qué nosotros?</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="introduction">
          <h1>
            Organiza tu futuro con <span>LogMaster</span>. Tu empresa de
            confianza.
          </h1>
          <p>
            Nuestro innovador sistema está diseñado para transformar la gestión
            de tus recursos tecnológicos, brindando una solución digital
            avanzada que supera las limitaciones del conocido sistema en formato
            papel.
          </p>
        </section>
        <ProductSection />
        <Benefits />
        <Opiniones />
      </main>

      <footer>
        <h2>LogMaster</h2>
      </footer>
    </>
  );
}
