import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import './Skills.css';

function Skills() {
  const skillsData = [
    { name: 'HTML', icon: 'fab fa-html5', level: 80 },  
    { name: 'CSS', icon: 'fab fa-css3-alt', level: 70 },  
    { name: 'PHP', icon: 'fab fa-php', level: 60 },       
    { name: 'MySQL', icon: 'fas fa-database', level: 80 },
    { name: 'Python', icon: 'fab fa-python', level: 50 },  
    { name: 'JavaScript', icon: 'fab fa-js', level: 40 },  
    { name: 'React', icon: 'fab fa-react', level: 80 },     
    { name: 'Node.js', icon: 'fab fa-node-js', level: 75 }, 
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 80 },
    { name: 'GitHub', icon: 'fab fa-github', level: 90 },   
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
              <div className="skill-progress">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  strokeWidth={10}
                  styles={{
                    path: {
                      stroke: skill.level > 75 ? '#61c454' : skill.level > 50 ? '#f39c12' : '#e74c3c', // Color based on skill level
                    },
                    trail: {
                      stroke: '#ddd',
                    },
                    text: {
                      fill: '#333',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    },
                  }}
                />
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
}

export default Skills;
