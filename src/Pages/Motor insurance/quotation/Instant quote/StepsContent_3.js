import { Button, Form, Typography } from 'antd'

import React from 'react'
const { Text } = Typography;

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};


const StepsContent_3 = (props) => {
  return (
    <>
      <div className='instant-form_Content'>
  <h2>Get Your Rough Quotation Form Here</h2>


       
  <Form {...formItemLayout}>

<Form.Item label="Make" validateStatus="warning">
<Text strong>Mercedes </Text>

</Form.Item>

<Form.Item label="model" validateStatus="warning">
<Text strong>S 600 </Text>

</Form.Item>

<Form.Item label="Valivation" validateStatus="warning">
<Text strong>20,400,000 LKR </Text>

</Form.Item>

<Form.Item label="Coverage" validateStatus="warning">
<Text strong>Full  </Text>

</Form.Item>

<Form.Item >


<Title level={3}> Rough Annual Installment : <Text type="success" >{props.installment} LKR</Text> </Title>



</Form.Item>

              <div className='q-calc-btns'>
        <Form.Item >
          <Button  className='btn-q-cal' onClick={props.onClickPrev}>Previous</Button>
        </Form.Item>
       
        </div>
      </Form>

      </div>
    </>
  )
}

export default StepsContent_3