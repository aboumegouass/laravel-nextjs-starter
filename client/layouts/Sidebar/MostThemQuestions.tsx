import React from 'react'
import Link from 'next/link'

function MostThemQuestions() {
    return (
        <div className="app-aside-menu categories-menu">
        <ul className="aside-items-list">
            <li>
                <Link href="/">
                    <a>هذا النص هو مثال لنص آخر يمكن اسبداله</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                <a>هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في الموقع</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                <a>هذا النص هو مثال لنص آخر يمكن اسبداله</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                <a>هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في الموقع</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                <a>هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في الموقع</a>
                </Link>
            </li>
        </ul>
    </div>
    )
}

export default MostThemQuestions
