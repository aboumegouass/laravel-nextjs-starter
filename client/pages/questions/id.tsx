import React, { useEffect, useState } from 'react'
import { Clock, Heart, MessageCircle, MessageSquare, Settings, Share2, Tag } from 'react-feather'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Comment from '@/layouts/SinglePost/Comment'
import AnswerPost from '@/layouts/SinglePost/AnswerPost'
import CommentForm from '@/layouts/SinglePost/CommentForm'

function id() {
    const code = `var x = 20;
console.log(x);`

    const [isSharesSocial, setisSharesSocial] = useState(false)
    const sharesSocialsHandle = () => {
        setisSharesSocial(!isSharesSocial)
    }
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <div className="app-post-card app-single-post">
                <div className="app-post-header d-flex">
                    <div className="d-flex">
                        <div className="post-user-avatar">
                            <Link href="/">
                                <Image src="/img/a2.jpg" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="post-user-info">
                            <h3 className="title"><Link href="/">عبد الهدي الزوالي</Link></h3>
                            <p dir="ltr" className="user-meta"> منذ 5 دقائق <Clock width={16} height={16} /></p>
                        </div>
                    </div>
                    <div className={"is-qst-virified virified d-flex"}>
                        <div className="tools-hearts-btn">
                            <button className="heart-answer-btn">
                                <Heart />
                            </button>
                            <span className="item-text">(2545)</span>
                        </div>
                        <div className="tools-seattings-btn">
                            <button className="post-settings-dropdown">
                                <Settings />
                            </button>
                        </div>
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
                            <p className="rate-count">{20}</p>
                            <button className="rate-post-btn rate-down">
                                <i className="bi bi-chevron-down"></i>
                            </button>
                        </div>
                        <div className="app-post-wrapper">
                            <div className="app-qst-title">
                                <h2 className="title">
                                    هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في تصميمك
                                </h2>
                            </div>
                            <div className="app-qst-tags">
                                <ul className="tags-list d-flex">
                                    <li>
                                        <Link href="/">
                                            <a>CSS#</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>HTML#</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>JavaScript#</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Laravel#</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>SCSS#</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="app-qst-content">
                                <p className="text">هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في تصميمك هذا النص هو مثال لنص <code>thisCodeEx = 20</code> آخر يمكن استبداله بنص آخر في تصميمك هذا النص هو مثال لنص آخر يمكن استبداله  مثال لنص آخر يمكن استبداله <strong>هذا النص هو مثال</strong> بنص آخر في تصميمك هذا النص هو <strong>هذا النص هو مثال</strong> مثال لنص آخر </p>
                                <pre className="line-numbers">
                                    <code className={`language-js`}>{code}</code>
                                </pre>
                                <p className="text">هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في تصميمك هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في تصميمك هذا النص <code>thisCodeEx = 20</code> هو مثال لنص آخر يمكن استبداله </p>
                            </div>
                            <div className="app-qst-comments">
                                <div className="app-qst-comments-header">
                                    <h3 className="title">التعليقات (5)</h3>
                                </div>
                                <ul className="app-qst-comment-list">
                                    <Comment />
                                </ul>
                                <CommentForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-post-footer">
                    <div className="app-post-bottom-meta">
                        <ul className="meta-list-items d-flex">
                            <li className="foot-item">
                                <span className="item-icon">
                                    <MessageCircle />
                                </span>
                                <span className="item-text">8756</span>
                            </li>
                            <li className="foot-item foot-community">
                                <span className="item-text">
                                    <Link href="/communities/id">
                                        <a>
                                            <Tag />
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
            <div className="app-answer-header">
                <h3 className="title"><MessageCircle /> الأجوبة (5)</h3>
            </div>
            <AnswerPost />

        </>
    )
}
export default id
