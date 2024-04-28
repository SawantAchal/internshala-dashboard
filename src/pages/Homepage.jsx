import { Layout, Page } from '@shopify/polaris'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Overview from '../components/Overview'
import ALTText from '../components/ALTText'
import Filename from '../components/Filename'
import BrokenLinks from '../components/BrokenLinks'
import SeoMetadata from '../components/SeoMetadata'
import BillingInfo from '../components/BillingInfo'
import Language from '../components/Language'

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
    // <Page>
    //   <Layout>
    //     <Layout.Section>
    //       <Sidebar/>
    //     </Layout.Section>
    //     <Layout.Section>
    //       <div className="p-6">
    //         <h1>Welcome </h1>
    //         <p>This is the main content area of the home page.</p>
    //       </div>
    //     </Layout.Section>
    //   </Layout>
    // </Page>

    <div className="flex h-screen ">
    {/* Sidebar */}
    <div className="bg-gray-800 text-white w-64 min-h-screen hidden md:block">
      <Sidebar onSelect={setSelectedComponent} />
    </div>

    {/* Main Content */}
    <div className="flex-1 p-6">
      {renderComponent()}
    </div>
  </div>
  )
}

export default Homepage