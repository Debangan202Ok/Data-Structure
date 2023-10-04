import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import ScrollToTop from '../utils/ScrollToTop.jsx'

export default function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <ScrollToTop/>
        </div>
    )
}
