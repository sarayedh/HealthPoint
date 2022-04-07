import * as React from 'react'
import { Outlet } from 'react-router-dom';
import { ColorSet } from '../../constants/styles/index'

import PropTypes from 'prop-types';
import '../containers/styles/auth.css';
import Header from '../../components/Header';

function AuthLayout(props: any) {
    return (
        <div style={styles.container}>
            <Header loggedIn={false} />
            <div style={styles.pageContainer}>
                <Outlet />
            </div>
        </div>
    )
}
const styles = {
    container: {
    },

    pageContainer: {
        backgroundColor: ColorSet.white,
        minHeight: '80vh',
        display: 'flex',
        flex: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default AuthLayout;