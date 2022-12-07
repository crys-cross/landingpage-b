import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Products = () => (
  <section className={layout.section}>
    {/*gradient start*/}
    <div className="absolute z-[2] w-[50%] h-[50%] -right-[40%] rounded-full blue__gradient" />
    {/*gradient start*/}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Our Products</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        FDA approved for therapeutic use. It is not just a water ionizer but
        rather a medical device. It can be prescribed by doctors and used in
        hospitals.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Products;
