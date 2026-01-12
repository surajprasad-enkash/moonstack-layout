import Heading from "@/components/Heading/Heading";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseChallenges({ data }: any) {
  return (
    data.title?.length > 0 && (
    <section className="py-[80px] px-[20px] relative z-[2]" >
      <div className="container">
        <div className="gap-[40px] md:flex">
          <div className="w-[50%]">
            <div className="sticky top-[100px]">
              <Image
                src={data.image}
                alt="Challenges"
                width={500}
                height={400}
                className="max-h-[auto] max-w-[100%]"
              />
            </div>
          </div>

          <div className="w-[50%]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
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

              <p className="mb-6 !font-[300] text-[#fff]">{data.description}</p>
            </motion.div>

            <ul className="space-y-4">
              {data.list.map((item: any, i: number) => (
                <li key={i} className="pl-[30px]">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Heading
                      headingTag="h5"
                      className="relative mt-7 text-[#fff] mb-2 after:absolute after:top-[10px] after:left-[-30px] after:h-[10px] after:w-[10px] after:rounded-[50px] after:bg-[#00ea52] after:bg-center"
                      content={[
                        {
                          text: item.title,
                          color: "",
                        },
                      ]}
                    />
                    <p className="!font-[300] text-[#fff]">{item.description}</p>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
  );
}
