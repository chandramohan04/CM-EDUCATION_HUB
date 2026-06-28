import type { SVGProps } from "react";
import { Instagram } from "lucide-react";

const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="white"/>
    <path d="M50 8C27.91 8 10 25.91 10 48c0 6.54 1.65 12.78 4.52 18.2L10 92l27.38-7.14C44.34 88.52 47 89 50 89c22.09 0 40-17.91 40-40S72.09 8 50 8zm0 73.5c-5.52 0-10.9-1.4-15.55-4.04l-1.12-.67-11.55 3.02 3.07-11.19-.7-1.1C16.56 60.16 15 54.38 15 48c0-19.3 15.7-35 35-35s35 15.7 35 35-15.7 35-35 35z" fill="white"/>
    <path d="M75.5 45.5c-.5-2.5-2.5-4-5-4.5-2-1-6.5-.5-8 3.5-1 2.5-.5 5.5 1 7 2 2 4 3 4 5s-1.5 3.5-3 3-2.5-.5-3.5-1-1-2-1-3 .5-2 1-3c1.5-2.5 3-4 5-5 1.5-.5 2-.5 2-2 0-1-.5-2-1.5-2s-1.5 0-2.5.5-1 1-1 2" fill="white"/>
  </svg>
);

const FloatingContact = () => {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/919718825874"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 text-white shadow-xl transition-transform duration-200 hover:-translate-y-1"
        aria-label="Contact on WhatsApp"
      >
        <WhatsappIcon className="w-5 h-5" />
        <span className="font-semibold text-sm">WhatsApp</span>
      </a>
      <a
        href="https://instagram.com/cmeducationhub"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-full bg-slate-900 px-4 py-3 text-white shadow-xl transition-transform duration-200 hover:-translate-y-1"
        aria-label="Visit Instagram"
      >
        <Instagram className="w-5 h-5" />
        <span className="font-semibold text-sm">Instagram</span>
      </a>
    </div>
  );
};

export default FloatingContact;
