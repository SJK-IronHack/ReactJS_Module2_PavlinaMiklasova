import { Link } from 'react-router-dom';
import  '../Styles/NavBar.modules.scss'

function NavBar (){
    return ( 
    <>
    <Link to={`/`}>    
    <h1>PavlinaMiklasova</h1>
    </Link>
    </>
    )
}

export default NavBar;