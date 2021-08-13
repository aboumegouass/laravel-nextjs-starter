import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import AddPost from "./AddPost"
import Notifications from "./Notifications"
import Search from "./Search"
import { Code, Globe, Info, Menu, Moon, PlusCircle, Sun } from 'react-feather'
import { useRouter } from 'next/router'

function index(props) {
    const routerActive = useRouter()
    const firstPath = routerActive.route.split('/')
    const addMessage = useAnimation()
    const [isShowAddPost, setisShowAddPost] = useState(false)
    const ShowAddPostHandle = () => {
        setisShowAddPost(true)
    }
    const HideAddPostHandle = () => {
        setisShowAddPost(false)
    }
    const ToggleDarkenHandle = () => {
        props.ToggleDarkenHandle(props.isDarken)
        addMessage.start(i => ({
            opacity: 1,
            y: 0,
            rotate: 0,
          }))
    }
    const ToggleSidebarHandle = () => {
        props.ToggleSidebarHandle(props.isShowen)
    }
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-light app-navbar">
            <div className="container-fluid d-flex">
                <button className={"toggle-sidebar-btn" + (props.isShowen ? '' : ' active')} onClick={ToggleSidebarHandle}>
                    {props.isShowen ? <span className="sidebar-icon"><Menu /></span> : <Menu />}
                </button>
                <Link href="#">
                    <a className="navbar-brand">
                        <motion.svg
                            initial={{ opacity: 0, scale: 0, rotate: 200 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.4, type: 'spring' }}
                            width="36.04882"
                            height="36.048985">

                            <path
                                id="rect841"
                                d="M 6.2270098,0 C 2.777246,0 0,2.7772347 0,6.2269985 V 29.821985 c 0,3.449763 2.777246,6.226998 6.2270098,6.226998 H 9.0947793 C 16.264604,31.925821 20.197312,26.770659 21.740005,18.714369 c -2.755007,2.06623 -4.132479,2.582815 -6.370919,2.582815 -4.99344,0 -8.7815735,-4.304617 -8.7815735,-9.814677 0,-6.543118 4.6490835,-11.36432117 10.8478375,-11.36432117 6.887516,0 12.053182,6.37088507 12.053182,14.80807617 0,8.587048 -4.234477,15.836636 -12.163552,21.122721 h 12.496834 c 3.449761,0 6.227007,-2.777235 6.227007,-6.226998 V 6.2269985 C 36.048821,2.7772347 33.271575,0 29.821814,0 Z" />
                        </motion.svg>

                    </a>
                </Link>
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className={"nav-item" + ((firstPath[1] == "") ? ' active' : '')}>
                        <Link href="/">
                            <a className="nav-link">
                                <Globe size={19} /> <span className="text">البحث عن عمل</span>
                            </a>
                        </Link>
                    </li>
                    <li className={"nav-item" + ((firstPath[1] == "test-skills") ? ' active' : '')}>
                        <Link href="/test-skills">
                            <a className="nav-link">
                                <Code size={19} /> <span className="text"> اتخبر مهاراتك</span>
                            </a>
                        </Link>
                    </li>
                    <li className={"nav-item" + ((firstPath[1] == "about") ? ' active' : '')}>
                        <Link href="/about">
                            <a className="nav-link">
                                <Info size={19} /> <span className="text"> حول الموقع</span>
                            </a>
                        </Link>
                    </li>
                </ul>
                <Search />
                {props.isLoggedIn ?
                    <ul className="navbar-nav left-menu-bar me-auto mb-2 mb-lg-0">
                        <li className="nav-item add-post">
                            <a onClick={ShowAddPostHandle} className="nav-link">
                                <PlusCircle />
                            </a>
                            {isShowAddPost && <AddPost isShowAddPost={isShowAddPost} onChange={HideAddPostHandle} />}
                        </li>
                        <Notifications />
                        <li className="nav-item brightness">
                            <a className="nav-link" onClick={ToggleDarkenHandle}>
                                {props.isDarken ?
                                    <motion.span initial={{ y: 47, rotate: -270 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1.4, type: 'spring' }}><Moon /></motion.span> :
                                    <motion.span initial={{ y: 47, rotate: 30 }} animate={{ y: 0, rotate: 0 }}><Sun /></motion.span>}
                            </a>
                        </li>
                    </ul>
                    :
                    <ul className="navbar-nav left-menu-bar me-auto mb-2 mb-lg-0">
                        <li className="nav-item login-btn">
                            <Link href="/user/login">
                                <a className="btn butt-xs butt-primary-out mt-1">
                                    تسجيل الدخول
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/user/register">
                                <a className="btn butt-xs butt-primary mt-1">
                                    التسجيل
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item brightness">
                            <a className="nav-link" onClick={ToggleDarkenHandle}>
                                <AnimatePresence exitBeforeEnter>
                                    {props.isDarken ?
                                        <motion.span initial={{ y: 47, opacity: 0, rotate: -270 }} exit={{ y: 47, opacity: 0, rotate: -270 }} animate={addMessage}><Moon /></motion.span> :
                                        <motion.span initial={{ y: 47, opacity: 0, rotate: -270 }} exit={{ y: 47, opacity: 0, rotate: -270 }} animate={addMessage}><Sun /></motion.span>}
                                </AnimatePresence>
                            </a>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default index
