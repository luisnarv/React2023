import NavBar from "../Components/NavBar/MainNav/NavBar";
import styles from "./styles/Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <NavBar />
      <section>
        <img
          src="img/img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            a nam consequatur adipisci perferendis? Iste veniam nulla
            exercitationem ab dignissimos ullam! Ratione molestias, beatae
            tempore aperiam maiores libero est eaque!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus placeat laborum quae repellendus magnam, et
            reprehenderit adipisci, earum accusantium officiis magni dolorum
            autem perspiciatis cumque quod libero quisquam aut quos!
          </p>
        </div>
      </section>
    </main>
  );
}
