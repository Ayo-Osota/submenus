import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'


const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return <div className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
    <div className="sidebar">
      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className="sidebar-links">
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link, index) => {
                  const { icon, label, url } = link;
                  return (
                    <a key={index} href={url}>{icon}{label}</a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  </div>
}

export default Sidebar
