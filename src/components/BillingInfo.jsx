import React from 'react'
import {Card, Text} from '@shopify/polaris';
import { Button } from '@shopify/polaris';

const BillingInfo = () => {
  return (
    <div className='pt-10 md:pt-0 '>
      <Card>
        <Text as="h2" variant="bodyMd">
          <Text variant="heading2xl" as="h3">Subscription plan</Text>
          <Text>You can downgrade or upgrade your subscription plan to suit your needs.</Text>
          <div style={{paddingTop:30}}>
            <Text >your current plan:</Text>
            <Text variant="headingMd" as="h6">Pay as you go</Text>
          </div>
          <div style={{paddingTop:30}}>
            <Text>Free optimization remaining:</Text>
            <Text variant="headingMd" as="h6">0</Text>
          </div>
          <div style={{paddingTop:30}}>
            <Text>AI credits remaining:</Text>
            <Text variant="headingMd" as="h6">10</Text>
          </div>
          <div style={{paddingTop:30}}>
            <Text>Next reset:</Text>
            <Text variant="headingMd" as="h6">2024-05-05</Text>
          </div>
          <div style={{paddingTop:30}}>
            <Text>Extra image price:</Text>
            <Text variant="headingMd" as="h6">0.03 USD</Text>
          </div>
          <div style={{paddingTop:30}}>
            <Text>Charges this month:</Text>
            <Text variant="headingMd" as="h6">0 USD / 0 Images optimized</Text>
          </div>
          <div style={{color: '#bf0711' , paddingTop:'20px' , gap:3} }>
            <span style={{paddingRight:'6px'}}><Button variant="primary">Upgarde</Button></span>
            <span style={{paddingRight:'9px'}}><Button>Increase monthly cap</Button></span>
            <span style={{paddingRight:'6px'}}><Button variant="monochromePlain" disabled>Cancel subscription </Button></span>
          </div>
        </Text>
      </Card>
    </div>
  )
}

export default BillingInfo