import Link from 'next/link'
import React from 'react'
import Community from './Community'

function index() {
    return (
        <div className="communities-container">
            <div className="communities-container-header d-flex">
                <h3 className="title">المجتمعات المقترحة</h3>
                <div className="loadmore-aside">
                    <Link href="/communities">
                        <a className="loadmore-btn">
                            المزيد...
                        </a>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 p-0 grid-post">
                    <Community 
                        PostTitle="البرمجة الفراشية" 
                        isFollowed={false} 
                        PostCover="/img/cover.jpg"
                        PostAvatar="/img/icon/16.png"
                        FollowersCount={107}
                        QuestionsCount={687}
                    />
                </div>
                <div className="col-sm-4 p-0 grid-post">
                    <Community 
                        PostTitle="البرمجة الفراشية" 
                        isFollowed={false} 
                        PostCover="/img/cover.jpg"
                        PostAvatar="/img/icon/17.png"
                        FollowersCount={102}
                        QuestionsCount={398}
                    />
                </div>
                <div className="col-sm-4 p-0 grid-post">
                    <Community 
                        PostTitle="البرمجة الفراشية" 
                        isFollowed={true} 
                        PostCover="/img/cover.jpg"
                        PostAvatar="/img/icon/15.png"
                        FollowersCount={78}
                        QuestionsCount={254}
                    />
                </div>
            </div>
        </div>
    )
}

export default index
