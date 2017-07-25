import React, { Component } from 'react';
import { Steps, Button, message, Input ,Row, Col,Select,DatePicker,InputNumber} from 'antd';
import './App.css';
import MediaQuery from 'react-responsive';


const Step = Steps.Step;
var Option = Select.Option;
var option = Select.Option;
const {RangePicker } = DatePicker;


const steps = [{
  title: 'Search',
  desc: 'Description about this',
  content: 'First-content',

}, {
  title: 'Select Rooms',
  desc: 'Description about this',
  content: 'Second-content',

}, {
  title: 'Information',
  desc: 'Description about this',
  content: 'Last-content',

}];

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      direction:'horizontal',
    };
  }

  choice(current){
    var names =['First Name','Last Name','Email','Confirm Email','Mobile','Confirm Mobile'];

    const list=[];

    switch (current) {
      case 0:
        for(let i=0;i<names.length;i++){
          list.push(
            <Col span={12}>
              <Input size="large" placeholder={names[i]} style={{width:200,marginTop:10}}/>
            </Col>
          )
        }


        return(


                    <div style={{textAlign:'center'}}>
                      <Row>
                        {list}
                      </Row>
                    </div>


          )
          break;
        case 1:
          return(
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',width:600,marginBottom:5}}>
              <Col >
                <Row>
                  <Select placeholder="Card type" style={{width:'100%'}}>
                    <Option value="debit">Debit</Option>
                    <Option value="credit">Credit</Option>
                  </Select>
                </Row>
                <br />
                <Row>
                  <Input size="large" placeholder="Name on Card" style={{width:300}} />
                </Row>
                <br />
                <Row>
                  <Input size="large" placeholder="Card number" style={{width:300}} />
                </Row>
                <br />
                <Row>
                  <div>
                    <Row gutter={48} type="flex" justify="space-around">
                      <Col span={12}>
                        <Input size="large" placeholder="Expiry Date(MM/YY)" style={{width:125}} />
                      </Col>
                      <Col span={12}>
                        <Input size="large" placeholder="CVV" style={{width:125}} />
                      </Col>
                    </Row>
                  </div>
                </Row>
              </Col>
            </div>
          )
          break;
        case 2:
          return(
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',width:600,marginBottom:5}}>
              <Col>
                <Row>
                  <Select  placeholder="Select Country" style={{width:'100%'}}>
                    <option value="india">India</option>
                    <option value="Other">Other</option>
                  </Select>
                </Row>
                <Row gutter={48}>
                  <Col span={12}>
                    <Input size="large" placeholder="Street Line 1" style={{width:200,marginTop:10}}/>
                  </Col>
                  <Col span={12}>
                    <Input size="large" placeholder="Street Line 2" style={{width:200,marginTop:10}}/>
                  </Col>
                </Row>
                <Row gutter={48}>
                  <Col span={12}>
                    <Input size="large" placeholder="City" style={{width:200,marginTop:10}}/>
                  </Col>
                  <Col span={12}>
                    <Row gutter={48}>
                      <Col span={12}>
                        <Input size="large" placeholder="State" style={{width:80,marginTop:10}}/>
                      </Col>
                      <Col span={12}>
                        <Input size="large" placeholder="Pin Code" style={{width:80,marginTop:10}}/>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </div>
          )


    }/*
    <div style={{display:'flex', justifyContent:'space-between', flexFlow:'row wrap'}}>


      <Input size="large" placeholder="First Name" style={{width:200}}/>
      <Input size="large" placeholder="Last Name" style={{width:200}}/>
      <Input size="large" placeholder="Email" style={{width:200}}/>
      <Input size="large" placeholder="Confirm Email" style={{width:200}}/>
      <Input size="large" placeholder="Mobile Number" style={{width:200}}/>
    </div> */
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  changeScreen(){
    this.setState({direction:'vertical'})
  }

  render() {
    const { current } = this.state;

    return (
      <div style={{width:'100%',marginTop:31,background:'#fff',paddingTop:20}}>
        <div style={{width:600,margin:'auto'}}>
          <MediaQuery minDeviceWidth={620}>


          </MediaQuery>
          <MediaQuery maxDeviceWidth={620}>

            <div>
              {this.changeScreen.bind(this)}
            </div>
          </MediaQuery>

          <Steps current={current} direction={this.state.direction}>
            {steps.map(item => <Step key={item.title} title={item.title} description={item.desc}>

            </Step>)}
          </Steps>
          <div className="steps-content">{
              this.choice(this.state.current)
            }</div>
          <div className="steps-action">
            {
              this.state.current < steps.length - 1
              &&
              <Button type="primary" onClick={() => this.next()}>Next</Button>
            }
            {
              this.state.current === steps.length - 1
              &&
              <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
            }
            {
              this.state.current > 0
              &&
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            }
          </div>
        </div>
      </div>
    );
  }
}
