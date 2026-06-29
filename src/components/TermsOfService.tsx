import React, { useEffect } from "react";
import { ChevronLeft, Shield, Lock, FileText, Mail, HelpCircle, CheckCircle, Scale, AlertTriangle, PlayCircle } from "lucide-react";

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
            Terms of Service - <span className="text-brand-orange">xSkills by Cubelelo</span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-semibold mt-2">
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Effective Date: June 2026
            </span>
            <span>•</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Digital Learning Standard
            </span>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-slate max-w-none text-slate-600 text-sm md:text-base leading-relaxed space-y-6">
          <p className="font-medium text-slate-700">
            Welcome to xSkills Academy, operated by Cubelelo. By accessing or using our online portal, registering for courses, attending virtual sessions, or interacting with our mentors, you (referred to as "the User", "Parent", or "Student") agree to be bound by the following Terms of Service.
          </p>
          <p>
            Our service is designed to deliver professional digital guidance, live interaction, and personalized learning benchmarks for speedcubing enthusiasts worldwide. Throughout these Terms, pointers focus primarily on the rules governing our classroom interactions, schedules, platform infrastructure, and student conduct.
          </p>

          {/* Quick Stats Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enrollment Age</span>
              <span className="text-sm font-bold text-slate-800">Kids & Adults (Parental Consent Required under 18)</span>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left border-y sm:border-y-0 sm:border-x border-slate-200/60 py-3 sm:py-0 sm:px-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reschedule Window</span>
              <span className="text-sm font-bold text-slate-800">Min. 24 Hours Notice</span>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left sm:pl-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">System Platform</span>
              <span className="text-sm font-bold text-slate-800">FreshLearn Secure LMS</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <div>
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">1</span>
              Student Registrations & Credentials
            </h2>
            <p className="mb-3">
              To utilize the academy features, a student account must be registered under active supervision. Users agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep the learning credentials and LMS dashboard passwords secure. You are fully responsible for all learning milestones and homework files uploaded through your dashboard login.</li>
              <li>Obtain parental/guardian confirmation if the speedcuber is under eighteen (18) years of age.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="pt-2">
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">2</span>
              Digital Material Intellectual Property
            </h2>
            <p className="mb-3">
              All proprietary algorithms, PDF speedcubing worksheets, tracking software, and video tutorials hosted within our LMS are protected by intellectual property laws:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Materials are granted under a personal, non-transferable, single-user student license.</li>
              <li>Copying, capturing, distributing, or sharing premium tutorials with external speedcubing clubs, schools, or non-registered parties is strictly prohibited.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="pt-4">
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">3</span>
              LMS Platform Performance & Access Limits
            </h2>
            <p>
              Our operations depend on the global security systems of FreshLearn. During scheduled software maintenance windows or cloud-hosting interruptions, classes may occasionally experience micro-delays. We will cooperate in good faith to adapt schedules and ensure that zero learning hours are lost because of technical interruptions.
            </p>
          </div>

          {/* Section 4 */}
          <div className="pt-4 border-t border-slate-100/80">
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-orange text-white text-xs font-bold font-mono">4</span>
              Refund Policy
            </h2>
            <p className="mb-4">
              At xSkills, we are committed to providing our customers with the best online learning experience possible. We understand that circumstances may arise where you may need to request a refund for a course you've purchased. Our refund policy is designed to be fair and transparent.
            </p>
            
            <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-xs sm:text-sm">
              <div>
                <h4 className="font-bold text-slate-850 mb-1 flex items-center gap-2 font-display">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  Refund Percentage and Timeframe
                </h4>
                <p className="pl-3.5 text-slate-600">
                  If you decide to request a refund for a bundle you have purchased on xSkills, you are eligible to receive a refund of <strong>75% of the course fee</strong>. To be eligible for this refund, you must submit your refund request within <strong>48 hours</strong> of the purchase.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-850 mb-1 flex items-center gap-2 font-display">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  Eligibility Criteria
                </h4>
                <p className="pl-3.5 text-slate-600">
                  To qualify for a refund under our policy, you must meet the following criteria: The refund request must be submitted within <strong>48 hours</strong> of the purchase and you must not have accessed more than <strong>3 Modules</strong> of the course content.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-850 mb-1 flex items-center gap-2 font-display">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  How to Request a Refund
                </h4>
                <p className="pl-3.5 text-slate-600">
                  To initiate the refund process, please email us at <a href="mailto:learn@xskills.in" className="text-brand-purple hover:underline font-bold">learn@xskills.in</a> or contact us on <span className="font-bold text-slate-800">8080573573</span>.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-850 mb-1 flex items-center gap-2 font-display">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  Refund Processing
                </h4>
                <p className="pl-3.5 text-slate-600">
                  Once your refund request is received and meets the eligibility criteria, our team will review your request and if approved, you will receive a refund of <strong>75% of the course fee</strong> to the original payment method used for the purchase. Please note that it may take <strong>5-7 business days</strong> for the refund to reflect in your account, depending on your financial institution.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-850 mb-1 flex items-center gap-2 font-display">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  Contact Us
                </h4>
                <p className="pl-3.5 text-slate-600">
                  If you have any questions or concerns about our refund policy or need assistance with the refund process, please feel free to reach out to our customer support team at <a href="mailto:learn@xskills.in" className="text-brand-purple hover:underline font-bold">learn@xskills.in</a>.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic mt-3 pl-1">
              xSkills reserves the right to amend or modify this refund policy at its discretion. Any changes will be communicated through our website and relevant communication channels.
            </p>
          </div>

          {/* Section 7 */}
          <div className="pt-4 border-t border-slate-100">
            <h2 className="text-lg md:text-xl font-black text-slate-850 font-display mb-3 flex items-center gap-2 text-brand-purple">
              <Mail className="w-5 h-5 text-brand-purple" />
              Contact Our Administrative Office
            </h2>
            <p>
              If you have any doubts, feedback, or scheduling queries, feel free to contact our support coordinators:
            </p>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs text-slate-600 leading-relaxed mt-2">
              <strong>Address:</strong> Cubelelo, 27, SBI Colony, Sunder Nagar, Raipur, Chhattisgarh 492013, India
              <br />
              <strong>Official Email:</strong> support@cubelelo.com
              <br />
              <strong>Contact:</strong> +91 8080 573 573
            </p>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="border-t border-slate-100 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-semibold">
            &copy; {new Date().getFullYear()} Cubelelo. Intellectual properties are protected under relevant Indian jurisdiction.
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

export default TermsOfService;
