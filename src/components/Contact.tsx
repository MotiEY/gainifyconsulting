import React from 'react';
import { MailIcon, PaperAirplaneIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const email = 'motisdt@gmail.com';

  const subject = encodeURIComponent('Reality Demo request (48-72h)');
  const body = encodeURIComponent(
    `Hi Moti,

I'd like to request the 48-72h Reality Demo.

Context:
- Company / team:
- Primary workflow:
- Tooling:
- Volume:
- KPI to improve:

Preferred time for a 20-min scoping call:

Thanks,
`
  );

  return (
    <section id="contact" className="bg-stone-50 text-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm ring-1 ring-stone-200">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Book the 48-72h Reality Demo
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            A fast, low-risk proof on your real workflow. Shadow mode first. Clear outputs. Weekly measurement plan.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
            <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
              <div className="text-sm font-bold text-slate-900">What we need</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• 200-500 recent items (tickets/cases/tasks)</li>
                <li>• KB / SOPs / macros</li>
                <li>• 60 min with an ops owner</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
              <div className="text-sm font-bold text-slate-900">What you get</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Shadow workflow draft/triage</li>
                <li>• Value Ledger: baseline to target</li>
                <li>• Scale plan: assisted, then expand</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
              <div className="text-sm font-bold text-slate-900">Good fit if</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• High-volume operational work</li>
                <li>• You want measurable ROI</li>
                <li>• You keep your existing stack</li>
              </ul>
            </div>
          </div>

          {/* CTAs - mobile first: full width */}
          <div className="mt-10 grid gap-3 sm:flex sm:justify-center sm:gap-4">
            <a
              href={`mailto:${email}?subject=${subject}&body=${body}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
              Request Reality Demo
            </a>

            <a
              href="#pulse"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
            >
              Take Gainify Pulse
            </a>
          </div>

          {/* Email button only (no visible address) */}
          <div className="mt-6 flex justify-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 bg-stone-50 px-5 py-3 rounded-full ring-1 ring-stone-200 hover:bg-stone-100 transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5 text-slate-700" />
              <span className="font-semibold text-slate-800">Email</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Fixed scope. Fast signal. Scale only what works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
