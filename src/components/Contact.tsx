import React from 'react';
import { MailIcon, PhoneIcon, PaperAirplaneIcon } from './icons/Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-50 text-slate-800 py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Let's start a conversation and build an operational AI plan tailored to your business.
          </h2>
          <div className="flex justify-center gap-6 flex-wrap mb-12">
              <a href="mailto:motisdt@gmail.com" className="flex items-center gap-3 bg-slate-100 p-4 rounded-lg hover:bg-slate-200 transition-colors duration-300">
                  <MailIcon className="w-6 h-6 text-indigo-600" />
                  <span className="font-semibold">motisdt@gmail.com</span>
              </a>
              <a href="tel:052-5523021" className="flex items-center gap-3 bg-slate-100 p-4 rounded-lg hover:bg-slate-200 transition-colors duration-300">
                  <PhoneIcon className="w-6 h-6 text-indigo-600" />
                  <span className="font-semibold">052-5523021</span>
              </a>
          </div>
          <a
            href="mailto:motisdt@gmail.com"
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-indigo-700"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
