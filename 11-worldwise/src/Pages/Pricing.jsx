import NavBar from "../Components/NavBar/MainNav/NavBar";
import styles from "./styles/Product.module.css";

export default function Pricing() {
  return (
    <main className={styles.product}>
      <NavBar />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just 9$ month.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            distinctio nostrum culpa velit inventore? Accusamus optio sed in,
            quo laborum labore rerum dolore fuga. Architecto officiis laborum
            rem nulla nemo?
          </p>
        </div>
        <img
          src="img/img-2.jpg"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
