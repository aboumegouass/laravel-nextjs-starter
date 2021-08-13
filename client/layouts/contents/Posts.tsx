import React from 'react'
import Post from './post'
function Posts() {
    return (
        <div className="app-posts-item">
            <Post 
                title="لدي سؤال حول استرجاع قيمة المصفوفة إلى حالتها الطبيعية"
                isVirified={true}
                likesCount={254}
                isLiked={true}
                commentsCount={120}
                answerCount={98}
                Tags={['PHP', 'Python', 'Laravel']}
                rateCount={872}
                userAvatar="/img/a3.jpg"
                userFullName="طارق عروي"
                time=""
                userName="tarek.aroui"
            />
            <Post 
                title="إنشاء صفحة باستخدام TDD و برمجتها بواسطة اطار العمل Laravel"
                isVirified={false}
                likesCount={984}
                isLiked={false}
                commentsCount={174}
                answerCount={20}
                Tags={['CSS', 'HTML', 'JavaScript', 'TypeScript', 'C#']}
                rateCount={720}
                userAvatar="/img/a2.jpg"
                userFullName="سالم عبد اللاوي"
                time=""
                userName="salem.abdeloui"
            />
            <Post 
                title="ماهي الطريقة لإنشاء تطبيق أندرويد مع تطبيق iOS"
                isVirified={true}
                likesCount={8}
                commentsCount={2}
                isLiked={true}
                answerCount={3}
                Tags={['C++', 'XML', 'Java', 'Android', 'SSR', 'Matlab', 'Perl']}
                rateCount={108}
                userAvatar="/img/a1.jpg"
                userFullName="أحمد شكراري"
                time=""
                userName="ahmed.chekrari"
            />
            <div className="app-posts-loadmore my-3 d-flex justify-content-center">
                <button className="btn butt-sm butt-primary loadmore-btn">تحميل المزيد...</button>
            </div>
        </div>
    )
}

export default Posts
