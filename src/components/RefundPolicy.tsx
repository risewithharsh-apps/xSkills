import React, { useEffect } from "react";
import { ChevronLeft, Mail, Calendar, CheckCircle, ShieldAlert, RotateCcw, Clock, ShieldCheck, DollarSign } from "lucide-react";

interface RefundPolicyProps {
  onBack: () => void;
}

export const RefundPolicy: React.FC<RefundPolicyProps> = ({ onBack }) => {
  // Automatically scroll to top when page is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-[100px] pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 md:p-12 animate-fade-in">
        {/* Back Link / Top controls */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-orange transition-colors mb-8 cursor-pointer select-none"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Academy Home
        </button>

        {/* Header Block */}
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight font-display">
            Refund Policy - <span className="text-brand-orange">xSkills by Cubelelo</span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-semibold mt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Effective Date: June 2026
            </span>
            <span>•</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Secure & Fair Enrollment Guarantee
            </span>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-slate max-w-none text-slate-600 text-sm md:text-base leading-relaxed space-y-6">
          <p className="font-medium text-slate-700">
            At xSkills, we are fully committed to providing our customers with the best online speedcubing learning experience possible. We understand that circumstances may arise where you may need to request a refund for a course package you've purchased. Our refund policy is designed to be fair, completely transparent, and straightforward.
          </p>

          {/* Highlights summary grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-orange/10 rounded-xl text-brand-orange shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Refund Amount</span>
                <span className="text-sm font-bold text-slate-800 mt-1">75% Course Fee Refund</span>
              </div>
            </div>
            <div className="flex items-center gap-3 border-y sm:border-y-0 sm:border-x border-slate-200/60 py-3 sm:py-0 sm:px-4">
              <div className="p-2.5 bg-brand-purple/10 rounded-xl text-brand-purple shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Refund Window</span>
                <span className="text-sm font-bold text-slate-800 mt-1">First 48 Hours Only</span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:pl-4">
              <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-600 shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Content Limit</span>
                <span className="text-sm font-bold text-slate-800 mt-1">Max 3 Modules Viewed</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <div>
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">1</span>
              Refund Percentage & Timeframe
            </h2>
            <p>
              If you decide to request a refund for an on-demand course bundle or individual class enrollment you have purchased on xSkills, you are eligible to receive a refund of <strong>75% of the total course fee paid</strong>. To be eligible for this refund, you must submit your refund request within <strong>48 hours</strong> of the transaction.
            </p>
          </div>

          {/* Section 2 */}
          <div className="pt-2">
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">2</span>
              Eligibility Criteria
            </h2>
            <p className="mb-3">
              To quality for a 75% refund under our standard academy policy, you must meet the following criteria:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The official refund application must be submitted within <strong>48 hours</strong> from the exact timestamp of purchase.
              </li>
              <li>
                You must not have accessed, viewed, or completed more than <strong>3 Modules</strong> of the learning curriculum.
              </li>
              <li>
                You have not downloaded any printable cheat sheets or offline algorithms resources prior to requesting a cancellation.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="pt-2">
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">3</span>
              How to Request a Refund
            </h2>
            <p>
              To initiate the refund process, please send an email with your invoice details and registered mobile number to our student coordination desk at:{" "}
              <a href="mailto:learn@xskills.in" className="text-brand-purple hover:underline font-bold">
                learn@xskills.in
              </a>{" "}
              or contact us directly on our official support helpline: <span className="font-bold text-slate-800">8080573573</span>. Please specify the reasons for cancellation to help us continuously improve our training quality.
            </p>
          </div>

          {/* Section 4 */}
          <div className="pt-2">
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">4</span>
              Refund Processing Time
            </h2>
            <p>
              Once your refund request is received and meets the eligibility criteria, our accounts team will review and approve the return. The approved refund (75% of the course fee) will be credited back to the original source payment method (UPI, Debit/Credit Card, or Net Banking) used during purchase. Please note that it may take <strong>5 to 7 business days</strong> for the credit to reflect in your account, depending on your financial institution's processing cycles.
            </p>
          </div>

          {/* Section 5 */}
          <div className="pt-4 border-t border-slate-100">
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2 text-brand-purple">
              <Mail className="w-5 h-5 text-brand-purple" />
              Administrative Support Details
            </h2>
            <p>
              If you have any questions or concerns about our refund policy, or need prompt assistance with processing, please feel free to reach out to our customer support team:
            </p>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs text-slate-600 leading-relaxed mt-2">
              <strong>Address:</strong> Cubelelo, 27, SBI Colony, Sunder Nagar, Raipur, Chhattisgarh 492013, India
              <br />
              <strong>Official Email:</strong> learn@xskills.in
              <br />
              <strong>Contact Support:</strong> +91 8080 573 573 (Available Monday–Saturday, 9:30 AM to 6:00 PM IST)
            </p>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="border-t border-slate-100 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-semibold">
            &copy; {new Date().getFullYear()} Cubelelo. Both brands stand for Cubing Merit.
          </p>
          <button
            onClick={onBack}
            className="w-full sm:w-auto bg-brand-purple text-white hover:bg-brand-purple/95 font-black text-sm tracking-wide px-6 py-3 rounded-full cursor-pointer leading-none transition-all shadow-md shadow-brand-purple/10"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
