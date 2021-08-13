import Image from 'next/image'
import React from 'react'
import { Clock } from 'react-feather'

function Comment() {
    return (
        <li>
        <div className="qst-comment-head">
            <div className="d-flex">
                <div className="comment-head-user">
                    <div className="d-flex">
                        <div className="head-user-avatar">
                            <Image src="/img/a4.jpg" width={40} height={40} />
                        </div>
                        <div className="head-user-content">
                            <h3 className="title">بومقواس عبد الحميد</h3>
                            <p className="meta"><Clock /> منذ 5 دقائق</p>
                        </div>
                    </div>
                </div>
                <div className="comment-head-tools"></div>
            </div>
        </div>
        <div className="qst-comment-body">
            <p className="text">هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في تصميمك على موقع الويب</p>
        </div>
    </li>
    )
}

export default Comment
