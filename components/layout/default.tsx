import Navbar from "../Navbar";
import Footer from "../Footer";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}


const Layout = ({children}:Props) => {
    return ( 
        <div className=" content">
                

        <Navbar />
        {children}
        <Footer/>
        

        </div>
        
     );
}
 
export default Layout;