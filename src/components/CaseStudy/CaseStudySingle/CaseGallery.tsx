import Image from "next/image";
import bannerBg from "../pub@/assets/y/banner/bannerBg.svg";

export default function CaseGallery({ images }: any) {
  return (
    <section className="py-[80px]  px-[20px] relative">
      {bannerBg.src && (
        <Image
          src={bannerBg.src}
          alt="Background"
          width={100}
          height={100}
          className="absolute bottom-[0px] right-[0] left-[0] z-[1] h-[auto] w-[100%]"
        />
      )}
      <div className="container relative z-[2]">
        <div className="gap-[80px] md:flex items-center">
          {images.map((img: string, i: number) => (
            <div key={i} className="w-[calc(50%-40px)]">
              <Image
                src={img}
                alt="Product"
                width={400}
                height={300}
                className=" object-contain w-[100%] h-[auto] max-h-[500px] "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
