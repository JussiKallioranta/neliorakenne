import React  from 'react';
import { Box, Container } from '@mui/material'
import Logo from '../public/neliorakenne_logo_teksti.png'
import InstagramIcon from '../public/Instagram_Glyph_White.png'
import Image from 'next/image';
import { Icon } from '@mui/material';
import Link from 'next/link';

const footer = {
  width: '100%',
  backgroundColor: 'black',
  p: 2,
  display: 'flex',
  '& h1': {
    m: 0,
  }
}

const grid2Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    tablet: '1fr 1fr',
    mobile: '1fr'
  },
  mb: 2,
  fontSize: '0.8em',
  color: 'white',
  '& ul': {
    listStyleType: 'none',
    m: 0, 
    p: 0
  }
}

const footerCenterRow = {
  display: 'flex',
  justifyContent: 'center',
  p: 2
}

const Footer = () => {

  return (
    <Box sx={footer}>
      <Container maxWidth='xl'>
        <Box sx={footerCenterRow}>
          <Image src={Logo} alt='logo' width={300} height={75} unoptimized={true}/>
        </Box>
        <Box sx={footerCenterRow}>
          <Link href='https://instagram.com/neliorakenne'>
            <a>
              <Icon sx={{ display: 'flex', height: 'inherit', width: 'inherit' }}>
                <Image src={InstagramIcon} alt='Instagarm' height={29} width={29} unoptimized={true}/>
              </Icon>
            </a>
          </Link>
        </Box>
        <Box sx={grid2Columns}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <ul>
              <li>
                <p>
                  <Box component="span" sx={{ fontWeight: '500' }}>
                      Suomen Neliö Rakenne Oy
                  </Box>
                </p>
              </li>
              <li>
                <p>
                  Y-Tunnus 3301151-5
                </p>
              </li>
              <li>
                <p>
                  Kirintie 9, 01800 Klaukkala
                </p>
              </li>
            </ul>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <ul>
              <li>
                <p>
                  <Box component="span" sx={{ fontWeight: '500' }}>
                      Ota yhteyttä
                  </Box>
                </p> 
              </li>
              <li>
                <p>
                  +358 45 662 6657
                </p>
              </li>
              <li>
                <p>
                  myynti@neliorakenne.fi
                </p>
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer;