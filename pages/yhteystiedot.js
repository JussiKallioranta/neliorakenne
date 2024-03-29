import Head from 'next/head'
import Image from 'next/image'
import { Box, Container } from '@mui/material'
import jerry from '../public/neliorakenne_jerry.jpg'
import oliver from '../public/neliorakenne_oliver.jpg'
import nuutti from '../public/neliorakenne_nuutti.jpg'

const grid4Columns = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  //display: 'grid',
  //gridGap: '2em',
  //gridTemplateColumns: {
  //  laptop: '1fr 1fr 1fr',
  //  tablet: '1fr 1fr 1fr',
  //  mobile: '1fr'
  //},
  my: 4,
}

const contentBox = {
  '& h2': {
    color: 'primary.main',
    mb: 1,
  },
  width: {
    tablet: '350px',
    mobile: '100%'
  },
}

const textBox = {
  width: '100%',
  p: 2,
  '& ul': {
    listStyleType: 'none',
    m: 0, 
    p: 0
  },
  fontSize: {
    mobile: '0.8em',
    laptop: '1em',
  },
  textAlign: 'center'
}

const imageWrap = {
  p: 4
}

const filler = {
  textAlign: 'center',
  p: 4
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Neliörakenne | Yhteystiedot</title>
        <meta name="description" content="Kysy rohkeasti lisää ja pyydä tarjous kotisi remontista soittamalla tai sähköpostilla" />
        <link rel="icon" href="/icon.png" />
        <meta name="keywords" content="remontti, remontit, remontointi, kylpyhuoneremontti, kattoremontit, keittiöremontti, rakennuspalvelut, uusimaa, helsinki, espoo, vantaa, nurmijärvi, yhteystiedot"/>
      </Head>
      <Box sx={{ py: 2 }}>
        <Container maxWidth='xl'>
          <h1>Yhteystiedot</h1>
          <Box sx={grid4Columns}>
            <Box sx={contentBox}>
              <Box sx={imageWrap}><Image  src={jerry} alt='Jerry' layout='responsive' placeholder='blur'/></Box>
              <Box sx={textBox}>
                <ul>
                  <li>
                    <p>
                      <Box component="span" sx={{ fontWeight: '500' }}>
                          Jerry Savolainen
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
                      <a href="mailto:jerrysavolainen@neliorakenne.fi">jerrysavolainen (at) neliorakenne.fi</a>
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box sx={contentBox}>
              <Box sx={imageWrap}><Image  src={nuutti} alt='Nuutti' layout='responsive' placeholder='blur'/></Box>
              <Box sx={textBox}>
                <ul>
                  <li>
                    <p>
                      <Box component="span" sx={{ fontWeight: '500' }}>
                          Nuutti Nissinen
                      </Box>
                    </p> 
                  </li>
                  <li>
                    <p>
                      +358 44 323 6834
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="mailto:nuuttinissinen@neliorakenne.fi">nuuttinissinen (at) neliorakenne.fi</a>
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
          <Box sx={filler}>
            <h2>Ota yhteyttä!</h2>
            <p>Kysy rohkeasti lisää ja pyydä tarjous soittamalla tai sähköpostilla. Tavoitat meidät myös sähköpostilla osoitteesta <a href="mailto:myynti@neliorakenne.fi">myynti(at)neliorakenne.fi</a></p>
          </Box>
        </Container>
      </Box>
    </>
  )
}
