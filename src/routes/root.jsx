import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

export default function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
