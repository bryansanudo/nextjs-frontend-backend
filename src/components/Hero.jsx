import styles from "@/style";

import Image from "next/image";

const Hero = () => {
  return (
    <section className={`flex flex-row pb-20 `}>
      <div className={`flex-2  flex-col  `}>
        <div className="flex flex-col justify-start w-full">
          <h2 className="font-extrabold text-white text-[70px] leading-[75px]">
            COLLECT <br /> MOTHER MARY <br /> ART NFT
          </h2>
        </div>

        <p className={`mt-6 text-white font-medium text-[18px]`}>
          Find the best upcoming and live NFT drops. Moonly provides <br />
          analytics to help you make good NFT investments.
        </p>

        <button className=" mt-8 bg-[#FCC22E] text-black font-bold px-8 py-5 rounded-xl hover:scale-105 duration-500">
          VER EN OPENSEA
        </button>
      </div>

      <div className={`flex-1 flex  justify-end  `}>
        <Image
          className="object-contain rounded-xl "
          src="/test.jpg"
          width={500}
          height={200}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
