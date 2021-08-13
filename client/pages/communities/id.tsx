import CommunityCover from '@/layouts/contents/CommunityCover'
import Posts from '@/layouts/contents/Posts'
import SubNav from '@/layouts/contents/SubNav'
import React from 'react'

function Id() {
    return (
        <div className="app-community p-3">
            <CommunityCover />
            <SubNav />
            <Posts />
        </div>
    )
}

export default Id
