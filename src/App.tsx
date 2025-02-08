import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { Loader } from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column - Profile Section */}
          <div className="md:w-1/3">
            <img
              src="https://res.cloudinary.com/drueoasj6/image/upload/v1737658250/Profile_1_gtwpl1.webp"
              alt="Profile"
              className="w-48 h-58 rounded-lg object-cover mb-8"
            />
            <h1 className="text-2xl font-bold mb-1">Koyel Debnath</h1>
            <p className="text-gray-600 text-sm uppercase mb-6">
              REGISTERED G.N.M STAFF NURSE (0447-MN)
              <br />
              TECHNO INDIA DAMA HOSPITAL
            </p>
            
            <div className="flex gap-6 mb-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 capitalized text-sm px-6 py-2 bg-[rgb(244,244,245)] text-gray-600 rounded-full">Blog</a>
              <a href="mailto:debnathkoyel79@gmail.com" className="text-blue-600 hover:text-blue-800 capitalized text-sm px-6 py-2 bg-[rgb(244,244,245)] text-gray-600 rounded-full">Email Me</a>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <a href="mailto:debnathkoyel79@gmail.com">debnathkoyel75@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-4">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </span>
                <a href="https://www.linkedin.com/in/debnathkoyel/">linkedin.com/in/debnathkoyel</a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-4">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </span>
                <a href="https://www.facebook.com/koyel.debnath.94214">facebook.com/koyel.debnath.94214</a>
              </div>
             {/* <div className="flex items-center gap-2 text-gray-600">
                <span className="w-4">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <a href="https://www.instagram.com/my_ink_craft">instagram.com/my_ink_craft</a>
              </div> */}
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-4">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </span>
                <a href="https://www.youtube.com/@my-ink-crafts">youtube.com/@my-ink-crafts</a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3">
            {/* Summary Section */}
            <p className="text-gray-700 mb-12 leading-relaxed">
            I am a passionate registered staff nurse with experience in various healthcare settings. I enjoy providing high-quality patient care and continuously learning new skills to improve my practice.
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed">
              To build up a career in a reputed hospital where I committed to showing my extreme potential to attain the ultimate goals, not only showing my best-served care but also providing the sign of Honesty, Sincerity, and Accountability.
            </p>

            {/* Experience Section */}
            <section className="mb-12">
              <h2 className="text-lg font-semibold uppercase mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-24 flex-shrink-0 text-sm text-gray-500">
                      {exp.date}
                    </div>
                    <div>
                      <h3 className="font-medium">{exp.title}</h3>
                      <div className="text-sm text-gray-600 mt-1">
                        <div ><strong>Experience:</strong> {exp.duration}</div>
                        <div><strong>Location:</strong> {exp.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-12">
              <h2 className="text-lg font-semibold uppercase mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-24 flex-shrink-0 text-sm text-gray-500">
                      {edu.year}
                    </div>
                    <div>
                      <h3 className="font-medium">{edu.institution}</h3>
                      <div className="text-sm text-gray-600 mt-1">
                        <div>{edu.degree}</div>
                        <div><strong>Location:</strong> {edu.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-lg font-semibold uppercase mb-6">Skill</h2>
              <div className="flex flex-wrap gap-4">
                {['General Ward', 'ICU', 'ITU', 'NICU', 'Patient Assessment', 'Medication Administration', 'Wound Care', 'IV therapy', 'Patient Education', 'Electronic Health Records (EHR)' ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-6 py-2 bg-[rgb(244,244,245)] text-gray-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t text-sm text-gray-600 flex justify-between">
          <div>Copyright &copy; {new Date().getFullYear()} Koyel Debnath. All right reserved</div>
          <div>Managed & Developed By <a href="https://ayansarkar.net" className="hover:text-blue-800">Ayan Sarkar</a></div>
        </div>
      </div>
    </div>
  );
}

// Data
const experiences = [
  {
    date: 'Summer 2023',
    title: 'Staff Nurse — Techno Inodia Dama Hospital',
    duration: '24 December 2024 - Present',
    location: 'Kolkata, West Bengal'
  },
  {
    date: 'Summer 2023',
    title: 'Staff Nurse — Renaissance Hospital',
    duration: '5 September 2023 - 20 November 2024',
    location: 'Kolkata, West Bengal'
  },
  {
    date: 'Summer 2023',
    title: 'Staff Nurse — Supernova Care Home',
    duration: '7 February 2023 - 13 July 2023',
    location: 'Kolkata, West Bengal'
  },
  {
    date: 'Summer 2023',
    title: 'Internship — Taluk General Hospital',
    duration: '6 Month',
    location: 'Mysore, Karnataka'
  },
  {
    date: 'Summer 2023',
    title: 'Psychiatric Posting Internship — Cadabams Group of Psychosocial Rehabilitation Centers',
    duration: '1 Month',
    location: 'Mysore, Karnataka'
  }
];

const education = [
  {
    year: '2019 - 2022',
    institution: 'Sree Nataraja School Of Nursing',
    degree: 'G.N.M (General Nursing and Midwifery)',
    location: 'Mysore, Karnataka'
  },
  {
    year: '2018 - 2019',
    institution: 'West Bengal Council of Higher Secondary Education',
    degree: '10+2 (Higher Secondary)',
    location: 'Bhatibari, West Bengal'
  },
  {
    year: '2017 - 2018',
    institution: 'West Bengal Board of Secondary Education',
    degree: '10 (Secondary)',
    location: 'Bhatibari, West Bengal'
  }
];

export default App;