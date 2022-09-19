import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'
import Testikuva from '../public/neliorakenne_etusivu_2.jpg'
import Testikuva2 from '../public/neliorakenne_etusivu_pieni.jpg'
import kuva1 from '../public/neliorakenne_palvelut_pieni_1.jpg'
import kuva2 from '../public/neliorakenne_palvelut_pieni_2.jpg'
import kuva3 from '../public/neliorakenne_palvelut_pieni_3.jpg'
import Link from 'next/link'
import { grey } from '@mui/material/colors'

const grid2Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: '1fr 1fr',
    mobile: '1fr'
  },
  my: 6
}

const grid3Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: '1fr 1fr 1fr',
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
  backgroundColor: 'black'
  //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

const textBox = {
  p: 2,
  color: 'white'
}

const headerTextBox = {
  p: 2,
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  '& h2': {
    color: 'primary.main',
    my: 2,
  },
}

const mainImageWrap = {
  display: {
    mobile: 'none',
    tablet: 'block'
  },
  position: 'relative',
}

const mobileImageWrap = {
  display: {
    mobile: 'block',
    tablet: 'none'
  },
  position: 'relative',
  width: '100%',
  height: '40vh'
}

const containerGrey = {
  backgroundColor: grey[200],
  py: 2
}

const textInImage ={
  backgroundColor: 'rgba(211, 211, 211, .5)',
  m: 0,
  width: '100%',
  position: 'absolute',
  top: '40%',
  zIndex: '999',
  textAlign: 'center',
  '& h1': {
    color: 'white',
    fontWeight: '500',
    fontSize: {
      mobile: '2em',
      tablet: '3em',
      laptop: '4em'
    },
    m: 0
  }
}

const imageWrap = {
  width: {
    //laptop: '500px',
    //tablet: '40%',
    mobile: '100%'
  },
  p: 4
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Neliörakenne</title>
        <meta name="description" content="Neliörakenne" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="rakennuspalvelut" />
      </Head>
      <div>
        <Box sx={mainImageWrap}>
          <Image src={Testikuva} alt='testikuva' layout='responsive'/>
          <Box sx={textInImage}>
            <h1>Suomen Neliö Rakenne Oy</h1>
          </Box>
        </Box>
        <Box sx={mobileImageWrap}>
          <Image src={Testikuva} alt='testikuva' layout='fill' objectFit='cover' objectPosition='center'/>
          <Box sx={textInImage}>
            <h1>Suomen Neliö Rakenne Oy</h1>
          </Box>
        </Box>
        <Container maxWidth='xl'>
          <Box sx={grid2Columns}>
            <Box sx={imageWrap}><Image  src={Testikuva2} alt='testikuva'  layout='responsive'/></Box>
            <Box sx={headerTextBox}>
              <h2>Lorem ipsum</h2>
              <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </h3>
            </Box>
          </Box>
        </Container>
        <Box sx={containerGrey}>
          <Container maxWidth='xl'>
            <Box sx={grid3Columns}>
              <Box sx={contentBox}>
                <div><Image  src={kuva1} alt='testikuva' layout='responsive'/></div>
                <Box sx={textBox}>
                  <h2>Keittiöremontit</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper</p>
                  <Link href="/palvelut/#section1">
                    <a>
                      <Button sx={{}} variant="contained">Lue lisää</Button>
                    </a>
                  </Link>
                </Box>
              </Box>
              <Box sx={contentBox}>
                <div><Image  src={kuva2} alt='testikuva' layout='responsive'/></div>
                <Box sx={textBox}>
                  <h2>Kylppäriremontit</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper</p>
                  <Link href="/palvelut/#section2">
                    <a>
                      <Button sx={{}} variant="contained">Lue lisää</Button>
                    </a>
                  </Link>
                </Box>
              </Box>
              <Box sx={contentBox}>
                <div><Image  src={kuva3} alt='testikuva' layout='responsive'/></div>
                <Box sx={textBox}>
                  <h2>Kattoremontit</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper</p>
                  <Link href="/palvelut/#section3">
                    <a>
                      <Button sx={{}} variant="contained">Lue lisää</Button>
                    </a>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  )
}
