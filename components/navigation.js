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
    }
];

const navWrap = {
    display: 'flex',
    flexDirection: {
        mobile: 'column',
        laptop: 'row'
    },
    justifyContent: 'center',
    p: 2,
};

const navButton = {
    p: 0,
    m: 0,
    borderRight: '1px solid #000',
    '&:last-child': {
        border: 'none'
    },
    '& h3': {
        mx: 2,
        my: 0
    },
    '&:hover': {
        color: 'primary.main'
    },
    '&:active': {
        color: 'primary.main'
    }
}

const Navigation = () => {
    const { mobileNavOpen, setMobileNavOpen } = useContext(NavigationContext)
    return (
        <Box sx={navWrap}>
            {
                routes.map((route, i) =>
                <Box key={`route_${i}`} sx={navButton}>
                    <Link href={route.path}>
                        <a onClick={() => setMobileNavOpen(false)}><h3>{route.name}</h3></a>
                    </Link>
                </Box>
                )
            }     
        </Box>
    )
};

export default Navigation;