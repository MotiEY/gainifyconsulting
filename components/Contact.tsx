// /components/Contact.tsx
import React from 'react';
import { MailIcon, PhoneIcon, PaperAirplaneIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const email = 'motisdt@gmail.com';
  const phoneDisplay = '052-5523021';
  const phoneTel = '+972525523021';

  const subject = encodeURIComponent('Reality Demo request (48–72h)');
  const body = encodeURIComponent(
    `Hi Moti,

I’d like to request the 48–72h Reality Demo.

Context:
- Company / team:
- Primary workflow:
- Current tools (Zendesk/Salesforce/Jira/etc):
- Volume (tickets/week or projects/month):
- KPI to improve:

Data available:
- Tickets/cases export: yes/no
- KB/SOPs/macros: yes/no

Preferred time for a 20-min scoping call:

Thanks,
`
  );

  return (
    <section id="contact" className="bg-stone-50 text-slate-900 py-16 sm:py-20">
      {/* anchor for header CTA */}
      <div id="reality-demo" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm ring-1 ring-stone-200">
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-50 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            48–72h Reality Demo
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold">Fast signal. Real data. Clear ROI.</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            We run a safe shadow workflow on your data and deliver a Value Ledger (minutes → money) plus a practical next-step plan.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`mailto:${email}?subject=${subject}&body=${body}`}
              className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
              Request Reality Demo
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
            >
              <MailIcon className="w-6 h-6 text-amber-600" />
              Email
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

          <p className="mt-6 text-sm text-slate-500">Fixed scope, fast signal. Then we scale only what works.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
