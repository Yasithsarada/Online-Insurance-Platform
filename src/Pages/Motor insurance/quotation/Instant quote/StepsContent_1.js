import React, { useState } from 'react'
import { Button, Col, Form, InputNumber, message, Radio, Row, Select, Space, Steps } from 'antd';
import './MotorInsuranceCalculator.css'

import { Slider, Switch } from 'antd';
import SignPage from '../../../Signin-signup/SignPage';
const { Option } = Select;

const { Step } = Steps;


const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

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

const StepsContent_1 = (props) => {

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
        <Form.Item label="Category" >
        <Radio.Group onChange={onChange} >
      <Radio value={1}>Car</Radio>
      <Radio value={2}>Bicycle / Threewheel</Radio>
      <Radio value={3}>Trucks</Radio>
      <Radio value={4}>Industrial Vehicles</Radio>
    </Radio.Group>
        </Form.Item>
        
        <Form.Item name={["user", "make"]} label="Make">
          <Select
            showSearch
            placeholder="Select a manufacturer"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="Toyota">Toyota</Option>
            <Option value="Honda">Honda</Option>
            <Option value="Land Rover">Land Rover</Option>
            <Option value="Land Rover">Ducati</Option>
            <Option value="Land Rover">Mercedes</Option>
            <Option value="Land Rover">Lamborghini</Option>
            <Option value="Land Rover">Skoda</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name={["user", "Manufctured year"]}
          label="Manufctured year"
          width="120"
          rules={[{ type: "number", min: 2010, max: 2022 }]}
        >
          <InputNumber
            style={{
              width: "40%",
            }}
          />
        </Form.Item>

        <Form.Item label="Estimation" >
            
           <Slider defaultValue={30} disabled={disabled} className="price-select" />
           <Space direction="vertical">
  
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
   
  </Space>
         
          
        </Form.Item>
        <div className='q-calc-btns'>
        <Form.Item >
          <Button  className='btn-q-cal' onClick={props.onClick}>Reset</Button>
        </Form.Item>
        <Form.Item >
          <Button type="primary" className='btn-q-cal' onClick={props.onClick}>Next</Button>
        </Form.Item>

        </div>
      </Form>
      </div>
    </>
  )
}

export default StepsContent_1