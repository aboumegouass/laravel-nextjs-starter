import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Rss } from 'react-feather'

function CommunityCover() {
    const cover = '/img/cover.jpg'
    return (
        <div className="app-post-card community-cover" style={{ backgroundImage: `url(${cover})` }}>
            <div className="app-post-header d-flex">
                <div className="community-logo">
                    <Image src="/img/icon/5.png" width={90} height={90} />
                    <h3 className="title">الذكاء الإصطناعي</h3>
                </div>
            </div>
            <div className="app-post-footer">
                <div className="d-flex">
                    <ul className="list-items">
                        <li><span className="text">عدد المتابعين: </span> <strong>25</strong></li>
                        <li><span className="text">عدد الأسئلة: </span> <strong>325</strong></li>
                    </ul>
                    <ul className="list-items-btn">
                        <li><button className="btn butt-xs butt-primary"><Rss size={15}/> متابعة</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CommunityCover
