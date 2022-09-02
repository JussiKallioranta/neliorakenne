import React  from 'react';
import { Box, Container } from '@mui/material'
import Logo2 from '../public/logo_teksti.png'
import Image from 'next/image';

const footer = {
  width: '100%',
  backgroundColor: 'secondary.main',
  p: 2,
  display: 'flex',
  '& h1': {
    m: 0,
  }
}

const grid3Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: '1fr 1fr 1fr',
    mobile: '1fr'
  },
  mb: 2
}

const footerCenterRow = {
  display: 'flex',
  justifyContent: 'center'
}

const Footer = () => {

  return (
    <Box sx={footer}>
      <Container maxWidth='xl'>
        <Box sx={footerCenterRow}>
          <Image src={Logo2} alt='logo' width={200} height={42} unoptimized={true}/>
        </Box>
        <Box sx={grid3Columns}>
          <div></div>
          <div>
            
          </div>
          <div></div>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer;