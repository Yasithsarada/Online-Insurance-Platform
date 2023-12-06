import React, { useState } from 'react'
import {  message,   Steps } from 'antd';
import './MotorInsuranceCalculator.css'


import StepsContent_1 from './StepsContent_1';
import StepsContent_2 from './StepsContent_2';
import StepsContent_3 from './StepsContent_3';

const { Step } = Steps;






const MotorInsuranceCalculator = () => {
  
  // const [disabled, setDisabled] = useState(false);
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent(current + 1);
  };

  
  const steps = [
    {
      title: "First",
      content: <StepsContent_1 onClick={() => next()} />,
    },
    {
      title: "Second",
      content: (
        <StepsContent_2
          onClickPrev={() => prev()}
          onClickNxt={() => {
            next();
            message.success("Quotation Calcualed Successfully!");
          }}
        />
      ),
    },
    {
      title: "Last",
      content: (
        <StepsContent_3 onClickPrev={() => prev()} installment="150,000.00" />
      ),
    },
  ];

  const prev = () => {
    setCurrent(current - 1);
  };
  
  return (
    <>
    <div className='steps' >
{/* 
      <Steps current={1}  >
    <Step title="Finished" description={} />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps> */}



<Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      {/* <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}

    </div>
      
    </>
  );
}

export default MotorInsuranceCalculator