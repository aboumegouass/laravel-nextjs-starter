import Link from 'next/link'
import React from 'react'

function SubNav() {
    return (
        <div className="navbar navbar-expand-lg p-0 content-sub-nav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">
                            الأكثر شعبية
                        </a>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link href="/">
                        <a className="nav-link">
                            الأحدث
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">
                            المجاب عنها
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">
                            غير مجاب عنها
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SubNav
