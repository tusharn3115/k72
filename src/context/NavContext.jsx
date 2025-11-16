import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = React.createContext()
export const NavbarColorContext = React.createContext()

const NavContextProvider = ({ children }) => {

    const [navColor, setNavColor] = useState('white')
    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(function () {
        if (locate === '/projects' || locate === '/agence') {
            setNavColor('black')
        } else {
            setNavColor('white')
        }
    }, [locate])

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor, setNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

export default NavContextProvider