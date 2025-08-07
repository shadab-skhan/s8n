import React from 'react';

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Tailwind CSS CDN - Included in the HTML wrapper for React */}
      {/* <script src="https://cdn.tailwindcss.com"></script> */}

      {/* Header/Navigation - Simple and clean */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Shadab Khan</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Skills</a></li>
            <li><a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Experience</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Projects</a></li>
            <li><a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Education</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero/About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 text-center rounded-b-xl shadow-lg mx-4 mt-4">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Shadab Khan
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Senior Software Developer | AI/ML Enthusiast | Agile Advocate
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Highly accomplished and results-oriented Senior Software Developer with <strong>11 years of experience</strong> in delivering robust software solutions using C++ and Python. I have a proven track record of mentoring junior developers and collaborating with cross-functional teams to deliver high-quality products. With a keen interest in AI/ML, I am continuously expanding my skill set to apply advanced computing concepts to solve complex real-world challenges.
          </p>
          {/* Optional: Add a call to action button */}
          {/* <a href="#contact" className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
            Get in Touch
          </a> */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white mx-4 mt-8 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Languages */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Languages</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>C++14</li>
                <li>Python</li>
                <li>TypeScript</li>
                <li>SQL</li>
                <li>(Learning) PyTorch</li>
              </ul>
            </div>
            {/* Tools */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Tools & Technologies</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Docker</li>
                <li>Git</li>
                <li>GitHub Copilot</li>
                <li>Terraform</li>
                <li>JIRA/Confluence</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
            {/* Platforms */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Platforms & OS</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>AWS</li>
                <li>Linux</li>
                <li>Windows</li>
              </ul>
            </div>
            {/* Frameworks and Libraries */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Frameworks & Libraries</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Flask</li>
                <li>Numpy</li>
                <li>Pandas</li>
                <li>Qt</li>
                <li>ReactJS</li>
                <li>RESTApi</li>
                <li>Boost.Python</li>
              </ul>
            </div>
            {/* Development Practices */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Development Practices</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Agile Methodologies</li>
                <li>CI/CD</li>
                <li>Unit Testing</li>
                <li>Scrum</li>
                <li>Pair Programming (if applicable)</li>
                <li>TDD (if applicable)</li>
              </ul>
            </div>
            {/* Hardware */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Hardware</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Troubleshooting</li>
                <li>Diagnostics</li>
                <li>Device Driver Development (C)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100 mx-4 mt-8 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>

          {/* Forcepoint */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">Senior Software Engineer, Forcepoint</h3>
            <p className="text-gray-600 mb-4">Mumbai, India | Nov 2022 - Present</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Supported a cloud-based CASB platform, resolving enterprise customer escalations and debugging complex issues to ensure the reliability and security of the product.</li>
              <li>Executed AWS cost optimization strategies by identifying and removing wasteful resources and scaling down underutilized services.</li>
              <li>Managed infrastructure deployment services using Terraform and Python, leveraging automation to improve efficiency and maintain a robust AWS environment.</li>
              <li>Led a seamless migration from Datadog to Grafana Cloud, achieving significant cost reductions while maintaining critical operational visibility.</li>
            </ul>
          </div>

          {/* Emerson (Senior Software Engineer) */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">Senior Software Engineer, Emerson</h3>
            <p className="text-gray-600 mb-4">Pune, India | Sep 2017 - Nov 2022</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Designed and developed a scalable data interoperability tool using Python, ReactJS, and C++ to enable seamless data exchange between a Reservoir Modeling Software (RMS) and other geomodelling platforms.</li>
              <li>Developed Webviz Subsurface Components, an open-source library built with TypeScript (ReactJS) and Python (Dash) for creating rich, interactive dashboards and data visualizations.</li>
              <li>Provided feature development, enhancement, and maintenance for geomodelling software (RMS) using C++ and Python, aligning technical solutions with complex subsurface modeling requirements.</li>
              <li>Acted as Scrum Master and mentored junior colleagues, managing sprint planning and collaborating with international teams to deliver solutions within an Agile framework.</li>
            </ul>
          </div>

          {/* Diebold */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">Software Engineer, Diebold</h3>
            <p className="text-gray-600 mb-4">Mumbai, India | Aug 2016 - Sep 2017</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Developed and maintained a multi-platform ATM application using C++ and XML, supporting global customization and localization requirements.</li>
              <li>Customized application features through XML configurations to meet regional banking needs.</li>
              <li>Deployed builds to test ATM machines, and performed comprehensive functional and integration testing to ensure software reliability.</li>
            </ul>
          </div>

          {/* Emerson (Associate Software Engineer) */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">Associate Software Engineer, Emerson</h3>
            <p className="text-gray-600 mb-4">Pune, India | Apr 2015 - Aug 2016</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Contributed to feature development and bug fixes using C++ and Python, and created new UI panels with Qt to enhance user workflow.</li>
              <li>Implemented comprehensive unit testing and leveraged Git for version control within the CI/CD pipeline to automate quality assurance and ensure high-quality software delivery.</li>
              <li>Exposed core C++ functions as Python APIs using Boost.Python to improve scriptability and cross-language interoperability.</li>
            </ul>
          </div>

          {/* Rotobotix */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">Design Engineer Electronics, Rotobotix</h3>
            <p className="text-gray-600 mb-4">Mumbai, India | Nov 2014 - Apr 2015</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Developed and tested robust device drivers using C for peripherals, including communication modules and sensors, ensuring seamless and effective hardware-software integration.</li>
            </ul>
          </div>

          {/* IDAPL */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mt-8">
            <h3 className="text-2xl font-semibold text-blue-600">Electronics Engineer Trainee, IDAPL</h3>
            <p className="text-gray-600 mb-4">Mumbai, India | Mar 2014 - Nov 2014</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Contributed to the development of an interlock protection system for a major government organization, ensuring optimal safety and reliability.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section - Extracted from Experience for emphasis */}
      <section id="projects" className="py-16 bg-white mx-4 mt-8 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Key Projects</h2>

          {/* Project 1: Data Interoperability Tool */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Scalable Data Interoperability Tool</h3>
            <p className="text-gray-700 mb-4">Designed and developed a scalable data interoperability tool using <strong>Python, ReactJS, and C++</strong> to enable seamless data exchange between a Reservoir Modeling Software (RMS) and other geomodelling platforms.</p>
            {/* Add more details or a link if available */}
          </div>

          {/* Project 2: Webviz Subsurface Components */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Webviz Subsurface Components (Open-Source Library)</h3>
            <p className="text-gray-700 mb-4">Developed an open-source library built with <strong>TypeScript (ReactJS) and Python (Dash)</strong> for creating rich, interactive dashboards and data visualizations for subsurface-related applications.</p>
            {/* Add more details or a link if available */}
          </div>

          {/* Project 3: ATM Application */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Multi-platform ATM Application</h3>
            <p className="text-gray-700 mb-4">Developed and maintained a multi-platform ATM application using <strong>C++ and XML</strong>, supporting global customization and localization requirements for regional banking needs.</p>
            {/* Add more details or a link if available */}
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100 mx-4 mt-8 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education</h2>
          
          {/*Greatlakes  */}
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">PGP in Business Analytics and Business Intelligence</h3>
            <p className="text-gray-700">Great Lakes</p>
            <p className="text-gray-600 mb-4">Jul 2018 - Jul 2019</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Learned predictive analytics and machine learning techniques.</li>
            </ul>
          </div>
          
          {/* CDAC */}
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mt-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">PG Diploma in Integrated VLSI and Embedded System Design</h3>
            <p className="text-gray-700">CDAC - Noida</p>
            <p className="text-gray-600 mb-4">Feb 2013 - Aug 2013</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Completed the diploma with A+ grade.</li>
            </ul>
          </div>

          {/* University of Mumbai */}
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mt-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">Bachelor of Engineering in Electronics</h3>
            <p className="text-gray-700">University of Mumbai</p>
            <p className="text-gray-600 mb-4">Aug 2008 - Jul 2012</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Graduated with First Class honors.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white mx-4 mt-8 rounded-xl shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Connect!</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just sharing insights on software development and AI/ML. Feel free to reach out!
          </p>
          <div className="flex flex-col items-center space-y-4 text-lg text-gray-700 mb-8">
            <p>
              <a href="mailto:shadabskhan@hotmail.com" className="text-blue-600 hover:underline">shadabskhan@hotmail.com</a>
            </p>
            <p>
              (+91) 809 746 1062
            </p>
            <p>
              <a href="https://linkedin.com/in/shadkrs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/shadkrs</a>
            </p>
            {/* Add GitHub if you have a public profile */}
            {/* <p>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/your-github</a>
            </p> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-8 rounded-t-xl mx-4">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Shadab Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
