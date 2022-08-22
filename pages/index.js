import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'
import Testikuva from '../public/testikuva.png'

const gridWrap = {
  display: 'grid',
  gridTemplateColumns: {
    laptop: '1fr 1fr 1fr',
    mobile: '1fr'
  },
  mb: 2
}

const contentBox = {
  display: 'flex',
  flexDirection: 'column',
  color: '#000',
  '& h2': {
    color: 'primary.main'
  },
  py: 2,
  m: {
    mobile: 0,
    laptop: 2,
  },
  borderBottom: '1px solid #FFC20E',
  '&:first-child': {
    ml: 0
  },
  '&:last-child': {
    mr: 0
  }
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
        </Box>
        <Box sx={mobileImageWrap}>
          <Image src={Testikuva} alt='testikuva' layout='fill' objectFit='cover'/>
        </Box>
          <Container maxWidth='xl'>
            <h1>Etusivu</h1>
            <Box sx={gridWrap}>
              <Box sx={contentBox}>
                <h2>Lorem ipsum</h2>
                <Image  src={Testikuva} alt='testikuva' layout='responsive'/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                  Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel matt
                </p>
                <Button sx={{ mt: 'auto', ml: 'auto', width: '40%' }} variant="contained">Lue lisää</Button>
              </Box>
              <Box sx={contentBox}>
                <h2>Dolor sit amet</h2>
                <Image  src={Testikuva} alt='testikuva' layout='responsive'/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                  Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula..
                </p>
                <Button sx={{ mt: 'auto', ml: 'auto', width: '40%' }} variant="contained">Lue lisää</Button>
              </Box>
              <Box sx={contentBox}>
                <h2>Consectetuer adipiscing</h2>
                <Image  src={Testikuva} alt='testikuva' layout='responsive'/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                </p>
              </Box>
            </Box>
            <Box sx={gridWrap}>
              <Box sx={contentBox}>
                <h2>Lorem ipsum</h2>
                <Image  src={Testikuva} alt='testikuva' layout='responsive'/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                  Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel matt
                </p>
              </Box>
              <Box sx={contentBox}>
                <h2>Dolor sit amet</h2>
                <Image  src={Testikuva} alt='testikuva' layout='responsive'/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                  Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula..
                </p>
              </Box>
              <Box sx={contentBox}>
                <h2>Consectetuer adipiscing</h2>
                <Image  src={Testikuva} alt='testikuva' layout='responsive'/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                </p>
              </Box>
            </Box>
          </Container>
      </div>
    </>
  )
}
