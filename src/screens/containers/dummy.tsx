import * as React from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import './auth.css';

interface Props {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
    return <>
        <div className="d-flex" id="wrapper">
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Logo</div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">My Account</a>
                    
                </div>
            </div>
            <div id="page-content-wrapper">
            <Outlet />
                {/* {props.children} */}
            </div>
        </div>
    </>
}

const AuthLayout: React.FunctionComponent = () => {

    return <Layout>
        <div className="container-fluid">
            <section id="main_content">
                <h2>Page Header</h2>
                <hr />
                <p>This is a paragraph</p>
            </section>
        </div>
    </Layout>
}


export default AuthLayout;

// export default class AuthLayout extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//     }

//     public render() {
//         return (
//             <div className="layout-container">
//                 {this.props.children}
//             </div>
//         );
//     }
// }

// function AuthLayout(children, location) {
//     const AuthLayout extends React.Component<any> {

//     return (
//         <div className="layout-container">
//         </div>
//     )

// }

// AuthLayout.propTypes = {
//     children: PropTypes.any,
//     location: PropTypes.object,
// };

// export default withRouter(AuthLayout);