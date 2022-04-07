import * as React from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/dashboard.css';
import Header from '../../components/Header';
import SideMenu from '../components/sideMenu/SideMenu';

function DashboardLayout(props: any) {
    return (
        <div className="layout-container">
            <Header loggedIn={true} />
            <div style={styles.bodyContainer} className="container-view">
                <SideMenu />
                <div style={styles.pageContainer}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

const styles = {
    bodyContainer: {
        display: 'flex',
    },
    pageContainer: {
        flex: 1,
        padding: 30,
    },
}
export default DashboardLayout;