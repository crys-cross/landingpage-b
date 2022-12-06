import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className="flex flex-col">
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className="text-lg">🤔</p>
          <p className={`${styles.paragraph} ml-2`}>Did you know?</p>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          People around the world buy a total of 1 million plastic bottles per
          minute. That’s almost 1.5 billion plastic bottles per day! The
          unfortunate reality is that our planet won’t be able to keep up.
          Between the energy used to create them, the carbon emissions from
          shipping them and the issues that surround disposing of them, Imagine
          how much money your machine will save you! The machine you thought of
          as expensive will totally help YOU, and the environment. You’re
          earning while staying healthy at the same time! Think about it.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100] relative z-[5]"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 purple__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 buttom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </div>
    {/* DIVIDER-HERE */}
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100] relative z-[5]"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 purple__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 buttom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}
      >
        <div className="flex flex-row justify-between item-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            <span className="text-gradient">About</span> Us
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We help interested individuals set up their own successful online
          business by providing all the necessary tools, trainings, and access
          to the products. <br /> <br /> Imagine a fluid, flexible and
          incredibly engaging 24/7 global business that allows you to spread the
          message of True Health to anyone, at anytime, and in any location. Our
          system does the work for you behind the scenes so you’re free to do
          whatever you want to do while earning! <br /> <br /> No experience
          required. No inventory. No door-to-door sales talk needed. All you
          need is an active distributor ID. <br /> <br /> One company, one
          vision, all aligned to provide YOU with ONE road to success!
        </p>
      </div>
    </div>
    <div className={`${styles.flexCenter} pb-20`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
