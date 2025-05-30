import React from "react";
import {
  Download,
  Search,
  ArrowLeft,
  Linkedin,
  Github,
  Globe,
  PenLine,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CVPreviewPage = () => {
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    console.log("Download CV clicked");
  };

  const handleSeekJobs = () => {
    console.log("Seek Jobs clicked");
  };

  const handleGoBack = () => {
    navigate("/");
    console.log("Go back clicked");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            onClick={handleGoBack}
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Generator</span>
          </button>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 hover:from-green-500 hover:to-emerald-500"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={handleSeekJobs}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 hover:from-purple-500 hover:to-cyan-500"
            >
              <Search className="w-5 h-5" />
              <span>Seek Jobs</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 md:px-14 lg:px-16 xl:px-20 2xl:px-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-0 shadow-2xl shadow-black/20 overflow-hidden">
            <div className="bg-white p-8 border-b border-gray-200-solid-4px">
              <div className="text-left">
                <h1
                  className="text-3xl font-bold mb-2 text-black"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  DULAJ UPANANDA
                </h1>
                <p
                  className="text-lg mb-4 text-gray-800"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Software Engineer
                </p>
                <div
                  className="text-sm text-gray-700 flex space-x-8"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {/* Contact Info */}
                  <div>(+94) 76 832 3678</div>
                  <div>dulajupananda@gmail.com</div>
                  <div>Kandy, Sri Lanka</div>
                  <div className=" flex items-right space-x-10">
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
                    </a>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 hover:text-black cursor-pointer" />
                    </a>
                    <a
                      href="https://yourwebsite.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-5 h-5 hover:text-green-600 cursor-pointer" />
                    </a>
                    <a
                      href="https://medium.com/@yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PenLine className="w-5 h-5 hover:text-gray-800 cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-8 space-y-6"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              <section>
                <h2 className="text-xl font-bold text-black mb-3 border-b border-gray-300 pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-gray-800 leading-relaxed text-justify text-sm">
                  Dedicated Software Engineer with hands-on experience in
                  full-stack development, mobile applications, and database
                  management. Proficient in modern programming languages
                  including Java, Python, JavaScript, and GoLang. Experienced in
                  React, Flutter, and Node.js frameworks with strong
                  problem-solving abilities and proven track record of
                  delivering efficient solutions under tight deadlines. Seeking
                  to leverage technical expertise and leadership qualities in a
                  challenging software development role.
                </p>
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className="text-xl font-bold text-black mb-3 border-b border-gray-300 pb-1">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-2 text-sm text-gray-800">
                  <div>
                    <strong>Programming Languages:</strong> Java, Python, C,
                    JavaScript, GoLang, Dart, TypeScript
                  </div>
                  <div>
                    <strong>Web Technologies:</strong> ReactJS, NodeJS, NextJS,
                    Angular, HTML5, CSS3, RESTful APIs
                  </div>
                  <div>
                    <strong>Mobile Development:</strong> Flutter, React Native,
                    Cross-platform Development
                  </div>
                  <div>
                    <strong>Backend Frameworks:</strong> .NET Core, SpringBoot,
                    ExpressJS, Django
                  </div>
                  <div>
                    <strong>Databases:</strong> MySQL, MongoDB, MS SQL Server,
                    PostgreSQL, Database Design
                  </div>
                  <div>
                    <strong>IDEs:</strong> Git, Visual Studio Code,
                    IntelliJ IDEA, Docker, Kubernetes
                  </div>
                  <div>
                    <strong>Project Management:</strong> Jira, Agile
                    Methodologies, Version Control
                  </div>
                  <div>
                    <strong>Design Tools:</strong> Figma, UI/UX Design                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3 border-b border-gray-300 pb-1">
                  WORK EXPERIENCE
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-black">
                      Intern Software Engineer
                    </h3>
                    <p className="font-semibold text-gray-700">
                      FutureCX Lanka (Pvt) Ltd
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      February 2024 – August 2024
                    </p>
                    <ul className="text-sm text-gray-800 space-y-1 ml-4">
                      <li>
                        • Enhanced and maintained core product components using
                        Flutter and GoLang programming languages
                      </li>
                      <li>
                        • Developed new software features and optimized
                        application performance to improve user experience
                      </li>
                      <li>
                        • Managed PostgreSQL databases including data modeling,
                        queries, and performance optimization
                      </li>
                      <li>
                        • Collaborated with cross-functional teams to
                        troubleshoot and resolve complex technical issues
                      </li>
                      <li>
                        • Delivered efficient software solutions under tight
                        project deadlines while maintaining code quality
                      </li>
                      <li>
                        • Participated in code reviews and implemented best
                        practices for software development lifecycle
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3 border-b border-gray-300 pb-1">
                  KEY PROJECTS
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold text-black">
                      AI IT Path Finder - Full Stack Developer (Ongoing)
                    </h3>
                    <p className="text-gray-800 mb-1">
                      AI-Driven Career Guidance Platform for IT Professionals
                      featuring personalized job recommendations, automated
                      dynamic CV generation, application tracking system, and
                      intelligent interview preparation tools.
                    </p>
                    <p className="text-gray-700">
                      <strong>Technologies:</strong> Django, ReactJS, Spacy,
                      PostgreSQL, MongoDB, DraftJS, Puppeteer
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black">
                      EduApp E-learning Platform - Full Stack Developer
                    </h3>
                    <p className="text-gray-800 mb-1">
                      Mobile application with secure authentication,
                      comprehensive course management, and user management
                      system. Implemented admin approval workflows and super
                      admin oversight functionality.
                    </p>
                    <p className="text-gray-700">
                      <strong>Technologies:</strong> Flutter, GoLang, PostgreSQL
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black">
                      Highway Bus Management System - Full Stack Developer
                    </h3>
                    <p className="text-gray-800 mb-1">
                      Comprehensive transportation management system with mobile
                      app for bookings and live bus tracking, plus web
                      application with administrative functionalities. Led UI
                      design and full-stack development.
                    </p>
                    <p className="text-gray-700">
                      <strong>Technologies:</strong> ReactJS, ExpressJS, NodeJS,
                      MongoDB, Firebase, React Native, Figma
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black">
                      MERN Job Portal - Full Stack Developer
                    </h3>
                    <p className="text-gray-800 mb-1">
                      Job search platform with employer posting capabilities and
                      Firebase authentication for secure user management.
                    </p>
                    <p className="text-gray-700">
                      <strong>Technologies:</strong> ReactJS, Firebase,
                      ExpressJS, NodeJS, MongoDB, Tailwind CSS
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black">
                      MERN LMS Web Application - Full Stack Developer
                    </h3>
                    <p className="text-gray-800 mb-1">
                      Learning Management System for college students with
                      authentication, payment integration, course management,
                      enrollment system, and resource access functionality.
                    </p>
                    <p className="text-gray-700">
                      <strong>Technologies:</strong> ReactJS, ExpressJS, NodeJS,
                      Tailwind CSS, Clerk Auth, MongoDB, Stripe Payment
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3 border-b border-gray-300 pb-1">
                  EDUCATION
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-black">
                      Bachelor of Science Honors in Information Technology &
                      Management
                    </h3>
                    <p className="text-gray-700">
                      University of Moratuwa, Sri Lanka
                    </p>
                    <p className="text-gray-600">
                      2021 - 2025 | Current CGPA: 3.20
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black">
                      Diploma in Software Engineering
                    </h3>
                    <p className="text-gray-700">ESOFT Metro Campus</p>
                    <p className="text-gray-600">2020 - 2021</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black">
                      Diploma in Information Technology
                    </h3>
                    <p className="text-gray-700">SIBA Campus</p>
                    <p className="text-gray-600">August 2019 - March 2020</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black">
                      GCE Advanced Level - Biological Science Stream
                    </h3>
                    <p className="text-gray-700">Kingswood College, Kandy</p>
                    <p className="text-gray-600">2019 | Results: AAB</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3 border-b border-gray-300 pb-1">
                  LEADERSHIP & VOLUNTEERING
                </h2>
                <ul className="space-y-1 text-sm text-gray-800 ml-4">
                  <li>
                    • Web and Technology Manager of SEDS Mora (2023 - 2024)
                  </li>
                  <li>
                    • Member of Mora Spirit intra-university media network (2022
                    - 2023)
                  </li>
                  <li>
                    • Member of the University Baseball team (2022 - 2023)
                  </li>
                  <li>
                    • Member of Sasnaka Sansada Foundation (2020 - Present)
                  </li>
                  <li>• Senior Prefect, Kingswood College (2016 - 2017)</li>
                  <li>• Junior Prefect, Kingswood College (2013 - 2014)</li>
                  <li>
                    • Batch Representative, Faculty of Information Technology
                    (2nd Year)
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 sm:hidden">
        <button
          onClick={handleDownloadCV}
          className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-green-500/25 transform hover:scale-110 transition-all duration-300"
        >
          <Download className="w-6 h-6" />
        </button>
        <button
          onClick={handleSeekJobs}
          className="w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300"
        >
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CVPreviewPage;
