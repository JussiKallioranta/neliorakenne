import Head from 'next/head'
import Image from 'next/image'
import { Box, Container } from '@mui/material'
import profilePic from '../public/profile_picture.png'
import { height } from '@mui/system'

const grid4Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: '1fr 1fr 1fr',
    tablet: '1fr 1fr 1fr',
    mobile: '1fr'
  },
  my: 4,
}

const contentBox = {
  display: 'flex',
  alignItems: {
    mobile: 'center',
    tablet: 'unset'
  },
  flexDirection: {
    mobile: 'row',
    tablet: 'column'
  },
  color: '#000',
  '& h2': {
    color: 'primary.main',
    mb: 1,
  },
  //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

const textBox = {
  p: 2,
  '& ul': {
    listStyleType: 'none',
    m: 0, 
    p: 0
  }
}

const imageWrap = {
  width: '100%'
}

const filler = {
  display: {
    mobile: 'none',
    tablet: 'block'
  },
  height: '300px'
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Neliörakenne | Yhteystiedot</title>
        <meta name="description" content="Neliörakenne | Yhteystiedot" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="rakennuspalvelut" />
      </Head>
      <Box sx={{ py: 2 }}>
        <Container maxWidth='xl'>
          <h1>Yhteystiedot</h1>
          <Box sx={grid4Columns}>
            <Box sx={contentBox}>
              <Box sx={imageWrap}><Image  src={profilePic} alt='profile' layout='responsive'/></Box>
              <Box sx={textBox}>
                <ul>
                  <li>
                    <p>
                      <Box component="span" sx={{ fontWeight: '500' }}>
                          Etunimi Sukunimi
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
                      <a href="mailto:myynti@neliorakenne.fi">myynti@neliorakenne.fi</a>
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box sx={contentBox}>
              <Box sx={imageWrap}><Image  src={profilePic} alt='profile' layout='responsive'/></Box>
              <Box sx={textBox}>
                <ul>
                  <li>
                    <p>
                      <Box component="span" sx={{ fontWeight: '500' }}>
                          Etunimi Sukunimi
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
                      <a href="mailto:myynti@neliorakenne.fi">myynti@neliorakenne.fi</a>
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box sx={contentBox}>
              <Box sx={imageWrap}><Image  src={profilePic} alt='profile' layout='responsive'/></Box>
              <Box sx={textBox}>
                <ul>
                  <li>
                    <p>
                      <Box component="span" sx={{ fontWeight: '500' }}>
                          Etunimi Sukunimi
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
                      <a href="mailto:myynti@neliorakenne.fi">myynti@neliorakenne.fi</a>
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
          <Box sx={filler}></Box>
        </Container>
      </Box>
    </>
  )
}
