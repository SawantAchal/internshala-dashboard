import React from 'react'

const Navbar = ({onSelect}) => {
  const handleTabClick = (component) => {
    onSelect(component);
  };

  return (
    <>
      <nav className='flex flex-row h-12'>
        <ul  className='flex flex-row'>
          <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md hover:h-24" onClick={() => handleTabClick('Overview')}>
            Overview
          </li>
          <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md hover:h-24" onClick={() => handleTabClick('ALT Text')}>
            ALT Text
          </li>
          <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md hover:h-24" onClick={() => handleTabClick('Filename')}>
            Filename
          </li>
          <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md hover:h-24" onClick={() => handleTabClick('Broken Links')}>
            Broken Links
          </li>
          <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md hover:h-24" onClick={() => handleTabClick('SEO Metadata')}>
            SEO Metadata
          </li>
          <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md hover:h-24" onClick={() => handleTabClick('Billing Information')}>
            Billing Information
          </li>
          <li className="py-4 px-6 cursor-pointer hover:bg-gray-600 hover:rounded-md hover:h-24" onClick={() => handleTabClick('Language')}>
            Language
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar