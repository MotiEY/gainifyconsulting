import React from 'react';
import { PaperAirplaneIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const email = 'motisdt@gmail.com';

  const pulseSubject = encodeURIComponent('Gainify Pulse request (72h)');
  const pulseBody = encodeURIComponent(
    `Hi Moti,

I'd like to take Gainify Pulse (72h).

Context:
- Company / team:
- Primary area (Support / Delivery / Other):
- Tooling (Zendesk / Salesforce / Intercom / Jira / ADO / Monday / Other):
- Main KPI to move:
- Constraints (data access, security, change readiness):

Preferred time for a 20-min scoping call:

Thanks,
`
  );

  const demoSubject = encodeURIComponent('Reality Demo request (48-72h)');
  const demoBody = encodeURIComponent(
    `Hi Moti,

I'd like to request the 48-72h Reality Demo.

If Pulse is not done yet, that's ok. We can still start with one workflow.

Context:
- Company / team:
- Selected workflow to validate:
- Tooling:
- Volume:
- KPI to improve:

Data we can share for the demo:
- 200-500 recent items export (yes/no):
- KB / SOPs / macros (yes/no):

Preferred time for a 20-min scoping call:

Thanks,
`
  );

  return (
    <section id="contact" className="bg-stone-50 text-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm ring-1 ring-stone-200">
          {/* Primary: Pulse */}
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-50 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-stone-200">
            Gainify Pulse (72 hours)
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-slate-900">
            Clarity before action.
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            A fast alignment sprint that surfaces the few AI bets worth pursuing now, the constraints that block scale,
            and clear ownership with KPI targets.
          </p>

          <div className="mt-6 max-w-3xl mx-auto rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200 text-left">
            <div className="text-sm font-bold text-slate-900">You leave with</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• A one-page decision brief. What to do, what to pause, and what to prove first.</li>
              <li>• A baseline and target measurement plan.</li>
              <li>• A 30-day execution plan with owners and milestones.</li>
            </ul>
          </div>

          <div className="mt-8 grid gap-3 sm:flex sm:justify-center sm:gap-4">
            <a
              href={`mailto:${email}?subject=${pulseSubject}&body=${pulseBody}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
              Take Gainify Pulse
            </a>

            <a
              href="#pulse"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
            >
              See Pulse dimensions
            </a>
          </div>

          {/* Divider */}
          <div className="mt-10 mb-10 h-px w-full bg-stone-200" />

          {/* Secondary: Demo */}
          <div className="text-left max-w-3xl mx-auto">
            <div className="text-sm font-bold text-slate-900">Reality Demo</div>
            <p className="mt-2 text-slate-600">
              Proof on one selected workflow. Shadow mode first. No system changes. No lock-in.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
                <div className="text-sm font-bold text-slate-900">What you get</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• A working example on real items</li>
                  <li>• Baseline and target measurement plan</li>
                  <li>• Clear go or no-go decision</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
                <div className="text-sm font-bold text-slate-900">What we need</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• 200-500 recent items export</li>
                  <li>• KB / SOPs / macros if available</li>
                  <li>• 20-60 minutes with an ops owner</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:flex sm:justify-start sm:gap-4">
              <a
                href={`mailto:${email}?subject=${demoSubject}&body=${demoBody}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold ring-1 ring-stone-200 hover:bg-stone-50 transition-all"
              >
                <PaperAirplaneIcon className="w-6 h-6" />
                Request Reality Demo
              </a>
            </div>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Fixed scope. Fast signal. Scale only what proves value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
