import "./ProductSection.css";

export default function ProductSection() {
  return (
    <section className="products">
      <article className="schools product">
        <h3>
          <span>LogMaster</span> for schools
        </h3>
        <img src="../public/teacher.svg" alt="teacher" />

        <div className="text">
          <ol>
            <li>&#8226; Lorem Ipsum dolor sit amet.</li>
            <li>&#8226; Lorem Ipsum dolor sit amet.</li>
            <li>&#8226; Lorem Ipsum dolor sit amet.</li>
          </ol>

          <button>Saber más</button>
        </div>
      </article>

      <article className="business product">
        <h3>
          <span>LogMaster</span> for business
        </h3>
        <img src="../public/businessman.svg" alt="business man" />

        <div className="text">
          <ol>
            <li>&#8226; Lorem Ipsum dolor sit amet.</li>
            <li>&#8226; Lorem Ipsum dolor sit amet.</li>
            <li>&#8226; Lorem Ipsum dolor sit amet.</li>
          </ol>

          <button>Saber más</button>
        </div>
      </article>
    </section>
  );
}
