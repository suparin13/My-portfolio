import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaMobileAlt, FaComments } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projectsData = [
    {
      title: 'Mobile Food Ordering App',
      description: 'A mobile app for community food ordering, boosting local businesses.',
      icon: <FaMobileAlt size={80} color="#00aaff" />,
      details: '/project_details.html', // ใส่ลิงก์ไปยังรายละเอียดของโปรเจค
    },
    {
      title: 'Webboard Mini Project',
      description: 'A web-based forum for discussions with user authentication.',
      icon: <FaComments size={80} color="#ffaa00" />,
      github: 'https://github.com/suparin13/Webboard-ECT-Wed.git',
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
                  <div className="project-links">
                    {project.github ? (
                      <Button variant="link" href={project.github} target="_blank" className="text-dark">
                        View on GitHub
                      </Button>
                    ) : (
                      <Button variant="link" href={project.details} target="_blank" className="text-primary">
                        Details
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
