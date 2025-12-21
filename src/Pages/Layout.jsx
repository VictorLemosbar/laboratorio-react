//Import outlet to display the routes 
import { Outlet } from "react-router-dom";
import "./Layout.css"

function Layout() {
    return (
        <div className="layout">
            <div className="header">Header</div>
            <div className="main"><Outlet /></div>
            <div className="footer">footer</div>
        </div>
    );
}

export default Layout;
