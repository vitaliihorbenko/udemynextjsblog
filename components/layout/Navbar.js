import Link from "next/link";

import Logo from "./Logo";

import classes from "../../assets/styles/components/layout/navbar.module.css";

const Navbar = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Logo/>
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar