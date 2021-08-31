import React from 'react'
import observer from '../breakPoints/breakpoint'
import {useState} from 'react'
import SmallNavbar from './SmallNavbar';
import LargeNavbar from './LargeNavbar';
import {useEffect} from 'react';

function NavBar() {
    const [breakPoint,
        setBreakPoint] = useState();

    useEffect(() => {
        observer(setBreakPoint)
    }, [breakPoint])

    return ( <> {
        breakPoint === 'mobile'
            ? <SmallNavbar/>
            : <LargeNavbar/>
    } </>  )
        
}

export default NavBar