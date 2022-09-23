import Head from 'next/head'
import Image from 'next/image'
import { Box, Container } from '@mui/material'
import kuva1 from '../public/neliorakenne_palvelut_1.jpg'
import kuva2 from '../public/neliorakenne_palvelut_2.jpg'
import kuva3 from '../public/neliorakenne_palvelut_3.jpg'
import kuva4 from '../public/palvelut-1.jpg'
import kuva5 from '../public/palvelut-2.jpg'
import kuva7 from '../public/palvelut-4.jpg'

const gridWrap = {
  display: 'grid',
  gridGap: '2em',
  gridTemplateColumns: {
    laptop: 'repeat(5, 1fr)',
    tablet: '1fr 1fr',
    mobile: '1fr'
  },
  mb: 6,
}

/*const reverse = {
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
}*/

const contentWrap = {
  p: 4,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gridColumnEnd: {
    laptop: 'span 2'
  }
}

const imageWrap = {
  alignSelf: 'center',
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Neliörakenne | Palvelut</title>
        <meta name="description" content="Neliörakenne, remontointipalvelua Uudellamaalla" />
        <link rel="icon" href="/icon.png" />
        <meta name="keywords" content="remontti, remontit, remontointi, kylpyhuoneremontti, kattoremontit, keittiöremontti, rakennuspalvelut, uusimaa, palvelut"/>
      </Head>
      <Box sx={{ py: 2 }}>
        <Container maxWidth='xl' sx={{ position: 'relative' }}>
          <h1>Palvelut</h1>
          
          <Box sx={gridWrap}>
            <Box sx={contentWrap}>
              <div>
                <h2><span style={{ position: 'absolute', top: '-150px' }} id="section1"/>Sisäremontit</h2>
                <p>
                  {/* eslint-disable-next-line */}
                  Laadukkaat sisäremontit Uudenmaan alueella keittiöstä kylpyhuoneeseen. Toteutamme ammattitaidolla kaikki kotisi sisäremontit huolettomasti "avaimet käteen" palveluna toiveidesi mukaan. Remontilla parannat kotisi asumismukavuutta, sekä talon arvoa. Kysy lisää!
                </p>
              </div>
            </Box>
            <Box sx={imageWrap}><Image  src={kuva1} alt='' layout='responsive'/></Box>
            <Box sx={imageWrap}><Image  src={kuva2} alt='' layout='responsive'/></Box>
            <Box sx={imageWrap}><Image  src={kuva7} alt='' layout='responsive'/></Box>
          </Box>
          
          <Box sx={gridWrap}>
            <Box sx={contentWrap}>
              <div>
                <h2><span style={{ position: 'absolute', top: '-150px' }} id="section2"/>Ulkoremontit</h2>
                <p>
                Ulkoremontti auttaa ylläpitämään talosi yleiskuntoa ja säilyttää rakennuksesi arvon. Laadukkaasti toteutettuna julkisivuremontti saa talosi näyttämään paremmalta ja voimaan paremmin. Me toteutamme kaikki ulkoremontit kotisi tarpeisiin, mm. kattoremontti, ulkoverhousremontti, ulkomaalaus, ikkuna- ja oviremontti. Kysy tarjous!
                </p>
              </div>
            </Box>
            <Box sx={imageWrap}><Image  src={kuva5} alt='' layout='responsive'/></Box>
            <Box sx={imageWrap}><Image  src={kuva4} alt='' layout='responsive'/></Box>
            <Box sx={imageWrap}><Image  src={kuva3} alt='' layout='responsive'/></Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
