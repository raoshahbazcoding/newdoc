import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "How Much Can I Borrow?", answer: "When it comes to payments, borrow precisely what you need, whether you are paying for Invisalign, aesthetic treatments, or general dental treatments." },
  { question: "How Do I Apply?", answer: "Just scheduling a consultation is enough, and we will gladly guide you through the short application process. If you prefer, you can fill it out online, which will take a few minutes." },
  { question: "How Do I Make the Repayments?", answer: "This is done through direct debit, which suits the patient’s flexible monthly repayment plans that they can comfortably afford." },
  { question: "What Are the Finance Term Options?", answer: "Have a choice of 6 to 24 months of interest-free period that is convenient for you." },
];

export default function FinanceSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side (Text) */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-900">
          Looking for a beautiful white smile with 0% Finance? <br />
          Start Today!
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
        You can even opt for affordable payment plans with <strong>0% interest</strong> through the City Dental Care clinic in Edinburgh. All our orthodontic procedures, including Invisalign, are available for just <strong> £5 a week</strong>!
        </p>
        <a href="#" className="mt-6 inline-block bg-[#1d5c5c] text-white font-medium text-sm uppercase px-8 py-3 md:px-12 md:py-3 ">
          Transform Your Smile for £5/Week!
        </a>
      </div>

      {/* Right Side (FAQ Accordion) */}
      <div className="md:w-1/2">
        {faqs.map((faq, index) => (
          <div key={index} className=" rounded-lg mb-3">
            <button
              className="w-full flex justify-between items-center px-4 py-4 rounded-xl bg-[#E8F4F4] text-gray-900 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className=" font-medium">{faq.question}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 bg-white ">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
