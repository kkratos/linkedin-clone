import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                <Avatar />
                <h2>kamal patel</h2>
                <h4>kamal.patel@nyu.edu</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viwed you</p>
                    <p className="sidebar__statNumber">100</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viwed you</p>
                    <p className="sidebar__statNumber">250</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software')}
            </div>
        </div>
    )
}

export default Sidebar
