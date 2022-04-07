import './sideMenu.css'
import React from "react";
import { useNavigate } from 'react-router-dom'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent,
    SidebarFooter
} from "react-pro-sidebar";
import * as Flaticon from "react-icons/fa"


const SideMenu: React.FC<any> = (props: any) => {
    const navigate = useNavigate()
    const handleRoute = (route: string) => {
        navigate(route)
    }

    return (
        <div style={styles.container}
            className="sidemenu-container">
            <ProSidebar style={styles.container}>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem onClick={() => handleRoute('/dashboard')} icon={<Flaticon.FaHome />}>Dashboard</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu icon={<Flaticon.FaRegSun />} title="Settings">
                            <MenuItem icon={<Flaticon.FaGenderless />} onClick={() => handleRoute('/account-setting')}>Account</MenuItem>
                            <MenuItem icon={<Flaticon.FaGenderless />} > Documents </MenuItem>
                        </SubMenu>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu icon={<Flaticon.FaRegUserCircle />} title="My Account">
                            <MenuItem icon={<Flaticon.FaGenderless />}  onClick={() => handleRoute('/customer-transactions')}> Customers Transactions </MenuItem>
                            <MenuItem icon={<Flaticon.FaGenderless />}> Customers Overview </MenuItem>
                            <MenuItem icon={<Flaticon.FaGenderless />}> Daily Closing </MenuItem>
                            <MenuItem icon={<Flaticon.FaGenderless />}> Sales Overview </MenuItem>
                            <MenuItem icon={<Flaticon.FaGenderless />}> Cash Book </MenuItem>
                        </SubMenu>
                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem icon={<Flaticon.FaCalendar />}>Calender</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem icon={<Flaticon.FaProjectDiagram />}>Product Manager</MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    )
}


const styles = {
    container: {
        backgroundColor: '#eee',
        border: '1px solid #eee'
    },
    inputContainer: {
        width: '100%'
    },
    inputRow: {
        display: 'flex',
    }

}


export default SideMenu