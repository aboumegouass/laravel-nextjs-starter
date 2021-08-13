import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Clock, Heart, Settings } from 'react-feather'
import Comment from './Comment'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import SettingsMenu from './SettingsMenu'

const codeAnswer = `var x = 20;
if (x > 20) {
    return false;
    document.getElementById('root')
}`
function AnswerPost() {
    const [isPostSettingsShow, setIsPostSettingsShow] = useState(false)
    const TogglePostSettingsHandle = () => {
        setIsPostSettingsShow(!isPostSettingsShow)
    }
    return (
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
                    <p className="user-meta"><Clock width={16} height={16} /> منذ 5 دقائق </p>
                </div>
            </div>
            <div className={"is-qst-virified d-flex"}>
                <div className="tools-hearts-btn">
                    <button className="heart-answer-btn">
                        <Heart />
                    </button>
                    <span className="item-text">(2545)</span>
                </div>
                <div className="tools-seattings-btn">
                    <button className="post-settings-dropdown" onClick={TogglePostSettingsHandle}>
                        <Settings />
                    </button>
                    {isPostSettingsShow ? <SettingsMenu/> : ''}
                </div>
                <button className="virified-icon">
                    <i className="bi bi-check-lg"></i>
                </button>
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
                    <div className="app-qst-content border-top-0 pt-0">
                        <p className="text">هذا النص هو مثال لنص آخر يمكن استبداله بنص آخر في تصميمك هذا النص هو مثال لنص <code>thisCodeEx = 20</code> آخر يمكن استبداله بنص آخر في تصميمك هذا النص هو مثال لنص آخر يمكن استبداله  مثال لنص آخر يمكن استبداله <strong>هذا النص هو مثال</strong> بنص آخر في تصميمك هذا النص هو <strong>هذا النص هو مثال</strong> مثال لنص آخر </p>
                        <pre className="line-numbers">
                            <code className={`language-js`}>{codeAnswer}</code>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AnswerPost

