import styled from "styled-components";

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return (
    <FooterSection>
      <p>Next 2022 All Rights Reserved</p>
    </FooterSection>
  );
};

export default Footer;
