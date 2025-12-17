import React from 'react';
import { MailIcon, PhoneIcon, PaperAirplaneIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const email = 'motisdt@gmail.com';
  const phoneDisplay = '052-5523021';
  const phoneTel = '+972525523021';

  const subject = encodeURIComponent('Reality Demo (48–72h) — request');
  const body = encodeURIComponent(
    `Hi Moti,

I’d like to discuss the Reality Demo (48–72h).

Company / team:
Primary workflow (Customer Service / Delivery / Project Ops):
Current tools (Zendesk / Intercom / Salesforce / Jira / Monday / ADO / etc.):
Approx. volume (tickets/week or projects):
Top KPI to improve (AHT / deflection / cycle time / status effort / etc.):

Best time for a short call:
`
  );

  return (
    <section id="contact" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-10 ring-1 ring-stone-200 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Let’s talk
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              If you want to see measurable AI impact in a real workflow, reach out.
              We’ll keep it tight, practical, and grounded in your data.
            </p>
          </div>

          {/* One clean CTA (final CTA is ok) */}
          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${email}?subject=${subject}&body=${body}`}
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-bold
                         bg-slate-900 text-white hover:bg-slate-800 transition-all"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
              Email to request the Reality Demo
            </a>
          </div>

          {/* Quiet guidance (no extra buttons) */}
          <div className="mt-4 text-center text-sm text-slate-500">
            Prefer to start with a diagnostic?{' '}
            <a href="#pulse" className="font-semibold text-slate-900 hover:underline">
              Explore Gainify Pulse
            </a>
            .
          </div>

          {/* Contact methods (clean, quiet) */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200
                         hover:bg-stone-100 transition-colors"
            >
              <MailIcon className="w-6 h-6 text-amber-600" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900">Email</div>
                <div className="text-sm text-slate-600 truncate">{email}</div>
              </div>
            </a>

            <a
              href={`tel:${phoneTel}`}
              className="flex items-center gap-3 rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200
                         hover:bg-stone-100 transition-colors"
            >
              <PhoneIcon className="w-6 h-6 text-amber-600" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900">Phone</div>
                <div className="text-sm text-slate-600">{phoneDisplay}</div>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            No platform lock-in. We work inside your existing stack.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
