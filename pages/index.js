import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'
import Testikuva from '../public/testikuva2.png'
import kuva1 from '../public/kuva1.png'
import kuva2 from '../public/kuva2.png'
import kuva3 from '../public/kuva3.png'
import Link from 'next/link'

const grid2Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: '1fr 1fr',
    mobile: '1fr'
  },
  mb: 2
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
          <Image src={Testikuva} alt='testikuva' layout='fill' objectFit='cover' objectPosition='right'/>
        </Box>
        <Container maxWidth='xl'>
          <h1>Etusivu</h1>
          <Box sx={grid2Columns}>
            <Image  src={kuva1} alt='testikuva' layout='responsive'/>
            <Box>
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel matt
              </p>
            </Box>
          </Box>
          <Box sx={grid3Columns}>
            <Box sx={contentBox}>
              <h2>Lorem ipsum</h2>
              <Image  src={kuva1} alt='testikuva' layout='responsive'/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel matt
              </p>
              <Button sx={{ mt: 'auto', ml: 'auto', width: '40%' }} variant="contained">Lue lisää</Button>
            </Box>
            <Box sx={contentBox}>
              <h2>Dolor sit amet</h2>
              <Image  src={kuva2} alt='testikuva' layout='responsive'/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula..
              </p>
              <Link href="/palvelut/#section2">
                <a>
                  <Button sx={{ mt: 'auto', ml: 'auto', width: '40%' }} variant="contained">Lue lisää</Button>
                </a>
              </Link>
            </Box>
            <Box sx={contentBox}>
              <h2>Consectetuer adipiscing</h2>
              <Image  src={kuva3} alt='testikuva' layout='responsive'/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
              </p>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  )
}
