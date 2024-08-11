import React from 'react';
import styled from 'styled-components';
import Image from '../assets/onestoplogo.svg'

const FooterDetail = () => {
  return (
    <Section>
        <Img src={Image} />
    </Section>
  )
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const Img = styled.image`
    width: 40px;
    height: 30px
`

export default FooterDetail