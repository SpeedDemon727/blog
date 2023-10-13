import { Link } from "react-router-dom";
/**
 * This function creates the Navigation Bar for the home page and also sets up the links
 * between the different pages through the "Link to " method and uses exact file name to 
 * @returns Nav Bar function for each page
 */

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to ="/">Home</Link> 
                </li>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                <li>
                    <Link to ="articles">Articles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;