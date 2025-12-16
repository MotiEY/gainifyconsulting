import React from 'react';
import { MailIcon, PhoneIcon, PaperAirplaneIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const email = 'motisdt@gmail.com';
  const phoneDisplay = '052-5523021';
  const phoneTel = '+972525523021';

  const subject = encodeURIComponent('Reality Demo request (48–72h)');
  const body = encodeURIComponent(
    `Hi Moti,\n\nI’d like to book the 48–72h Reality Demo.\n\nContext:\n- Company / team:\n- Primary workflow (Customer Service or Delivery/PM):\n- Tooling (e.g., Zendesk / Salesforce / Intercom / Jira / ADO / Monday):\n- Volume (tickets/week or project size):\n- Top KPI to improve (AHT / deflection / reopen rate / status effort / cycle time):\n\nData we can share for the demo:\n- Tickets/cases export (yes/no):\n- KB/SOPs/macros (yes/no):\n\nPreferred time for a 20-min scoping call:\n\nThanks,\n`
  );

  return (
    <section id="contact" className="bg-slate-50 text-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Book the 48–72h Reality Demo
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            No slides. We run a safe shadow workflow on your real data and deliver a Value Ledger (minutes → money) plus a practical scale plan.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm font-bold text-slate-900">What we need</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• 200–500 recent tickets/cases export</li>
                <li>• KB / SOPs / macros</li>
                <li>• 60 min with an ops lead</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm font-bold text-slate-900">What you get</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Shadow agent: triage/draft/route</li>
                <li>• Value Ledger: time & quality</li>
                <li>• Scale plan: assisted → scale</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm font-bold text-slate-900">Good fit if</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• High-volume support or delivery noise</li>
                <li>• You want measurable ROI, not hype</li>
                <li>• You prefer your existing stack</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${email}?subject=${subject}&body=${body}`}
              className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all duration-300"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
              Request the Reality Demo
            </a>

            <a
              href="#pulse"
              className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold ring-1 ring-slate-200 hover:bg-slate-50 transition-all duration-300"
            >
              Prefer diagnostics first? Take Pulse
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl ring-1 ring-slate-200 hover:bg-slate-100 transition-colors duration-200"
            >
              <MailIcon className="w-6 h-6 text-indigo-600" />
              <span className="font-semibold">{email}</span>
            </a>

            <a
              href={`tel:${phoneTel}`}
              className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl ring-1 ring-slate-200 hover:bg-slate-100 transition-colors duration-200"
            >
              <PhoneIcon className="w-6 h-6 text-indigo-600" />
              <span className="font-semibold">{phoneDisplay}</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Fixed scope, fast signal. Then we scale only what works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
