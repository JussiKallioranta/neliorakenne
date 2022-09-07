import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'
import Testikuva from '../public/testikuva2.png'
import kuva1 from '../public/kuva1.png'
import kuva2 from '../public/kuva2.png'
import kuva3 from '../public/kuva3.png'

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

const imageWrap = {
  display: 'flex',
  justifyContent: 'center'
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

export default function Services() {
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
          <h1>Palvelut</h1>
          <Box sx={grid2Columns}>
            <Box sx={{}}><Image  src={kuva1} alt='testikuva' layout='responsive'/></Box>
            <Box>
              <h2 id="section1">Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
              </p>
            </Box>
          </Box>
          <Box sx={{ ...grid2Columns, ...reverse }}>
            <div><Image  src={kuva2} alt='testikuva' layout='responsive'/></div>
            <Box>
              <h2 id="section2">Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
              </p>
            </Box>
          </Box>
          <Box sx={grid2Columns}>
            <div><Image  src={kuva3} alt='testikuva' layout='responsive'/></div>
            <Box>
              <h2 id="section3">Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
              </p>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  )
}
