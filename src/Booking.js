import React from 'react';
import {Collapse,DatePicker,InputNumber} from 'antd';

const Panel = Collapse.Panel;
const {RangePicker } = DatePicker;

export default class Booking extends React.Component{
  render(){
    const text="askdjahsdkj"
    return(
      <div style={{marginTop:31}}>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Search" key="1">
          <div style={{display:'flex',flexDirection:'row'}}>
            <div>
              <RangePicker size="large" />
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div>
                  Adults : <InputNumber min={1}  defaultValue={1}  />
                </div>
              <div>
                Children : <InputNumber min={0}  defaultValue={0}  />
              </div>
              </div>
            </div>
          </div>
        </Panel>
        <Panel header="Select Rooms" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="Guest Information" key="3" disabled>
          <p>{text}</p>
        </Panel>
      </Collapse>
      </div>
    )
  }
}
