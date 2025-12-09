import React, { useState, useRef, useEffect } from "react";
import { Colors } from "@/colors/colors";
import { Box, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import customer from "../../../public/assets/customer.png";
import arrowNext from "../../../public/assets/arrow-next.svg";
import Slider from "react-slick";

interface IReviews {
  desc: string;
  name: string;
  designation: string;
  image?: string;
}

const ContactUs = () => {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviewsArr: IReviews[] = [
    {
      desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
      name: "Lonnie Wuckert",
      designation: "Frontend Developer",
    },
    {
      desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
      name: "Lonnie Wuckert",
      designation: "Frontend Developer",
    },
    {
      desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
      name: "Lonnie Wuckert",
      designation: "Frontend Developer",
    },
    {
      desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
      name: "Lonnie Wuckert",
      designation: "Frontend Developer",
    },
    {
      desc: "Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs",
      name: "Lonnie Wuckert",
      designation: "Frontend Developer",
    },
  ];

  const InputStyle = styled(Box)(() => ({
    "& .MuiInput-underline:before": {
      borderBottomColor: "#C7C7C7",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#C7C7C7",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#C7C7C7",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
      width: "100%",
      fontSize: "14px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiTextField-root": {
      width: "100%",
    },
  }));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (next: any) => {
      updateProgressBar(next);
      setCurrentSlide(next);
    },
    arrows: false,
    nextArrow: <div />,
    prevArrow: <div />,
  };

  const CustomArrow = (props: any) => {
    const { direction, sliderRef } = props;
    const handleClick = () => {
      if (direction === "next") {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    };

    return (
      <Image
        alt=""
        src={arrowNext}
        className={`h-auto w-10 ${direction == "prev" && "rotate-180"}`}
        onClick={handleClick}
      />
    );
  };

  const updateProgressBar = (next: any) => {
    const totalSlides = reviewsArr.length;
    const progressPercent = ((next + 1) / totalSlides) * 100;
    setProgress(progressPercent);
  };

  useEffect(() => {
    updateProgressBar(0);
  }, []);

  return (
    <section className="bg-black">
      <div className="container mx-auto flex flex-col justify-between p-15 text-white md:flex-row">
        <div className="w-full md:w-[45%] lg:w-[45%] xl:w-[45%]">
          <div className="poppins-medium font-30">
            Get in touch to discuss your software vision{" "}
            <span className="via=[#60F90D] bg-gradient-to-r from-[#25E8B1] to-[#60F90D] bg-clip-text text-transparent">
              with industry experts
            </span>
          </div>
          <Box component="form">
            <InputStyle>
              <div className="flex flex-wrap justify-between gap-y-10">
                <div className="w-full md:w-[46%] lg:w-[46%] xl:w-[46%]">
                  <TextField label="Name" variant="standard" />
                </div>
                <div className="w-full md:w-[46%] lg:w-[46%] xl:w-[46%]">
                  <TextField label="Email" variant="standard" />
                </div>
                <div className="w-full md:w-[46%] lg:w-[46%] xl:w-[46%]">
                  <TextField label="Number" variant="standard" />
                </div>
                <div className="w-full md:w-[46%] lg:w-[46%] xl:w-[46%]">
                  <TextField label="Country" variant="standard" />
                </div>
                <div className="w-[100%]">
                  <TextField label="Company" variant="standard" />
                </div>
                <div className="w-[100%]">
                  <TextField label="Message" variant="standard" />
                </div>
              </div>
            </InputStyle>
            <div className="mt-6">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: "gray",
                        width: 30,
                        height: 30,
                        borderRadius: "5px",
                      },
                      "&.Mui-checked .MuiSvgIcon-root": {
                        color: "green",
                      },
                    }}
                  />
                }
                label="I want to receive news and updates once in a while"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                  },
                }}
              />
            </div>
          </Box>
          <div className="poppins-medium font-12 mt-5 text-[#9A9A9A]">
            We will add your info to our CRM for contacting you regarding your
            request. For more info please consult our{" "}
            <span
              className="cursor-pointer text-white"
              style={{ textDecoration: "underline" }}
            >
              privacy policy
            </span>
          </div>
          <button
            className="poppins-semibold font-16 mt-8 w-[100%] justify-self-start rounded-xl border-1 border-solid border-green-500 py-4"
            style={{ backgroundColor: Colors.brand950 }}
          >
            Send Now
          </button>
        </div>
        <div className="to-black-500 w-full justify-between rounded-2xl bg-gradient-to-br from-[#177634] via-black p-10 md:w-[45%] lg:w-[45%] xl:w-[45%]">
          <div className="poppins-semibold font-22 mb-20">
            What Our Customers Say
          </div>
          <Slider ref={sliderRef} {...settings}>
            {reviewsArr.map((review,index) => (
              // eslint-disable-next-line react/jsx-key
              <div key={index}>
                <div className="poppins-regular font-18 leading-[200%]">
                  {review.desc}
                </div>
                <div className="mt-10 flex">
                  <Image
                    src={customer}
                    alt="image"
                    className="mr-3 h-11 w-11"
                  />
                  <div>
                    <div
                      className="poppins-medium font-16"
                      style={{ color: Colors.brand200 }}
                    >
                      {review.name}
                    </div>
                    <div className="poppins-medium font-12">
                      Frontend Developer
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="mt-15 flex items-center justify-between">
            <div className="h-2 w-[75%] rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2 rounded-full bg-green-600"
                style={{ width: `${progress}%` }}
              />
            </div>
            {currentSlide > 0 && (
              <CustomArrow direction="prev" sliderRef={sliderRef} />
            )}
            {currentSlide < reviewsArr.length - 1 && (
              <CustomArrow direction="next" sliderRef={sliderRef} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
