import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Overview from '../components/Overview'
import ALTText from '../components/ALTText'
import Filename from '../components/Filename'
import BrokenLinks from '../components/BrokenLinks'
import SeoMetadata from '../components/SeoMetadata'
import BillingInfo from '../components/BillingInfo'
import Language from '../components/Language'
import Navbar from '../components/Navbar'

const Homepage = () => {
  const [selectedComponent, setSelectedComponent] = useState('Overview');
  
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Overview':
        return <Overview/>;
      case 'ALT Text':
        return <ALTText />;
      case 'Filename':
        return <Filename />;
      case 'Broken Links':
        return <BrokenLinks />;
      case 'SEO Metadata':
        return <SeoMetadata/>;
      case 'Billing Information':
        return <BillingInfo />;
      case 'Language':
        return <Language />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="md:flex h-screen hidden ">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white w-64 min-h-screen hidden md:block">
          <Sidebar onSelect={setSelectedComponent} />
        </div>
        {/* Main Content */}
        <div className="flex-1 p-6">
          {renderComponent()}
        </div>
      </div>
      
      {/* mobile */}
      <div className="block md:hidden">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white w-full z-50 h-28 overflow-x-auto text-2xl">
          <Navbar onSelect={setSelectedComponent} />
        </div>
        {/* Main Content */}
        <div className="mt-20 ">
          {renderComponent()}
        </div>
      </div>
    </>
  )
}

export default Homepage