import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function SettingsMenu() {
    return (
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} className="post-settings-menu">
            <ul className="settings-menu-list">
                <li>
                    <Link href="/">
                        <a>تعديل</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>حذف</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>مشاركة المنشور</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>تبليغ عن إساءة</a>
                    </Link>
                </li>
            </ul>
        </motion.div>
    )
}

export default SettingsMenu
