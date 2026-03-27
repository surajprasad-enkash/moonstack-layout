import Link from "next/link"
import Image from "next/image"
import Heading from "../Heading/Heading"
import clientImg from "@/assets/teamsimages/dheerajSir.webp"
import CalBookingButton from "../CalBookingButton/CalBookingButton"

interface ServiceItem {
  label: string
  href?: string
}

interface ServiceColumn {
  title: string
  items: ServiceItem[]
}
interface Headingpros {
  text: string
  className?: string
  color?: string
}

interface ServicesSectionProps {
  heading?: Headingpros[]
  columns?: ServiceColumn[]
  showLabel?: boolean
}

export default function ServicesSection({
  heading = [
    { text: "Our Digital " },
    {
      text: "Product Design & Development ",
      className: "highlight-text libreItalic",
    },
    { text: "Services", className: "" },
  ],
  showLabel = true,
  columns = [
    {
      title: "Website Development",
      items: [
        {
          label: "ReactJS",
          href: "/services/reactjs-development-company",
        },
        {
          label: "E-Com Development",
          href: "/services/ecommerce-website-development-company",
        },
        {
          label: "Web Designing",
          href: "/services/web-designing-company",
        },
        {
          label: "AngularJS",
          href: "/services/angularjs-development-company",
        },
        {
          label: "Vue.js",
          href: "/services/vuejs-development-company",
        },
        {
          label: "WordPress",
          href: "/services/wordpress-website-development-company",
        },
        {
          label: "CRM",
          href: "/services/crm-development-company",
        },

        {
          label: "Shopify",
          href: "/services/shopify-website-development-company",
        },
      ],
    },

    {
      title: "Application Development",
      items: [
        {
          label: "Mobile App Development",
          href: "/services/mobile-app-development-company",
        },
        {
          label: "Android App Development",
          href: "/services/android-app-development-company",
        },
        {
          label: "iOS App Development",
          href: "/services/ios-app-development-company",
        },
        {
          label: "React Native Development",
          href: "/services/react-native-app-development-company",
        },
        {
          label: "App Maintenance Service",
          href: "/services/mobile-app-maintenance-company",
        },
        {
          label: "PWA Development",
          href: "/services/pwa-development-company",
        },
      ],
    },
    {
      title: "Other Services",
      items: [
        {
          label: "Python",
          href: "/services/python-development-company",
        },

        {
          label: "Search Engine Optimization",

          href: "/services/search-engine-optimization-company",
        },
        {
          label: "UI/UX",

          href: "/services/ui-ux-designing-company",
        },
        {
          label: "Product",

          href: "/services/product-designing-company",
        },
        {
          label: "Cloud",

          href: "/services/cloud-company",
        },
        {
          label: "IT Support",

          href: "/services/it-support-company",
        },
        {
          label: "Full Stack",
          href: "/services/full-stack-website-development-company",
        },
        {
          label: "Laravel",
          href: "/services/laravel-website-development-company",
        },
        {
          label: "NodeJS",
          href: "/services/nodejs-development-company",
        },
      ],
    },
  ],
}: ServicesSectionProps) {
  return (
    <section className="relative px-[20px] text-white">
      <div className="relative z-10 container">
        {/* Label */}
        {showLabel && (
          <span className="mb-[20px] block text-center text-xs font-[500] tracking-widest text-white/60 uppercase md:mb-0 md:text-start">
            Services
          </span>
        )}
        {/* Heading */}
        <Heading
          headingTag="h2"
          className="mx-auto mb-[50px] max-w-[780px] text-center"
          content={heading}
        />

        {/* Services Cards */}
        <div className="rounded-[24px] bg-white p-6 text-black md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            {columns.map((column, index) => (
              <div
                key={index}
                className="rounded-[20px] bg-[#f5f5f7] px-[20px] pt-[32px]"
              >
                <h4 className="mb-[24px] pl-[18px] !text-[24px]">
                  {column.title}
                </h4>

                <ul className="homePageServicesList space-y-4">
                  {column.items.map((item, i) => (
                    <li key={`${column.title}-${i}`} className="m-0">
                      <Link
                        href={item.href ?? "#"}
                        className="group frist:border-t-0 flex h-[60px] items-center justify-between !border-t border-[#ddd] px-[18px] hover:rounded-[10px] hover:border-[#F5F5F7] hover:bg-[#0000000D] focus:outline-none"
                      >
                        <span className="text-[16px] font-medium">
                          {item.label}
                        </span>

                        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[20px] text-[20px] text-black/50 transition-transform duration-300 group-hover:-rotate-90 group-hover:bg-[#00000014]">
                          ↘
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-[20px] flex flex-col gap-6 rounded-[20px] bg-[#15151570] px-[26px] py-[20px] md:flex-row md:items-center md:justify-between">
          <div className="items-center gap-4 md:flex">
            <Image
              src={clientImg}
              alt={"client logo"}
              width={100}
              height={100}
              className="h-[70px] w-[70px] rounded-[50%] object-cover"
            />
            <p className="max-w-[570px] pt-1 text-white md:pt-0 md:!text-[24px]">
              Drive revenue growth and maximize ROI through strategic product
              design and development.
            </p>
          </div>

          <CalBookingButton />
        </div>
      </div>
    </section>
  )
}
