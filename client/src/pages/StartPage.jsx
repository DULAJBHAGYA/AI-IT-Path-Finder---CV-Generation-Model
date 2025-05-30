import React from 'react';
import { ArrowRight, FileText, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {

  const navigate = useNavigate();

  const handleGenerateCV = () =>{
    navigate("/cv-preview");
    console.log('Generate CV clicked');
  }

  return (
    <div className="min-h-screen w-full p-5 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-2xl blur opacity-30 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 leading-tight">
              AI IT Path Finder
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-200 opacity-90">
              ATS Friendly CV Generator
            </h2>
          </div>

          <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed px-2 sm:px-0">
              Transform your career journey with our intelligent CV generator. Create professional, 
              ATS-optimized resumes that get noticed by recruiters and land you interviews. 
              Powered by AI to match your skills with industry requirements.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mt-12 px-4 sm:px-0">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 mx-2 sm:mx-0">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
              <p className="text-slate-400 text-sm">Smart algorithms optimize your CV for maximum impact</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 mx-2 sm:mx-0">
              <FileText className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">ATS Optimized</h3>
              <p className="text-slate-400 text-sm">Guaranteed to pass Applicant Tracking Systems</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 mx-2 sm:mx-0">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Professional</h3>
              <p className="text-slate-400 text-sm">Industry-standard templates that impress recruiters</p>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={handleGenerateCV}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300 hover:from-purple-500 hover:to-cyan-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-2">
                <span>Generate CV</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          <div className="pt-6">
            <p className="text-slate-400 text-sm">
              Join thousands of professionals who landed their dream jobs
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default StartPage;