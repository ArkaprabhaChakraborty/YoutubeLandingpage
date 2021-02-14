import React from 'react'
import './SidebarRow.css'
function SidebarRow({selected,title,Icon}) {
    return (
        <div className={`sidebar_row ${selected && "selected"}`}>
            <Icon className={`sidebarrow_icon ${selected && "selected"}`}/>
            <h2 className={`sidebarrow_text ${selected && "selected"}`}>{title}</h2>
        </div>
    )
}

export default SidebarRow
