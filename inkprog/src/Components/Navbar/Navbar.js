
import {Link} from 'react-router-dom';
import './Navbar.css';
import {FaTimes, FaBars} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

    // ------------------------------------------

    const [click, setClick] = useState(false)

    const handleClick = ()=>{
        setClick(!click);
    }

    // -----------------------------------------

  return (
    <nav>
        <div className='logo'>
            <h1>INKPROG</h1>
        </div>

        <div className= {click ? 'menu active': 'menu'}>
            <Link to='/'><p>Home</p></Link>
            <Link to='/training'><p>Training</p></Link>
            <Link to='/contact'><p>Contact</p></Link>    
        </div>

        <div className='hamBurger' onClick={handleClick}>
            { 

            click ?(
                <FaTimes style={{color:'white'}} size={25}/>
            ) : (
                <FaBars style={{color:'white'}} size={25}/>
            )

            }

        </div>
    </nav>
  )
}

export default Navbar