import "./Benefits.css";

export default function Benefits() {
  return (
    <>
      <section className="benefits">
        <h2 className="title">
          ¿Por qué <span>LogMaster</span>?
        </h2>
        <article className="old-system benefit">
          <div className="title">
            <h2>Adios al viejo sistema</h2>
            <img
              src="../../public/paper.png"
              alt="a paper with a cross on it"
            />
          </div>
          <div className="text">
            <p>
              permite centralizar la gestión de equipos y recursos en un único
              sistema digital, eliminando la necesidad de registros físicos y
              facilitando el acceso a la información desde cualquier lugar.
            </p>
          </div>
        </article>

        <article className="easy-to-use benefit">
          <div className="title">
            <h2>Fácil de usar</h2>
            <img src="../../public/tick.png" alt="black tick" />
          </div>
          <div className="text">
            <p>
              La interfaz intuitiva permite una adopción rápida por parte de
              todos los usuarios, sin necesidad de formación extensiva,
              facilitando el acceso a la información necesaria con pocos clics.
            </p>
          </div>
        </article>

        <article className="security benefit">
          <div className="title">
            <h2>Siempre Seguro</h2>
            <img src="../../public/shield.png" alt="black shield" />
          </div>
          <div className="text">
            <p>
              Asegura la protección de la información con medidas de seguridad
              avanzadas, garantizando que los datos estén resguardados y
              accesibles solo para personal autorizado.
            </p>
          </div>
        </article>

        <article className="customer-service benefit">
          <div className="title">
            <h2>Atención al cliente</h2>
            <img src="../../public/client.png" alt="customer service" />
          </div>
          <div className="text">
            <p>
              Nuestro equipo está disponible para resolver dudas y problemas
              rápidamente, ya sea por correo, chat o teléfono. Nos enfocamos en
              brindar soluciones efectivas y asegurar que tu experiencia con
              nuestro sistema sea lo más sencilla y satisfactoria posible.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
