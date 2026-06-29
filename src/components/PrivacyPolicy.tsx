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
            At xSkills, we are committed to protecting your privacy and personal information. This privacy policy outlines the ways in which we collect, use, and safeguard your information.
          </p>

          {/* Quick Stats Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enforced Security</span>
              <span className="text-sm font-bold text-slate-800">Industry-Standard</span>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left border-y sm:border-y-0 sm:border-x border-slate-200/60 py-3 sm:py-0 sm:px-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sharing Privacy</span>
              <span className="text-sm font-bold text-slate-800">No Selling or Renting</span>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left sm:pl-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Point</span>
              <span className="text-sm font-bold text-slate-800">learn@xskills.in</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <div>
            <h2 id="collection" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">1</span>
              Collection of Information
            </h2>
            <p>
              We collect information from you when you register for an account, enroll in a course, or interact with our platform. This information may include your name, email address, phone number, and billing information.
            </p>
          </div>

          {/* Section 2 */}
          <div className="pt-2">
            <h2 id="use-of-info" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">2</span>
              Use of Information
            </h2>
            <p>
              We use the information we collect to provide you with access to our platform and the courses you have enrolled in. We may also use your information to communicate with you about new courses or updates to our platform.
            </p>
          </div>

          {/* Section 3 */}
          <div className="pt-2">
            <h2 id="lms-communication" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">3</span>
              Communication with LMS
            </h2>
            <p>
              When you send us an email message or otherwise contact us, we may use the information provided by you to respond to your communication as described in this Privacy Policy. We may also archive this information or use it for future communications with you.
            </p>
          </div>

          {/* Section 4 */}
          <div className="pt-2">
            <h2 id="sharing" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">4</span>
              Sharing of Information
            </h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with our service providers who assist us in providing our platform and courses.
            </p>
          </div>

          {/* Section 5 */}
          <div className="pt-2">
            <h2 id="security" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">5</span>
              Security of Information
            </h2>
            <p>
              We use industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </div>

          {/* Section 6 */}
          <div className="pt-2">
            <h2 id="cookies" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">6</span>
              Cookies
            </h2>
            <p>
              We may use cookies to enhance your user experience and personalize your interaction with our platform.
            </p>
          </div>

          {/* Section 7 */}
          <div className="pt-2">
            <h2 id="modification" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">7</span>
              Information Modification
            </h2>
            <p>
              You can modify your personal details like your name and number by accessing the Edit Profile option anytime from our site, except your registered email address.
            </p>
          </div>

          {/* Content protection callout warning */}
          <div className="my-8 bg-red-50/60 p-5 rounded-2xl border border-red-100 flex gap-4">
            <div className="p-2.5 bg-red-100 rounded-xl text-red-600 shrink-0 self-start">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest leading-none">Content Protection Warning</span>
              <p className="text-sm font-medium text-slate-750 mt-1.5 leading-relaxed">
                <strong>Note:</strong> You cannot screen-record the information shared in your respective course of choice or share it with anyone else who has not enrolled in our learning platform. If found otherwise, we may delete your account permanently from our database.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="pt-4 border-t border-slate-100">
            <h2 id="contact" className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2 text-brand-purple">
              <Mail className="w-5 h-5 text-brand-purple" />
              Questions and Contact Information
            </h2>
            <p>
              By using our platform, you agree to the terms of this privacy policy. We may update this policy from time to time, and any changes will be posted on our website. If you have any questions or concerns about our privacy policy, please contact us at:
            </p>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs text-slate-600 leading-relaxed mt-2">
              <strong>Address:</strong> Cubelelo, 27, SBI Colony, Sunder Nagar, Raipur, Chhattisgarh 492013, India
              <br />
              <strong>Official Email:</strong> learn@xskills.in
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
