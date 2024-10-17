import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto p-6 bg-black-50">
      {/* Main Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">About Me</h1>
        
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Introduction</h2>
          <p className="text-lg text-gray-600">
            Hi, I'm Winston Kigonya, a passionate web developer from Uganda. I am currently 19 years old and have a strong interest in building modern web applications using technologies like React, JavaScript, and CSS frameworks like Tailwind. I’m always excited to learn new things and take on new challenges that help me grow as a developer.
          </p>
        </section>
        
        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Skills</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>Proficient in HTML, CSS, and JavaScript</li>
            <li>Experienced with React.js, Tailwind CSS, and Vite</li>
            <li>Familiar with version control tools like Git and GitHub</li>
            <li>Understanding of REST APIs and working with APIs in front-end development</li>
            <li>Basic knowledge of back-end development with Node.js and Express</li>
          </ul>
        </section>
        
        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Freelance Web Developer (2023 - Present)</h3>
              <p className="text-lg text-gray-600">
                Worked with clients to build responsive and dynamic websites. My projects ranged from simple landing pages to more complex applications involving forms, API integrations, and animations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Personal Projects</h3>
              <p className="text-lg text-gray-600">
                Created various personal projects to experiment with new technologies and improve my development skills. Some notable projects include:
              </p>
              <ul className="list-disc list-inside pl-4 text-lg text-gray-600">
                <li>A fully responsive portfolio website</li>
                <li>A weather app built using React and OpenWeather API</li>
                <li>An interactive to-do list application using local storage</li>
              </ul>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default About;
