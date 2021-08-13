import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Clock, Heart, MessageCircle, Share2, Tag } from 'react-feather'
import { motion } from 'framer-motion'

function post(props) {
    const [isSharesSocial, setisSharesSocial] = useState(false)
    const sharesSocialsHandle = () => {
        setisSharesSocial(!isSharesSocial)
    }
    const {
        title,
        isVirified,
        likesCount,
        commentsCount,
        answerCount,
        isLiked,
        Tags,
        rateCount,
        userAvatar,
        userFullName,
        time,
        userName } = props
    return (
        <div className="app-post-card">
            <div className="app-post-header d-flex">
                <div className="d-flex">
                    <div className="post-user-avatar">
                        <Link href="/">
                            <Image src={userAvatar} width={50} height={50} />
                        </Link>
                    </div>
                    <div className="post-user-info">
                        <h3 className="title"><Link href="/">{userFullName}</Link></h3>
                        <p className="user-meta"><Clock width={16} height={16} /> منذ 5 دقائق </p>
                    </div>
                </div>
                <div className={"is-qst-virified" + (isVirified ? ' virified' : '')}>
                    <div className="virified-icon">
                        <i className="bi bi-check-lg"></i>
                    </div>
                </div>
            </div>
            <div className="app-post-content">
                <div className="d-flex">
                    <div className="app-post-rate">
                        <button className="rate-post-btn rate-up">
                            <i className="bi bi-chevron-up"></i>
                        </button>
                        <p className="rate-count">{rateCount}</p>
                        <button className="rate-post-btn rate-down">
                            <i className="bi bi-chevron-down"></i>
                        </button>
                    </div>
                    <div className="app-post-wrapper">
                        <div className="app-qst-title">
                            <h2 className="title">
                                <Link href="/questions/id">
                                    {title}
                                </Link>
                            </h2>
                        </div>
                        <div className="app-qst-tags">
                            <ul className="tags-list d-flex">
                                {Tags.map((e, i) => (
                                    <li key={i}>
                                        <Link href="/">
                                            <a>{e}#</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-post-footer">
                <div className="app-post-bottom-meta">
                    <ul className="meta-list-items d-flex">
                        <li className="foot-item">
                            <button className="heart-beat-btn">
                                <Heart />
                            </button>
                            <span className="item-text">{likesCount}</span>
                        </li>
                        <li className="foot-item">
                            <span className="item-icon">
                                <MessageCircle />
                            </span>
                            <span className="item-text">{answerCount}</span>
                        </li>
                        <li className="foot-item foot-community">
                            <span className="item-text">
                                <Link href="/communities/id">
                                    <a>
                                        <Tag/>
                                        الذكاء الإصطناعي
                                    </a>
                                </Link>
                            </span>
                        </li>

                        <li className="foot-item me-auto">
                            <button className={"heart-beat-btn" + (isSharesSocial ? ' is-showen' : '')} onClick={sharesSocialsHandle}>
                                <Share2 />
                            </button>
                            {isSharesSocial &&

                                <motion.ul
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="foot-shares-socials nav"
                                >
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-github"></i>
                                        </a>
                                    </li>
                                </motion.ul>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default post
