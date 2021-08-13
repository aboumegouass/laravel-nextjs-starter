import React from 'react'
import { Code, Users } from 'react-feather'
import MostThemQuestions from './MostThemQuestions'
import MostThemUsers from './MostThemUsers'

function LeftSidebar() {
    return (
        <div className="app-left-sidebar-inner position-sticky" style={{ top: 73 }}>
            <div className="aside-most-them-users">
                <div className="aside-header">
                    <h3 className="title"><Users /> الأعضاء النشطين</h3>
                </div>
            </div>
            <MostThemUsers />
            <div className="aside-most-them-users">
                <div className="aside-header">
                    <h3 className="title"><Code /> الأسئلة الأكثر شيوعا</h3>
                </div>
            </div>
            <MostThemQuestions />
        </div>
    )
}

export default LeftSidebar
