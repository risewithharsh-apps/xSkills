import React, { useEffect } from "react";
import { ChevronLeft, Shield, Lock, Eye, FileText, Mail, HelpCircle } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  // Automatically scroll to top when page is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-[100px] pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 md:p-12">
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
            Privacy Policy - <span className="text-brand-orange">xSkills by Cubelelo</span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-semibold mt-2">
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <Lock className="w-3 h-3" /> GDPR & India IT Act Compliant
            </span>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-slate max-w-none text-slate-600 text-sm md:text-base leading-relaxed space-y-6">
          <p className="font-medium text-slate-700">
            xSkills Academy (“we”, “us”, “our”, or “xSkills”) is India's leading speedcubing learning platform operated by Cubelelo, the premier brand for speedcubes and speedcubing equipment. This Privacy Policy describes how we collect, use, store, share, and protect your personal data when you visit our website, register for cubing classes, purchase course packages, or utilize our learning materials.
          </p>
          <p>
            By enrolling in a class or choosing to use xSkills, you agree to the terms of this Privacy Policy and our Terms of Service. If you are under the age of 18, your registration and usage of xSkills must be completed with the supervision and active consent of a parent or legal guardian.
          </p>

          {/* Quick Stats Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enforced Security</span>
              <span className="text-sm font-bold text-slate-800">256-bit AES Encryption</span>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left border-y sm:border-y-0 sm:border-x border-slate-200/60 py-3 sm:py-0 sm:px-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">No Sales of Data</span>
              <span className="text-sm font-bold text-slate-800">100% Zero Ads Sharing</span>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left sm:pl-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Point</span>
              <span className="text-sm font-bold text-slate-800">support@cubelelo.com</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <div>
            <h2 id="info-we-collect" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 text-slate-850 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">1</span>
              Information We Collect
            </h2>
            <p className="mb-3">
              We collect information that allows us to provide specialized cubing mentoring and customize student programs, which falls into the following categories:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Parent & Guardian Information:</strong> Parent's name, email address, phone number, and city. This is required for schedule coordination, lesson reporting, parent teacher meetings, and invoicing.
              </li>
              <li>
                <strong>Payment Information:</strong> When you purchase packages/subscriptions, payments are processed securely by our trusted online payment gateway engines (such as Razorpay, Instamojo, or Stripe integrated via FreshLearn). We do not record or view your credit card details, CVV, or bank credentials.
              </li>
              <li>
                <strong>Video Calls & Lesson Feedback:</strong> With your permission, live online interactive classes conducted over secure meeting tools may be logged to record teacher feedback, custom training notes, progress analytics, and customized worksheets.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="pt-4">
            <h2 id="freshlearn" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">2</span>
              FreshLearn Learning Platform Integration
            </h2>
            <p>
              Our academy utilizes standard secure technology integration layers provided by FreshLearn as our cloud hosting and learning management software partner. We handle user progress and course registrations securely. When you enroll in our training packages or active student portals, your secure logins and class schedules are maintained through secure external tokens which protect your primary credentials.
            </p>
          </div>

          {/* Section 3 */}
          <div className="pt-4">
            <h2 id="third-party" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">3</span>
              Third-Party Services & Links
            </h2>
            <p>
              In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
            </p>
            <p>
              However, certain third-party service providers, such as payment gateways and other transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.
            </p>
          </div>

          {/* Section 4 */}
          <div className="pt-4">
            <h2 id="updates" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">4</span>
              Amendments & Policy Updates
            </h2>
            <p>
              We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
            </p>
          </div>

          {/* Section 8 */}
          <div className="pt-4 border-t border-slate-100">
            <h2 id="contact" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2 text-brand-purple">
              <Mail className="w-5 h-5 text-brand-purple" />
              Questions and Contact Information
            </h2>
            <p>
              If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information, contact our Data Security Grievance Officer at:
            </p>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs text-slate-600 leading-relaxed mt-2">
              <strong>Address:</strong> Cubelelo, 27, SBI Colony, Sunder Nagar, Raipur, Chhattisgarh 492013, India
              <br />
              <strong>Official Email:</strong> support@cubelelo.com
              <br />
              <strong>Contact:</strong> +91 8080 573 573 (Available Monday–Saturday, 9:30 AM to 6:00 PM IST)
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

export default PrivacyPolicy;
