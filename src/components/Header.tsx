import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './header.css'
import logo from '../assets/images/logo.png'
import LanguagePicker from './LanguagePicker'
import TextLink from './TextLink'

interface HeaderProps {
    loggedIn: boolean
}

const Header: React.FC<HeaderProps> = ({ loggedIn }: HeaderProps) => {
    const navigate = useNavigate()

    const handleAuth = () => {
        navigate('/')
    }

    return (
        <div style={styles.headerContainer} >
            <div style={styles.leftContainer} >
            <div style={styles.logoContainer}>
                <img style={styles.logo} src={logo} />
            </div>
            </div>

            <div style={styles.rightContainer}>
                <LanguagePicker />      
            </div>
        </div>
    )
}

const styles = {
    headerContainer: {
        minHeight: 70,
        border: 0,
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    logoContainer: {
        maxWidth: 200,
        width: '100%',
    },
    logo: {
        maxWidth: 130,
        alignSelf: 'center',
    },
    leftContainer: {

    },
    rightContainer: {
        width: '5%'
    }
}

export default Header;