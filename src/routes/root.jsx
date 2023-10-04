import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer'

export default function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
	    <Footer />
        </div>
    )
}
