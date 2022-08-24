import Navbar from "../components/Navbar";

import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

const Contact = () => {
  return (
    <>
      <Hero>
        <Heading>Contact</Heading>
      </Hero>
    </>
  );
};

export default Contact;
