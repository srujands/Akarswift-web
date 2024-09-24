import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Careers.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Modal } from 'react-bootstrap';
import JobApplicationForm from './JobApplicationForm';

const Careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  const [show, setShow] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState(null);

  const jobDescriptions = {
    'Software Engineer': {
      location: 'Bangalore',
      experience: '5+ years',
      requirements: [
        'Languages: Strong knowledge of JavaScript (ES6+), HTML, CSS, and related web technologies.',
        'Frameworks/Libraries: Proficiency in React, Angular, or Vue.js.',
        'Backend Development: Experience with Node.js or other backend technologies.',
        'APIs: Expertise in designing and consuming RESTful services.',
        'Databases: Experience with MySQL, PostgreSQL, or NoSQL databases like MongoDB.',
        'Version Control: Proficient with Git and code reviews.',
        'Project Management: Familiar with Jira or similar tools.',
        'Testing: Experience with unit testing, integration testing, debugging, and logging.',
        'Build Tools: Knowledge of build tools and task runners like Webpack, Gulp, or npm scripts.',
      ],
      goodToHave: [
        'Server-Side Rendering: Experience with Next.js or Nuxt.js.',
        'Caching: Understanding of caching strategies and tools like Redis or Memcached.',
        'Message Brokers: Experience with RabbitMQ or Kafka.',
        'Cloud Platforms: Knowledge of AWS or other cloud platforms.',
      ],
    },
    'Product Manager': {
      location: 'Bangalore',
      experience: '5+ years',
      responsibilities: [
        'Lead the development and execution of product strategies aligned with business goals.',
        'Oversee the entire product lifecycle, from concept through launch and beyond.',
        'Collaborate with cross-functional teams to deliver innovative solutions.',
        'Conduct market research, competitive analysis, and customer feedback.',
        'Prioritize product roadmap and manage the product backlog.',
        'Define and track key product metrics to evaluate success.',
        'Ensure timely delivery of product releases.',
      ],
      qualifications: [
        'Proven experience in product management or similar roles.',
        'Strong understanding of software development and product lifecycle processes.',
        'Excellent communication and leadership skills.',
        'Data-driven approach to problem-solving.',
        'Ability to manage multiple projects in a fast-paced environment.',
      ],
    },
    'Marketing Specialist': {
      location: 'Bangalore',
      experience: '3+ years',
      responsibilities: [
        'Develop and execute global marketing campaigns to promote products and services.',
        'Drive brand awareness, lead generation, and customer engagement.',
        'Collaborate with product, sales, and design teams to create marketing materials.',
        'Manage social media, email marketing, content marketing, and SEO/SEM initiatives.',
        'Analyze campaign performance and provide insights for optimization.',
        'Conduct market research to identify trends and customer needs.',
        'Manage external vendors and agencies to support marketing objectives.',
      ],
      qualifications: [
        'Proven experience in marketing, with a focus on digital marketing.',
        'Strong analytical skills to track marketing effectiveness.',
        'Familiarity with marketing tools and platforms like Google Analytics, SEO tools, etc.',
        'Excellent communication skills and creativity in content creation.',
        'Ability to work independently and manage multiple projects.',
      ],
    },
  };

  const handleClose = () => setShow(false);

  const handleShow = (title) => {
    setJobTitle(title);
    setJobDescription(jobDescriptions[title]); // Set the specific job description
    setShow(true);
  };

  return (
    <div className="container my-5" style={{ color: 'white' }}>
      <div data-aos="fade-up">
        <h2 className="text-center mb-4">Careers</h2>
        <p className="text-center mb-4"><b>Join Our Team</b></p>
        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <h3>Why Work With Us?</h3>
            {/* Why Work With Us section */}
            <div className="panel mb-3 shadow-sm p-3" data-aos="fade-up">
              <div className="panel-body d-flex align-items-center">
                <i className="bi bi-briefcase me-3 icon-large"></i>
                <div style={{ color: 'black' }}>
                  <h5>Professional Growth</h5>
                  <p>Opportunities for continuous learning and development.</p>
                </div>
              </div>
            </div>
            <div className="panel mb-3 shadow-sm p-3" data-aos="fade-up">
              <div className="panel-body d-flex align-items-center">
                <i className="bi bi-people me-3 icon-large"></i>
                <div style={{ color: 'black' }}>
                  <h5>Dynamic Environment</h5>
                  <p>A vibrant and inclusive workplace.</p>
                </div>
              </div>
            </div>
            <div className="panel mb-3 shadow-sm p-3" data-aos="fade-up">
              <div className="panel-body d-flex align-items-center">
                <i className="bi bi-globe me-3 icon-large"></i>
                <div style={{ color: 'black' }}>
                  <h5>Global Exposure</h5>
                  <p>Work on international projects and build a global network.</p>
                </div>
              </div>
            </div>
            <div className="panel mb-3 shadow-sm p-3" data-aos="fade-up">
              <div className="panel-body d-flex align-items-center">
                <i className="bi bi-lightbulb me-3 icon-large"></i>
                <div style={{ color: 'black' }}>
                  <h5>Innovative Culture</h5>
                  <p>Be part of a team that values creativity and innovation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h3>Current Openings</h3>
            <div className="timeline" style={{ color: 'black' }}>
              <div className="timeline-item mb-4 p-4 rounded shadow-sm" data-aos="fade-up">
                <h5>Software Engineer</h5>
                <p>Work on cutting-edge projects and technologies.</p>
                <Button variant="primary" onClick={() => handleShow('Software Engineer')}>
                  Apply
                </Button>
              </div>
              <div className="timeline-item mb-4 p-4 rounded shadow-sm" data-aos="fade-up">
                <h5>Product Manager</h5>
                <p>Lead product development and strategy.</p>
                <Button variant="primary" onClick={() => handleShow('Product Manager')}>
                  Apply
                </Button>
              </div>
              <div className="timeline-item mb-4 p-4 rounded shadow-sm" data-aos="fade-up">
                <h5>Marketing Specialist</h5>
                <p>Drive global marketing campaigns and initiatives.</p>
                <Button variant="primary" onClick={() => handleShow('Marketing Specialist')}>
                  Apply
                </Button>
              </div>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Apply for {jobTitle}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <JobApplicationForm jobTitle={jobTitle} jobDescription={jobDescription} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
