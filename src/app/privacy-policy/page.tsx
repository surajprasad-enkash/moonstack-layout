import Breadcrumb from "@/components/Breadcrumb"
import Layout from "@/components/Layout"
import Heading from "@/components/Heading/Heading"
import { privacyPolicyData } from "@/constants/privacy-policy"
import OgImageIcon from "@/assets/ogImage.svg"
import { Metadata } from "next"
import { buildMetadata } from "@/helper/generateMetadata "

export const generateMetadata = (): Metadata => {
  return buildMetadata({
    title: "Privacy Policy",
    description:
      "Moonstack's Privacy Policy outlines our commitment to protecting your personal information. Learn about data collection, usage, and your rights under GDPR and CCPA.",
    canonical: "https://www.moonstack.com/privacy-policy",
    ogImage: OgImageIcon.src,
  })
}

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="container mx-auto px-6 py-[150px] text-black">
          <div className="max-w-[723px]">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ]}
              textColor="text-black"
            />

            <Heading
              headingTag="h1"
              className="font-extrabold md:!text-[92px]"
              content={[
                { text: " Privacy ", color: "text-black" },
                { text: " Policy", color: "text-black libreItalic font-[400]" },
              ]}
            />

            <div className="flex">
              <Heading
                headingTag="h6"
                className="font-bold"
                content={[
                  {
                    text: "Updated Date : 08/03/2026",
                    color: "text-black",
                  },
                ]}
              />
            </div>

            {privacyPolicyData.map((section, i) => (
              <section key={i} className="mb-16">
                <h2 className="mb-3 text-2xl font-semibold">{section.title}</h2>

                {Array.isArray(section.content) ? (
                  <>
                    {/* 🔹 Optional first line as subheading */}
                    {section.firstLineAsSubheading && section.content[0] && (
                      <p
                        className="mb-4 font-medium text-gray-800"
                        dangerouslySetInnerHTML={{
                          __html: section.content[0],
                        }}
                      />
                    )}

                    {/* 🔹 List items */}
                    <ul
                      className={
                        section.noBullets
                          ? "ml-0 list-none space-y-2 text-gray-700"
                          : "ml-6 list-disc space-y-1 text-gray-700"
                      }
                    >
                      {(section.firstLineAsSubheading
                        ? section.content.slice(1)
                        : section.content
                      ).map((item, index) => (
                        <li
                          key={index}
                          className="leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>

                    {/* 🔹 Optional paragraph AFTER list */}
                    {section.afterListContent && (
                      <p
                        className="mt-4 leading-relaxed text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: section.afterListContent,
                        }}
                      />
                    )}
                  </>
                ) : (
                  /* 🔹 STRING CONTENT rendered with HTML support */
                  <p
                    className="leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
