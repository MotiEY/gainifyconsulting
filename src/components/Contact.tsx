// /src/components/Contact.tsx
import React from 'react';
import { MailIcon, PhoneIcon, PaperAirplaneIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const email = 'motisdt@gmail.com';
  const phoneDisplay = '052-5523021';
  const phoneTel = '+972525523021';

  const subject = encodeURIComponent('Reality Demo request (48–72h)');
  const body = encodeURIComponent(
    `Hi Moti,\n\nI’d like to request the 48–72h Reality Demo.\n\nContext:\n- Company / team:\n- Primary workflow:\n- Tooling:\n- Volume:\n- KPI to improve:\n\nData we can share:\n- Tickets/cases export (yes/no):\n- KB/SOPs/macros (yes/no):\n\nPreferred time for a 20-min scoping call:\n\nThanks,\n`
  );

  return (
    <section className="bg-stone-50 text-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm ring-1 ring-stone-200">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s talk
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            If you want a fast, low-risk signal — request the Reality Demo. If you prefer to start with diagnostics, take the Pulse.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`mailto:${email}?subject=${subject}&body=${body}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
              Request Reality Demo
            </a>

            <a
              href="#pulse"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
            >
              Take Gainify Pulse
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl ring-1 ring-stone-200 hover:bg-stone-100 transition-colors"
            >
              <MailIcon className="w-6 h-6 text-amber-600" />
              <span className="font-semibold">{email}</span>
            </a>

            <a
              href={`tel:${phoneTel}`}
              className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl ring-1 ring-stone-200 hover:bg-stone-100 transition-colors"
            >
              <PhoneIcon className="w-6 h-6 text-amber-600" />
              <span className="font-semibold">{phoneDisplay}</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            One workflow. Clear baseline. Measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
