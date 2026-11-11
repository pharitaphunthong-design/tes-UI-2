"use client";
import { useState, useEffect } from "react";
import testimonialsData from "@/data/Testimonials.json";
export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  title: string;
}
interface TestimonialCardProps {
  item: TestimonialItem;
  position: "left" | "center" | "right";
}
function TestimonialCard({ item, position }: TestimonialCardProps) {
  const getPositionStyles = () => {
    switch (position) {
      case "left":
        return "left-0 -translate-x-[72%] lg:-translate-x-[68%] z-10 hidden md:block opacity-60 hover:opacity-100 transition-opacity";
      case "center":
        return "left-1/2 -translate-x-1/2 z-30 opacity-100";
      case "right":
        return "left-full -translate-x-[28%] lg:-translate-x-[32%] z-10 hidden md:block opacity-60 hover:opacity-100 transition-opacity";
    }
  };
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 w-[85%] sm:w-[520px] md:w-[600px] transition-all duration-500 ease-in-out ${getPositionStyles()}`}
    >
      <div className="border border-[#B9FF66] rounded-[45px] px-8 py-8 sm:px-12 sm:py-10 relative mb-6 bg-[#191A23]">
        <p className="text-white text-sm sm:text-base leading-relaxed font-normal">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="absolute -bottom-4 left-14 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-[#B9FF66]"></div>
        <div className="absolute -bottom-[13px] left-[58px] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-[#191A23]"></div>
      </div>

      <div className="pl-14">
        <h3 className="text-[#B9FF66] font-bold text-lg">
          {item.name}
        </h3>
        <p className="text-white text-sm mt-0.5 font-light">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setTestimonials(testimonialsData as TestimonialItem[]);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (testimonials.length === 0) return null;

  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const isAtFirst = currentIndex === 0;
  const isAtLast = currentIndex === testimonials.length - 1;
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 mb-12 sm:mb-16">
        <h2 className="bg-[#B9FF66] text-black text-3xl sm:text-4xl font-bold px-3 py-1 rounded-md">
          Testimonials
        </h2>
        <p className="text-base sm:text-lg text-black max-w-xl font-normal leading-relaxed">
          Hear from Our Satisfied Clients: Read Our Testimonials <br></br>to Learn Moreabout Our Digital Marketing Services
        </p>
      </div>
      <div className="bg-[#191A23] rounded-[45px] pt-14 pb-12 px-4 sm:px-8 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto h-[320px] sm:h-[300px] relative">
          <TestimonialCard item={testimonials[prevIndex]} position="left" />
          <TestimonialCard item={testimonials[currentIndex]} position="center" />
          <TestimonialCard item={testimonials[nextIndex]} position="right" />
        </div>
        <div className="flex items-center justify-between mt-8 sm:mt-6 px-4 sm:px-16 max-w-4xl mx-auto">
          <button
            onClick={handlePrev}
            disabled={isAtFirst}
            aria-label="Previous testimonial"
            className={`p-2 transition-all focus:outline-none ${
              isAtFirst 
                ? "opacity-40 cursor-not-allowed" 
                : "hover:scale-110 cursor-pointer"
            }`}
          >
            <div
              className={`w-6 h-6 transition-all ${
                isAtFirst ? "bg-gray-500" : "bg-white"
              }`}
              style={{
                maskImage: `url(/icons/icon09.svg)`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            />
          </button>
          <div className="flex items-center gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="w-4 h-4 transition-transform hover:scale-110 focus:outline-none flex items-center justify-center cursor-pointer"
              >
                <div
                  className={`w-4 h-4 transition-all ${
                    currentIndex === idx
                      ? "bg-[#B9FF66]"
                      : "bg-white opacity-60 hover:opacity-100"
                  }`}
                  style={{
                    maskImage: `url(/icons/icon10.svg)`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </button>
            ))}
          </div>

   
          <button
            onClick={handleNext}
            disabled={isAtLast}
            aria-label="Next testimonial"
            className={`p-2 transition-all focus:outline-none ${
              isAtLast 
                ? "opacity-40 cursor-not-allowed" 
                : "hover:scale-110 cursor-pointer"
            }`}
          >
            <div
              className={`w-6 h-6 transition-all ${
                isAtLast ? "bg-gray-500" : "bg-white"
              }`}
              style={{
                maskImage: `url(/icons/icon8.svg)`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            />
          </button>

        </div>
      </div>
    </section>
  );
}