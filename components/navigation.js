import React, { useContext } from 'react'
import Link from 'next/link'
import { Box } from '@mui/material'
import { NavigationContext } from '../context/navigationContext';

const routes = [
  {
    path: '/',
    name: 'Etusivu'
  },
  {
    path: '/palvelut',
    name: 'Palvelut'
  },
  {
    path: '/yhteystiedot',
    name: 'Yhteystiedot'
  },
];

const navWrap = {
  display: 'flex',
  flexDirection: {
    mobile: 'column',
    laptop: 'row'
  },
  justifyContent: 'center',
  pb: 2,
};

const navButton = {
  p: 1,
  m: 0,
  '&:last-child': {
    border: 'none'
  },
  '& h3': {
    color: 'primary.main',
    mx: 2,
    my: 0,
    fontWeight: 300
  },
  '&:hover': {
    color: 'primary.main',
    backgroundColor: '#121212'
  },
}

const Navigation = () => {
  const { mobileNavOpen, setMobileNavOpen } = useContext(NavigationContext)
  return (
    <Box sx={navWrap}>
      {
        routes.map((route, i) =>
          <Link key={`route_${i}`} href={route.path}>
            <a onClick={() => setMobileNavOpen(false)}>
              <Box sx={navButton}>
                <h3>{route.name}</h3>
              </Box>
            </a>
          </Link>
        )
      }     
    </Box>
  )
};

export default Navigation;