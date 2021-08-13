import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MostThemUsers() {
    return (
        <div className="most-them-users-list">
            <ul className="list-items">
                <li>
                    <Link href="/">
                        <a className="user-item d-flex">
                            <div className="user-item-avatar">
                                <Image src="/img/a3.jpg" width={40} height={40} />
                            </div>
                            <div className="user-item-body">
                                <h3 className="user-title">عبد الله الهادي</h3>
                                <p className="user-meta">500 نقطة </p>
                            </div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="user-item d-flex">
                            <div className="user-item-avatar">
                                <Image src="/img/a3.jpg" width={40} height={40} />
                            </div>
                            <div className="user-item-body">
                                <h3 className="user-title">عبد الله الهادي</h3>
                                <p className="user-meta">500 نقطة </p>
                            </div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="user-item d-flex">
                            <div className="user-item-avatar">
                                <Image src="/img/a3.jpg" width={40} height={40} />
                            </div>
                            <div className="user-item-body">
                                <h3 className="user-title">عبد الله الهادي</h3>
                                <p className="user-meta">500 نقطة </p>
                            </div>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MostThemUsers
