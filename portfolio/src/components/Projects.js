import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaMobileAlt, FaComments } from 'react-icons/fa';
import './Projects.css';
import './Modal.css';

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const projectsData = [
    {
      title: 'Mobile Food Ordering App',
      description: 'A mobile app for community food ordering, boosting local businesses.',
      details: {
        overview: 'This project helps local businesses sell food online using a mobile app.',
        objectives: [
          'Develop a food ordering app for local businesses.',
          'Use Flutter and Dart for development.',
          'Integrate Firebase for notifications and data storage.',
          'Enable Google Maps for store location tracking.'
        ],
        features: [
          'User registration and login',
          'Food ordering and real-time order tracking',
          'QR code payment & cash on delivery',
          'Delivery tracking system'
        ],
        technologies: ['Flutter (Dart)', 'Firebase', 'Google Maps API'],
      },
      icon: <FaMobileAlt size={80} color="#00aaff" />,
    },
    {
      title: 'Webboard Mini Project',
      description: 'A web-based forum for discussions with user authentication.',
      details: {
        overview: 'A mini-project for creating a discussion board with authentication features.',
        objectives: [
          'Develop a forum for users to post and discuss topics.',
          'Implement user authentication (login/logout).',
          'Enable admin control over posts and comments.'
        ],
        features: [
          'User authentication & profile system',
          'Create, edit, delete posts & comments',
          'Admin panel for managing content'
        ],
        technologies: ['PHP for server-side scripting','HTML for the user interface (UI)','phpMyAdmin for database management'],
      },
      github: 'https://github.com/suparin13/Webboard-ECT-Wed.git',
      icon: <FaComments size={80} color="#ffaa00" />,
    },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center">Projects</h2>
        <Row className="justify-content-center">
          {projectsData.map((project, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="project-card text-center">
                <div className="project-icon mx-auto my-3">{project.icon}</div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleShow(project)}>
                    View Details
                  </Button>
                  {project.github && (
                    <Button variant="link" href={project.github} target="_blank" className="text-dark">
                      View on GitHub
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      
      <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
  <Modal.Header closeButton>
    <Modal.Title>{selectedProject?.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedProject?.details && (
      <>
        <p><strong>Overview:</strong> {selectedProject.details.overview}</p>

        <h5>Objectives:</h5>
        <ul>
          {selectedProject.details.objectives?.map((obj, idx) => (
            <li key={idx}>{obj}</li>
          ))}
        </ul>

        <h5>Features:</h5>
        <ul>
          {selectedProject.details.features?.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <h5>Technologies Used:</h5>
        <ul>
          {selectedProject.details.technologies?.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </>
    )}
  </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Projects;