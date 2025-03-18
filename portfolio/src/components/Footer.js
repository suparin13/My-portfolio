import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;