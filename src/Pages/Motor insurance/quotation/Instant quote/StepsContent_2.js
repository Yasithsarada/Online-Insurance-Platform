import { Button, Form, InputNumber, Select, Slider, Space } from 'antd'
import React, { useState } from 'react'

const { Option } = Select;


/*for slider view price*/
const selectBefore = (
    <Select defaultValue="add" style={{ width: 60 }}>
      <Option value="add">+</Option>
      <Option value="minus">-</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue="USD" style={{ width: 60 }}>
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select>
  );

const StepsContent_2 = (props) => {
    const [disabled, setDisabled] = useState(false);

  return (
        <>
            <div className='instant-form_Content'>
  <h2>Get Your Rough Quotation Form Here</h2>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        
        <Form.Item label="Estimation" >
            
           <Slider defaultValue={30} disabled={disabled} className="price-select" />
           <Space direction="vertical">
  
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
   
  </Space>
         
  </Form.Item>
       
  <Form.Item
                name={["user", "Cover"]}
                label="Cover"
              >
                <Select  placeholder="Cover">
                  <Option value="Registred">Full Coverage</Option>
                  <Option value="Unregistered">Third Party</Option>
                </Select>
              </Form.Item>





              <div className='q-calc-btns'>
        <Form.Item >
          <Button  className='btn-q-cal' onClick={props.onClickPrev}>Previous</Button>
        </Form.Item>
        <Form.Item >
          <Button type="primary" className='btn-q-cal' onClick={props.onClickNxt}>Next</Button>
        </Form.Item>

        </div>
      </Form>

      </div>
      </>
  )
}

export default StepsContent_2