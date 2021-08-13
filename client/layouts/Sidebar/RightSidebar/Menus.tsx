import Link from 'next/link'
import React from 'react'
import { Archive, Rss, Tag } from 'react-feather'

function Menus() {
    return (
        <>
            <div className="app-aside-menu categories-menu">
                <div className="aside-title">
                    <h3 className="title"><Archive/> مجتمعاتي </h3>
                </div>
                <ul className="aside-items-list">
                    <li>
                        <Link href="/">
                            <a>الذكاء الإصطناعي <span className="item-count">25</span></a>
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="/">
                            <a>برمجة خليفة الويب <span className="item-count">9</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>برمجة واجهة الويب <span className="item-count">14</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>المعادلات التفاضلية <span className="item-count">5</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="app-aside-menu categories-menu">
                <div className="aside-title">
                    <h3 className="title"><Rss/> مجتمعات أتابعها </h3>
                </div>
                <ul className="aside-items-list">
                    <li>
                        <Link href="/">
                            <a>الذكاء الإصطناعي <span className="item-count">25</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>برمجة خليفة الويب <span className="item-count">9</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>المعادلات التفاضلية <span className="item-count">5</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>المنطق الرياضي <span className="item-count">17</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menus
