import React from 'react';
import Container from 'react-bootstrap/Container';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="about" className="py-5">
      <Container>
        <div className="terminal-container">
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-button red"></span>
              <span className="terminal-button yellow"></span>
              <span className="terminal-button green"></span>
            </div>
            <div className="terminal-body">
              <p>Hi 🙂</p>
              <p>
                Hello! I'm Suparin Srikhloi, a student at KMUTNB majoring in Electronics Computer.
                I strongly believe that your organization needs someone like me because I am determined
                to outperform AI in every way possible!
              </p>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-button red"></span>
              <span className="terminal-button yellow"></span>
              <span className="terminal-button green"></span>
            </div>
            <div className="terminal-body">
              <p>Hobbies 🙂</p>
              <div className="hobbies-list">
                {[
                  { icon: 'fas fa-book', label: 'Reading' },
                  { icon: 'fas fa-dumbbell', label: 'Badminton' },
                  { icon: 'fas fa-headphones', label: 'Listening to Music' },
                  { icon: 'fas fa-tv', label: 'Watching Series' },
                  { icon: 'fas fa-film', label: 'Movies' },
                  { icon: 'fas fa-utensils', label: 'Cooking' },
                ].map((hobby, index) => (
                  <div key={index} className="hobby-item">
                    <i className={hobby.icon}></i> {hobby.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-button red"></span>
              <span className="terminal-button yellow"></span>
              <span className="terminal-button green"></span>
            </div>
            <div className="terminal-body">
              <p>Future 🙂</p>
              <p>
                In the future, I just want to enjoy what I do and live a life that makes me happy.
                I believe that true success comes from being content with myself and the journey I take. 💫
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;