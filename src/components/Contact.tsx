import React from 'react';
import { MailIcon, PhoneIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const email = 'motisdt@gmail.com';
  const phoneDisplay = '052-5523021';
  const phoneTel = '+972525523021';

  const subject = encodeURIComponent('Gainify — intro');
  const quickBody = encodeURIComponent(
    `Hi Moti,

I’d like to talk about using AI in our workflows.

Company / team:
Primary workflow:
Current tooling:
What “better” looks like (one KPI):

Best time for a short call:
`
  );

  return (
    <section id="contact" className="bg-stone-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm ring-1 ring-stone-200">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Contact
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-600">
              A short conversation to confirm fit, pick one workflow, and define what “measurable” means.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${email}?subject=${subject}&body=${quickBody}`}
              className="group flex items-center justify-between rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200 hover:bg-white transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white ring-1 ring-stone-200 flex items-center justify-center text-amber-700">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Email</div>
                  <div className="text-sm text-slate-600">{email}</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                →
              </div>
            </a>

            <a
              href={`tel:${phoneTel}`}
              className="group flex items-center justify-between rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200 hover:bg-white transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white ring-1 ring-stone-200 flex items-center justify-center text-amber-700">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Call</div>
                  <div className="text-sm text-slate-600">{phoneDisplay}</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                →
              </div>
            </a>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              If you want the fastest signal, start with the{' '}
              <a href="#reality-demo" className="font-semibold text-slate-900 hover:underline">
                Reality Demo
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
