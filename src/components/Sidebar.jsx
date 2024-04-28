import React from 'react'


const Sidebar = ({onSelect}) => {

    const handleTabClick = (component) => {
        onSelect(component);
      };

  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen mt-7 text-xl fixed">
      <ul>
        <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md " onClick={() => handleTabClick('Overview')}>
          Overview
        </li>
        <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md " onClick={() => handleTabClick('ALT Text')}>
          ALT Text
        </li>
        <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md " onClick={() => handleTabClick('Filename')}>
          Filename
        </li>
        <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md " onClick={() => handleTabClick('Broken Links')}>
          Broken Links
        </li>
        <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md " onClick={() => handleTabClick('SEO Metadata')}>
          SEO Metadata
        </li>
        <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md " onClick={() => handleTabClick('Billing Information')}>
          Billing Information
        </li>
        <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md " onClick={() => handleTabClick('Language')}>
          Language
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar