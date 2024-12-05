import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* navbar section */}
            <Navbar></Navbar>

            {/* middle section */}
            <Outlet></Outlet>

            {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;