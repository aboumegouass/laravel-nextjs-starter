import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className="app-footer-sidebar">
            <p className="copy-text">&copy; جميع الحقوق محفوظة لدى <Link href="">فارزة</Link> 2021</p>
            <ul className="nav">
                <li>
                    <Link href="/">سياسة الخصوصية</Link>
                </li>
                <li>
                    <Link href="/">شروط الإستخدام</Link>
                </li>
                <li>
                    <Link href="/">حول فارزة</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer
