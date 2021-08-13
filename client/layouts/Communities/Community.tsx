import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react'
import { Rss, User } from 'react-feather';

function Community(props: any): ReactElement <void> {
    const { PostTitle, isFollowed, PostCover, PostAvatar, FollowersCount, QuestionsCount } = props;
    return (
        <div className="community-post">
            <div className="community-post-head" style={{ backgroundImage: `url(${PostCover})` }}>
                <Image src={PostAvatar} width={42} height={42} />
                <h3 className="title">
                    <Link href={"/communities/" + 'id'}>
                        <a>
                            {PostTitle}
                        </a>
                    </Link> 
                </h3>
                <ul className="nav justify-content-center">
                    <li>
                        <User size={12}/> {FollowersCount}
                    </li>
                    <li>
                        <Rss size={12}/> {QuestionsCount}
                    </li>
                </ul>
            </div>
            <div className="community-post-footer">
                {isFollowed ? <button className="btn butt-xs2 butt-red"><Rss size={14}/> إلغاء المتابعة</button> :
                    <button className="btn butt-xs2 butt-primary"><Rss size={14}/> متابعة</button>
                }
                
            </div>
        </div>
    )
}

export default Community