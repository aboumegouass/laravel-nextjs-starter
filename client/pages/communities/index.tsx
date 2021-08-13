import Community from '@/layouts/Communities/Community'
import Link from 'next/link'
import React from 'react'

function index() {
    return (
        <div className="communities-container p-4 pt-2">
            <div className="communities-container-header d-flex">
                <h3 className="title">المجتمعات</h3>
            </div>
            <div className="row">
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community
                        PostTitle="مجتمع البايثون Python" 
                        isFollowed={false} 
                        PostCover="/img/cover.jpg"
                        PostAvatar="/img/icon/2.png"
                        FollowersCount={81}
                        QuestionsCount={500}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community 
                        PostTitle="قواعد البيانات" 
                        isFollowed={false} 
                        PostCover="/img/icon/1.png"
                        PostAvatar="/img/icon/3.png"
                        FollowersCount={102}
                        QuestionsCount={398}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community 
                        PostTitle="تطبيقات iOS" 
                        isFollowed={true} 
                        PostCover="/img/icon/1.png"
                        PostAvatar="/img/icon/4.png"
                        FollowersCount={29}
                        QuestionsCount={389}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community
                        PostTitle="البرمجة الفراشية" 
                        isFollowed={true} 
                        PostCover="/img/cover.jpg"
                        PostAvatar="/img/icon/5.png"
                        FollowersCount={107}
                        QuestionsCount={687}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community 
                        PostTitle="تعليم الآلة" 
                        isFollowed={false} 
                        PostCover="/img/icon/6.png"
                        PostAvatar="/img/icon/6.png"
                        FollowersCount={148}
                        QuestionsCount={236}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community 
                        PostTitle="مطوروا الباكأند PHP" 
                        isFollowed={false} 
                        PostCover="/img/icon/7.png"
                        PostAvatar="/img/icon/7.png"
                        FollowersCount={78}
                        QuestionsCount={254}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community
                        PostTitle="البرمجة الفراشية" 
                        isFollowed={true} 
                        PostCover="/img/icon/8.png"
                        PostAvatar="/img/icon/8.png"
                        FollowersCount={107}
                        QuestionsCount={687}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community 
                        PostTitle="الفوطوشوب" 
                        isFollowed={false} 
                        PostCover="/img/icon/9.png"
                        PostAvatar="/img/icon/9.png"
                        FollowersCount={357}
                        QuestionsCount={941}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community 
                        PostTitle="الجافاسكريبت" 
                        isFollowed={true} 
                        PostCover="/img/icon/10.png"
                        PostAvatar="/img/icon/10.png"
                        FollowersCount={230}
                        QuestionsCount={171}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community
                        PostTitle="علوم البيانات" 
                        isFollowed={false} 
                        PostCover="/img/icon/11.png"
                        PostAvatar="/img/icon/11.png"
                        FollowersCount={96}
                        QuestionsCount={663}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community 
                        PostTitle="الذكائ الإصطناعي" 
                        isFollowed={true} 
                        PostCover="/img/icon/12.png"
                        PostAvatar="/img/icon/12.png"
                        FollowersCount={100}
                        QuestionsCount={998}
                    />
                </div>
                <div className="col-sm-4 p-0 pb-3 grid-post">
                    <Community 
                        PostTitle="البرمجة الفراشية" 
                        isFollowed={false} 
                        PostCover="/img/icon/13.png"
                        PostAvatar="/img/icon/13.png"
                        FollowersCount={78}
                        QuestionsCount={254}
                    />
                </div>
            </div>
        </div>
    )
}

export default index
