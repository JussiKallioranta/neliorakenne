import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'
import Testikuva from '../public/testikuva2.png'
import kuva1 from '../public/neliorakenne_palvelut_1.jpg'
import kuva2 from '../public/neliorakenne_palvelut_2.jpg'
import kuva3 from '../public/neliorakenne_palvelut_3.jpg'

const grid2Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: '1fr 2fr',
    tablet: '1fr 1fr',
    mobile: '1fr'
  },
  mb: 2,
}

const reverse = {
  gridTemplateColumns: {
    laptop: '2fr 1fr',
    tablet: '1fr 1fr',
    mobile: '1fr'
  },
  '& :nth-child(2)': {
    gridArea: {
      tablet: '1 / 1 / 2 / 2'
    }
  }
}

const contentWrap = {
  position: 'relative',
  '& p': {
    textAlign: 'justify',
    m: {
      laptop: 6,
      tablet: 4,
      mobile: 3
    },
  },
  '& h2': {
    my: 2
  },
  '&:after': {
    content: '""',
    clear: 'both',
    display: 'table'
  },
  mb: 4 
}

const imageWrap = {
  /*height: {
    laptop: '40%',
    tablet: '200px',
    mobile: '100%'
  },*/
  width: {
    laptop: '400px',
    tablet: '40%',
    mobile: '100%'
  },
  float: {
    tablet: 'left',
    mobile: 'none'
  },
  mr: {
    laptop: 6,
    tablet: 4,
    mobile: 0
  },
  mb: {
    tablet: 4,
    mobile: 0
  },
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Neliörakenne | Palvelut</title>
        <meta name="description" content="Neliörakenne | Palvelut" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="rakennuspalvelut remontointi palvelut" />
      </Head>
      <Box sx={{ py: 2 }}>
        <Container maxWidth='xl'>
          <h1>Palvelut</h1>
          <Box sx={contentWrap}>
            <h2><span style={{ position: 'absolute', top: '-150px' }} id="section1"></span>Lorem ipsum</h2>
            <Box sx={imageWrap}><Image  src={kuva1} alt='testikuva' layout='responsive'/></Box>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
            </p>
          </Box>
          <Box sx={contentWrap}>
            <h2><span style={{ position: 'absolute', top: '-150px' }} id="section2"/>Lorem ipsum</h2>
            <Box sx={imageWrap}><Image  src={kuva2} alt='testikuva' layout='responsive'/></Box>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
            </p>
          </Box>
          <Box sx={contentWrap}>
            <h2><span style={{ position: 'absolute', top: '-150px' }} id="section3"/>Lorem ipsum</h2>
            <Box sx={imageWrap}><Image  src={kuva3} alt='testikuva' layout='responsive'/></Box>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
            </p>
          </Box>
        </Container>
      </Box>
    </>
  )
}
