import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'
import HeadImage from '../public/neliorakenne_etusivu_2.jpg'
import kuva1 from '../public/neliorakenne_palvelut_pieni_1.jpg'
import kuva2 from '../public/neliorakenne_palvelut_pieni_2.jpg'
import kuva3 from '../public/neliorakenne_palvelut_pieni_3.jpg'
import Link from 'next/link'
import { grey } from '@mui/material/colors'

const grid2Columns = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    // laptop: '1fr 1fr', // jos löytyy kuva tekstin rinnalle
    laptop: '1fr',
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
  alignItems: 'center',
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
        <meta name="description" content="Neliörakenne on Uudellamaalla toimiva remonttiliike, joka toteuttaa kodin remontit laadukkaasti ja ammattitaidolla alusta loppuun." />
        <link rel="icon" href="/icon.png" />
        <meta name="keywords" content="remontti, remontit, remontointi, kylpyhuoneremontti, kattoremontit, keittiöremontti, rakennuspalvelut, uusimaa, helsinki, espoo, vantaa, nurmijärvi"/>
      </Head>
      <div>
        <Box sx={mainImageWrap}>
          <Image src={HeadImage} alt='pääkuva' layout='responsive' priority/>
          <Box sx={textInImage}>
            <h1>Suomen Neliö Rakenne Oy</h1>
          </Box>
        </Box>
        <Box sx={mobileImageWrap}>
          <Image src={HeadImage} alt='pääkuva' layout='fill' objectFit='cover' objectPosition='center' priority sizes='(max-width: 640px) 200vw'/>
          <Box sx={textInImage}>
            <h1>Suomen Neliö Rakenne Oy</h1>
          </Box>
        </Box>
        <Container maxWidth='xl'>
          <Box sx={grid2Columns}>
            {/*<Box sx={imageWrap}><Image  src={HeadImage} alt=''  layout='responsive'/></Box>*/}
            <Box sx={headerTextBox}>
              <Box sx={{ width: { laptop: '50%' }, px: { mobile: 6, laptop: 0 } }}>
                <h2>Suomen Neliö Rakenne lyhyesti</h2>
                <h3>
                  Me olemme uusimaalainen remonttiliike, jonka kanssa yhteistyö on sujuvaa ja luotettavaa. Toteutamme aina remontit laadukkaasti alusta loppuun, ja meille tärkein tavoite remontissa on tyytyväinen asiakas.
                </h3>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box sx={containerGrey}>
          <Container maxWidth='xl'>
            <Box sx={grid3Columns}>
              <Box sx={contentBox}>
                <div><Image  src={kuva2} alt='kylpuhone' layout='responsive'/></div>
                <Box sx={textBox}>
                  <h2>Kylpyhuoneremontit</h2>
                  {/* eslint-disable-next-line */}
                  <p>Toteutamme kodin märkätilaremontit ammattitaidolla mielesi  mukaan, "avaimet käteen" palveluna.</p>
                  <Link href="/palvelut/#section1">
                    <a>
                      <Button sx={{}} variant="contained">Lue lisää</Button>
                    </a>
                  </Link>
                </Box>
              </Box>
              <Box sx={contentBox}>
                <div><Image  src={kuva1} alt='keittö' layout='responsive'/></div>
                <Box sx={textBox}>
                  <h2>Keittiöremontit</h2>
                  <p>Päivitämme keittiösi nykyaikaiseen, suunnitelmienne mukaan. Meiltä myös muut kodin kalusteasennukset.</p>
                  <Link href="/palvelut/#section1">
                    <a>
                      <Button sx={{}} variant="contained">Lue lisää</Button>
                    </a>
                  </Link>
                </Box>
              </Box>
              <Box sx={contentBox}>
                <div><Image  src={kuva3} alt='katto' layout='responsive'/></div>
                <Box sx={textBox}>
                  <h2>Kattoremontit</h2>
                  <p>Turvallinen ja laadukas kattoremontti meiltä. Pyydä ilmainen katon arviointi!</p>
                  <Link href="/palvelut/#section2">
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
