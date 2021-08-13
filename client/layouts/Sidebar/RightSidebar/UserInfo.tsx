import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function UserInfo() {
    return (
        <>
            <div className="app-user-aside">
                <div className="app-user-head">
                    <div className="d-flex">
                        <div className="user-avatar">
                            <Image width={42} height={42} src="/img/a1.jpg" />
                        </div>
                        <div className="user-body">
                            <h3 className="title">عبد الحميد</h3>
                            <p className="meta">
                                <Link href="/">
                                    <a className="meta-link">تعديل الحساب</a>
                                </Link>
                                <span className="space">|</span>
                                <Link href="/">
                                    <a className="meta-link">تسجيل الخروج</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="app-user-content">
                    
                </div>
            </div>
        </>
    )
}

export default UserInfo
