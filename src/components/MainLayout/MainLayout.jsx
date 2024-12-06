import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto font_outfit text-black_color">
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