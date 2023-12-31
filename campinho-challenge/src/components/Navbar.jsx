import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiFilm, BiSearchAlt2} from 'react-icons/bi';
import './Navbar.css';


const Navbar = () => {

    const [search, setSearch] = useState("")
    const navegation = useNavigate();

    const handleEnvio = (e) => {
        e.preventDefault()

    if(!search) return

    navegation(`/search?q=${search}`)
    setSearch("");
    };


    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiFilm className='logo'/>Campinho Challenge</Link>
            </h2>
            <form onSubmit={handleEnvio}>
                <input type="text" placeholder="Search the movie" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
                
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar