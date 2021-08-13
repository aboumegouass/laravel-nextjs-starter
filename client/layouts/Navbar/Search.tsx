import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { MessageCircle, User } from 'react-feather'
import { motion } from 'framer-motion'
function Search() {
    const [isSearch, setIsSearch] = useState(false)
    const searchHandle = (e) => {        
        let keyVal = e.target.value
        if (keyVal == '') {
            setIsSearch(false)
        } else {
            setIsSearch(true)
        }
    }
    return (
        <form className="d-flex mr-auto app-search">
            <input className="form-control me-2" onKeyUp={searchHandle} type="text" placeholder="يمكنك البحث في فارزة..." aria-label="Search" />
            <button className="search-btn">
                <i className="bi bi-search"></i>
            </button>
            {isSearch && (
                <motion.div initial={{ y: 20, opacity: 0 }} exit={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="app-search-results">
                    <div className="search-results-head">
                        <h3 className="title">نتائج البحث</h3>
                    </div>
                    <div className="search-results-body">
                        <div className="search-results-body-inner">
                            <ul className="results-body-items">
                                <li className="item-post-search">
                                    <Link href="/">
                                        <a>
                                            <h2 className="title">لدي سؤال حول استرجاع قيمة المصفوفة إلى حالته</h2>
                                            <ul className="nav">
                                                <li>
                                                    <User/> عبد الحميد بومقواس
                                                </li>
                                                <li>
                                                    <MessageCircle /> 254
                                                </li>
                                                <li>
                                                    <User/> عبد الحميد بومقواس
                                                </li>
                                            </ul>
                                        </a>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}
        </form>
    )
}

export default Search
