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
    laptop: '1fr 1fr',
    mobile: '1fr'
  },
  mb: 2,
}

const grid3Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: '1fr 1fr 1fr',
    mobile: '1fr'
  },
  mb: 2,
  '& :nth-child(2)': {
    gridArea: 1 / 1 / 2 / 2
  }
}

const contentBox = {
  display: 'flex',
  flexDirection: 'column',
  color: '#000',
  '& h2': {
    color: 'primary.main',
    mb: 1
  },
  py: 2,
  borderBottom: '1px solid #FFC20E',

}

const mainImageWrap = {
  display: {
    mobile: 'none',
    laptop: 'block'
  },
}

const mobileImageWrap = {
  display: {
    mobile: 'block',
    laptop: 'none'
  },
  position: 'relative',
  width: '100%',
  height: '40vh'
}

const reverse = {
  '& :nth-child(2)': {
    gridArea: {
      laptop: '1 / 1 / 2 / 2'
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
            <Image  src={kuva1} alt='testikuva' layout='responsive'/>
            <Box>
              <h2 id="section1">Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel matt
              </p>
            </Box>
          </Box>
          <Box sx={{ ...grid2Columns, ...reverse }}>
            <Image  src={kuva2} alt='testikuva' layout='responsive'/>
            <Box>
              <h2 id="section2">Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel matt
              </p>
            </Box>
          </Box>
          <Box sx={grid2Columns}>
            <Image  src={kuva1} alt='testikuva' layout='responsive'/>
            <Box>
              <h2 id="section3">Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel matt
              </p>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  )
}
