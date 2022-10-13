import Link from "next/link";

const Header = () => {
    return (  
        <nav className="nav">
            <div className="icon"><h1>ERP</h1></div>
            <Link  href="/"><a className="btnh">Login</a></Link>
            <Link  href="/signup"><a className="btnh">Sign Up</a></Link>
        </nav>
    );
}
 
export default Header;