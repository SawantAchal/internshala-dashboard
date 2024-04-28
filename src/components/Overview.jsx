import React,{useState, useCallback}  from 'react'
import {Card, Text} from '@shopify/polaris';
import {Button} from '@shopify/polaris';
import {Banner} from '@shopify/polaris';
import {TextField} from '@shopify/polaris';

const Overview = () => {
  const [value, setValue] = useState('1');

  const handleChange = useCallback(
    (newValue: string) => setValue(newValue),
    [],
  );
  
  return (
    <>
    <div style={{paddingTop:30}}>
      <Card>
        <Text as="h2" variant="bodyMd">
          <Text variant="headingLg" as="h5" >Automatic Optimization</Text>
          <div style={{paddingTop:10}}>
            <Text variant="headingSm" as="h6" fontWeight='regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates voluptatum eveniet commodi! Quos ullam praesentium rerum! Sit culpa doloribus animi numquam ab beatae, obcaecati a ratione, dolor sequi rerum?</Text>
          </div>
          <div style={{paddingTop:20}}>
            <Button>Deactive</Button>
          </div>
        </Text>
      </Card>
    </div>

    <div style={{paddingTop:30}}>
      <Card>
        <Text as="h2" variant="bodyMd" >
          <Text variant="headingLg" as="h5">Convert PNG to JPG</Text>
          <div style={{paddingTop:10}}>
            <Text variant="headingSm" as="h6" fontWeight='regular'>Doing this can dramaticallly reduce the size of your images by up to 80%</Text>
          </div>
          <div style={{paddingTop:20}}>
            <Banner title="Transparent elements with in PNG files will autimatically be set to white when converted to JPG." onDismiss={() => {}} />
          </div>
          <div style={{paddingTop:20}}>
            <Button variant="primary">Active</Button>
          </div>
        </Text>
      </Card>
    </div>

    <div style={{paddingTop:30}}>
      <Card>
        <Text as="h2" variant="bodyMd">
          <Text variant="headingLg" as="h5">Advanced image reduction</Text>
          <div style={{paddingTop:10}}>
            <Text variant="headingSm" as="h6" fontWeight='regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates voluptatum eveniet commodi! Quos ullam praesentium rerum! Sit culpa doloribus animi numquam ab beatae, obcaecati a ratione, dolor sequi rerum?</Text>
          </div>
          <div style={{paddingTop:20}}>
            <Banner title="You can RESIZE all images by upgrading your plan." onDismiss={() => {}}/>
          </div>
          <div style={{paddingTop:5}}>
            <TextField label="Resize oversized images to :" placeholder='Do not resize' prefix="Do not resize" type="number" value={value} onChange={handleChange} autoComplete="off"/>
          </div>
          <div style={{paddingTop:30}}>
            <Button variant="primary" >Active</Button>
          </div>
        </Text>
      </Card>
    </div>

    </>
  )
}

export default Overview


