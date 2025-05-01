import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

function Skills() {
  const skillsData = [
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'GitHub', icon: 'fab fa-github' },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2>My Skills</h2>
        <ListGroup className="skill-list">
          {skillsData.map((skill, index) => (
            <ListGroup.Item key={index} className="skill-item">
              <i className={`${skill.icon} skill-icon`}></i>
              <span className="skill-name">{skill.name}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
}

export default Skills;
