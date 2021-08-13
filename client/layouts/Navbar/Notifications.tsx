import React, { useState } from 'react'
import Link from 'next/link'
import { Bell, Settings } from 'react-feather'
import Image from 'next/image'
import { motion } from 'framer-motion'
function Notifications() {
    const [toggleNotifications, setToggleNotifications] = useState(false)
    const toggleNotificationsHandle = (e) => {
        setToggleNotifications(!toggleNotifications)
    }
    const hideNotificationsHandle = (e) => {
        setToggleNotifications(false)
    }
    return (
        <>
            <li className="nav-item notification-btn is-notify"> {/* is-notify */}
                <Link href="#">
                    <a onClick={toggleNotificationsHandle} onWheel={hideNotificationsHandle} className={"nav-link" + (toggleNotifications ? ' is-show' : '')}>
                        <Bell/>
                        <motion.span initial={{ rotate: 20 }} animate={{ rotate: -20 }} className="alert-circle"></motion.span>
                    </a>
                </Link>
                {toggleNotifications && (
                    <motion.div initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} className="app-notification-popup">
                        <div className="notification-popup-head">
                            <div className="d-flex">
                                <h3 className="title"><Bell/> الإشعارات</h3>
                                <div className="notification-settings">
                                    <button className="static-button">
                                        <Settings />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="notification-popup-body">
                            <ul className="notification-popup-list">
                                <li>
                                    <Link href="/">
                                        <a className="d-flex">
                                            <div className="notification-popup-avatar">
                                                <Image src="/img/a3.jpg" width={45} height={45} />
                                            </div>
                                            <div className="notification-popup-content">
                                                <span className="text">علّق </span> <span className="notification-user">طارق عروي</span> <span className="text"> على سؤالك</span> <span className="notification-post">" لدي سؤال حول استرجاع قيمة المصفوفة إلى حالتها الطبيعية "</span>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a className="d-flex">
                                            <div className="notification-popup-avatar">
                                                <Image src="/img/a3.jpg" width={45} height={45} />
                                            </div>
                                            <div className="notification-popup-content">
                                                <span className="text">علّق </span> <span className="notification-user">طارق عروي</span> <span className="text"> على سؤالك</span> <span className="notification-post">" لدي سؤال حول استرجاع قيمة المصفوفة إلى حالتها الطبيعية "</span>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a className="d-flex">
                                            <div className="notification-popup-avatar">
                                                <Image src="/img/a3.jpg" width={45} height={45} />
                                            </div>
                                            <div className="notification-popup-content">
                                                <span className="text">علّق </span> <span className="notification-user">طارق عروي</span> <span className="text"> على سؤالك</span> <span className="notification-post">" لدي سؤال حول استرجاع قيمة المصفوفة إلى حالتها الطبيعية "</span>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="notification-popup-footer">
                            <Link href="/">
                                المزيد من الإشعارات...
                            </Link>
                        </div>
                    </motion.div>
                )}
            </li>
        </>
    )
}

export default Notifications
