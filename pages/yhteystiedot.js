import Head from 'next/head'
import Image from 'next/image'
import { Box, Container } from '@mui/material'
import profilePic from '../public/profile_picture.png'

const grid4Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: '1fr 1fr 1fr 1fr',
    tablet: '1fr 1fr',
    mobile: '1fr'
  },
  my: 4,
}

const contentBox = {
  display: 'flex',
  flexDirection: 'column',
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

export default function Contact() {
  return (
    <>
      <Head>
        <title>Neliörakenne</title>
        <meta name="description" content="Neliörakenne" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="rakennuspalvelut" />
      </Head>
      <div>
        <Container maxWidth='xl'>
          <h1>Yhteystiedot</h1>
          <Box sx={grid4Columns}>
            <Box sx={contentBox}>
              <div><Image  src={profilePic} alt='profile' layout='responsive'/></div>
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
                      myynti@neliorakenne.fi
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box sx={contentBox}>
              <div><Image  src={profilePic} alt='profile' layout='responsive'/></div>
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
                      myynti@neliorakenne.fi
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box sx={contentBox}>
              <div><Image  src={profilePic} alt='profile' layout='responsive'/></div>
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
                      myynti@neliorakenne.fi
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box sx={contentBox}>
              <Image  src={profilePic} alt='profile' layout='responsive'/>
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
                      myynti@neliorakenne.fi
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  )
}
