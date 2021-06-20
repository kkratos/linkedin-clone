import React from 'react'
import './Widget.css'

import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widget() {

    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widget">
            <div className="widget__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Reactjs is awesome", "This website it built with reactjs")}
            {newsArticle("teasla hits new high", "Cars & Auto - 300")}
            {newsArticle("EA server hacked", "gaming industry")}
        </div>
    )
}

export default Widget
