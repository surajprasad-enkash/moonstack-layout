import Image from "next/image";
import icon from "@/assets/case-study/single-case-study/artificial-intelligence.svg";
import Heading from "@/components/Heading/Heading";
import { motion } from "framer-motion";

export default function CaseSolution({ data }: any) {
  return (
    data.title?.length > 0 && (
      <section className="py-[80px] px-[20px] relative z-[2]">
        <div className="container">
          <div className="gap-[40px] md:flex">
            <div className="w-[50%]">
              <div className="sticky top-[100px]">
                <Image
                  src={icon}
                  alt={data.title}
                  width={100}
                  height={100}
                  className="mb-10 w-[100px]"
                />
                <Heading
                  headingTag="h2"
                  className="mb-2 text-[#fff]"
                  content={[
                    {
                      text: data.title,
                      color: "",
                    },
                  ]}
                />
                <p className="mb-10 !font-[300] text-[#fff]">
                  {data.description}
                </p>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="">
                {data.list.map((item: any, i: number) => (
                  <div key={i} className="group">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ amount: 0.2 }}
                    >
                      <div className="relative pb-[20px] pl-[20px] before:absolute before:top-[10px] before:left-[-.5px] before:h-[100%] before:w-[1px] before:bg-[#fff]/50 before:bg-center group-last:before:h-[calc(100%-40px)] after:absolute after:top-[10px] after:left-[-5px] after:h-[10px] after:w-[10px] after:rounded-[50px] after:bg-[#fff] after:bg-center">
                        <Heading
                          headingTag="h5"
                          className="relative mb-2 text-[#fff]"
                          content={[
                            {
                              text: item.title,
                              color: "",
                            },
                          ]}
                        />
                        <p className="mb-5 font-[300] text-[#fff]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
