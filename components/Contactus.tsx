"use client";
import { useState } from "react";
import Image from "next/image";

export interface ContactFormData {
  contactType: "hi" | "quote";
  name: string;
  email: string;
  message: string;
}

interface RadioOptionProps {
  id: "hi" | "quote";
  label: string;
  selectedType: "hi" | "quote";
  onChange: (type: "hi" | "quote") => void;
}

function RadioOption({ id, label, selectedType, onChange }: RadioOptionProps) {
  const isSelected = selectedType === id;
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-3 cursor-pointer select-none"
    >
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          id={id}
          name="contactType"
          checked={isSelected}
          onChange={() => onChange(id)}
          className="sr-only"
        />
        <div className="w-7 h-7 rounded-full border border-black flex items-center justify-center bg-white">
          {isSelected && (
            <div className="w-3.5 h-3.5 rounded-full bg-[#B9FF66]" />
          )}
        </div>
      </div>
      <span className="text-base text-black font-normal">{label}</span>
    </label>
  );
}

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
}

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextArea = false,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm sm:text-base font-medium text-black">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full px-7 py-4 rounded-[14px] border border-black bg-white text-black placeholder:text-[#898989] focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all resize-none text-sm sm:text-base"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full px-7 py-4 rounded-[14px] border border-black bg-white text-black placeholder:text-[#898989] focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition-all text-sm sm:text-base"
        />
      )}
    </div>
  );
}

export default function Contactus() {
  const [formData, setFormData] = useState<ContactFormData>({
    contactType: "hi",
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeChange = (type: "hi" | "quote") => {
    setFormData((prev) => ({
      ...prev,
      contactType: type,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      contactType: "hi",
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    /* เพิ่ม id="contact" และ scroll-mt-20 ตรงนี้เรียบร้อยแล้วครับ */
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 mb-10 sm:mb-14">
        <h2 className="bg-[#B9FF66] text-black text-3xl sm:text-4xl font-bold px-3 py-1 rounded-md">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-black max-w-xl font-normal leading-relaxed">
          Connect with Us: Let's Discuss Your <br></br>Digital Marketing Needs
        </p>
      </div>
      <div className="bg-[#F3F3F3] rounded-[45px] p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-[55%] flex flex-col gap-6 z-10"
        >
          <div className="flex items-center gap-9 mb-2">
            <RadioOption
              id="hi"
              label="Say Hi"
              selectedType={formData.contactType}
              onChange={handleTypeChange}
            />
            <RadioOption
              id="quote"
              label="Get a Quote"
              selectedType={formData.contactType}
              onChange={handleTypeChange}
            />
          </div>
          <InputField
            label="Name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <InputField
            label="Email*"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputField
            label="Message*"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            isTextArea
          /> 
            <button
            type="submit"
            className="w-full bg-[#191A23] hover:bg-black text-white font-medium text-base sm:text-lg py-5 px-8 rounded-[14px] transition-all cursor-pointer mt-2"
          >
            Send Message
          </button>
        </form>
        <div className="hidden lg:block absolute -right-64 top-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none">
          <Image
            src="/icons/17.svg"
            alt="Contact Illustration"
            fill
          />
        </div>
      </div>
    </section>
  );
}