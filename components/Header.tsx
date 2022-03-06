import React, { Children } from 'react'
import styles from './styles/Header.module.css'
import Link from 'next/link'

const Header = ({children} : any) => {


    return <header className={styles.container}>
        <p><Link href={"/"}>burrow</Link></p>
        <nav className={styles.navContainer}>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
            </ul>
        </nav>
        </header>
}

export default Header