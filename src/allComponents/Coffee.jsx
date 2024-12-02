
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Coffee = () => {
    return (
        <div>
            {/* header section  */}
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Coffee;