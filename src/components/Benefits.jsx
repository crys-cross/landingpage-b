import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Benefits = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      {/* Gradients start */}
      <div className="absolute z-[-3] -left-1/2 top-50 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-50 w-[50%] h-[50%] rounded-full purple__gradient" />
      {/* Gradients end */}
      <h2 className={styles.heading2}>Benefits</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Hydrates faster and detoxifies in a natural way.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Benefits;
