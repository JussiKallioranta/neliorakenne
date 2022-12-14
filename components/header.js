import React, { useContext } from 'react';
import { Box, Drawer, IconButton } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Logo from '../public/logo_svg.svg'
import Image from 'next/image';
import { Icon } from '@mui/material';
import { NavigationContext } from '../context/navigationContext';
import Link from 'next/link'
import Navigation from '../components/navigation'

const headerWrap = {
  backgroundColor: 'secondary.main',
  zIndex: 99999,
  position: 'fixed',
  top: 0,
  width: '100%'
}

const header = {
  p: 2,
  display: 'grid',
  gridTemplateColumns: '3rem auto 3rem',
  alignItems: 'center',
  '& h1': {
    margin: 0,
    fontWeight: 300,
    fontStyle: 'italic',
    color: '#fff'
  },
}

const menuButton = {
  display: {
    mobile: 'flex',
    laptop: 'none'
  },
  m: 0,
  p: 0
}

const menuBar = {
  display: {
    mobile: 'none',
    laptop: 'block'
  },
}

const headerText = {
  textAlign: 'center',
  '& h1': {
    fontSize: {
      mobile: '1.4em',
      tablet: '2em'
    }
  }
}

const Header = () => {
  const { mobileNavOpen, setMobileNavOpen } = useContext(NavigationContext)

  return (
    <div>
      <Box sx={headerWrap}>
        <Box sx={header}>
          <Link href='/'>
            <a>
              <Box sx={{ width: '3rem', height: '3rem' }}>
                <Icon sx={{ display: 'flex', height: 'inherit', width: 'inherit' }}>
                  <Image src={Logo} alt='logo'/>
                </Icon>
              </Box>
            </a>
          </Link>
          <Box sx={headerText}>
            <h1></h1>
          </Box>
          <IconButton sx={menuButton} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <MenuRoundedIcon sx={{ color: 'primary.main', width: '3rem', height: '3rem' }}/>
          </IconButton>
        </Box>
        <Box sx={menuBar}>
          <Navigation />
        </Box>
      </Box>
      <Box sx={{ height: { mobile: '80px', laptop: '140px' } }}/>
      <Box>
        <Drawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} anchor='top' PaperProps = {{ sx: { backgroundColor: 'secondary.main' } }} >
          <Box sx={{ height: '5rem' }}></Box>
          <Navigation />
        </Drawer>
      </Box>
    </div>
  )
}

export default Header;