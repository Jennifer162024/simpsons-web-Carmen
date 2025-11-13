import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex justify-center items-center">
        <Image
          className=""
          src="/Background.jpg"
          alt="BackgroundSimpsons"
          fill={ true }
          quality={ 100 }
          preload={ true }
        />
      </div>


      <div className="w-full h-[20vh] my-8 flex justify-center items-center">
        <h1>Nueva sección</h1>
      </div>

    </div>
  );
}
