import React from 'react'
import 'antd/dist/antd.min.css'
import { Button, Form, Input, InputNumber, Row, Select } from 'antd';
import './MotorInsurQuotaionRequest.css'
import { Col } from 'react-bootstrap';
const { Option } = Select;



const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const MotorInsurQuotaionRequest = () => {

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="yy">
      <div className="data-collection-part">
      <h2>Get Your Full Quotation</h2>
        <Row>
          <Col>
            <Form
              {...layout}
              layout="vertical"
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
              className="form form1"
            >
              <div id="name-area">
                <Select placeholder="Mr">
                  <Option value="Mr">Mr</Option>
                  <Option value="Mrs">Mrs</Option>
                  <Option value="Ms">Ms</Option>
                </Select>

                <Form.Item name={["user", "firstName"]} label="First Name">
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name={["user", "name"]}
                  label="Last Name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </div>

              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input placeholder="e-mail" />
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
                name={["user", "age"]}
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
              <Form.Item name={["user", "model"]} label="Model">
                <Input placeholder="--select  a model--" />
              </Form.Item>
            </Form>
          </Col>
          <Col>
            <Form
              {...layout}
              layout="vertical"
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
              className="form"
            >
              <Form.Item
                name={["user", "name"]}
                label="Contact No"
                rules={[{ required: true }]}
              >
                <Input placeholder="Contact number" />
              </Form.Item>
              <Form.Item
                name={["user", "Status"]}
                label="Status"
              >
                <Select  placeholder="Status">
                  <Option value="Registred">Registred</Option>
                  <Option value="Unregistered">Unregistered</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={["user", "Condition"]}
                label="Condition"
              >
                <Select  placeholder="Conditionn">
                  <Option value="Registred">Brand New</Option>
                  <Option value="Unregistered">Reconditioned</Option>
                </Select>
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

              <Form.Item
                name={["user", "Usage"]}
                label="Usage"
              >
                <Select  placeholder="Usage">
                  <Option value="Private">Private</Option>
                  <Option value="Hiring">Hiring</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        
      </div>
    </div>
  );
}

export default MotorInsurQuotaionRequest