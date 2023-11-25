import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import React from 'react'

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie/>Campinho Challenge</Link>
            </h2>
            <form>
                <input type="text" placeholder="Pesquise o filme" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar