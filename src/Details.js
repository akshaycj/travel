import React, { Component } from 'react';
import { Steps, Button, message,Icon, Input ,Row, Col,Select,DatePicker,InputNumber,Card,Radio} from 'antd';
import './App.css';
import MediaQuery from 'react-responsive';


const Step = Steps.Step;
var Option = Select.Option;
var option = Select.Option;
const {RangePicker } = DatePicker;
const {TextArea} = Input;
const RadioGroup = Radio.Group;

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
      from:'',
      to:'',
      adults:'',
      child:'',
      name:'',
      email:'',
      mobile:'',
      request:'',
      pay:'Card',
      cost:''
    };

  }

  dateChange(dates,dateStrings){
    this.setState({from:dateStrings[0],to:dateStrings[1]},function(data){
      console.log('sad',this.state.from);
    })
  }
  adultChange(value){
    this.setState({adult:value})
  }
  childChange(value){
    this.setState({child:value})
  }
  onSelect(){
    console.log("helloji");
    var p =this.state.current;
    p++;
    this.setState({current:p})

  }


  choice(current){
    var names =['First Name','Last Name','Email','Confirm Email','Mobile','Confirm Mobile'];

    const list=[];

    switch (current) {
      case 0:

        return(

          <div style={{display:'flex',flexDirection:'column',padding:15,justifyContent:'center',alignItems:'center'}}>
            <RangePicker size="large" style={{maxWidth:400}} format="DD-MM-YYYY" onChange={this.dateChange.bind(this)}/>
            <div style={{display:'flex',flexDirection:'row',marginTop:15}}>
              <div style={{textAlign:'center',marginRight:5}}>
                Adults : <InputNumber min={1}  defaultValue={1}  onChange={this.adultChange.bind(this)}/>
              </div>
            <div style={{textAlign:'center',marginLeft:5}} >
              Children : <InputNumber min={0}  defaultValue={0}  onChange={this.childChange.bind(this)}/>
            </div>
            </div>

          </div>


          )
          break;
        case 1:
        let rooms=[];
        for(let i=0;i<3;i++){
          rooms.push(
            <Card title="Super" style={{margin:5}} extra={i==1?<Icon type="close-circle" style={{ fontSize: '16px',color:'red' }} />:<Icon type="check-circle" style={{ fontSize: '16px',color:'green' }} />}>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div>
                  Capacity: {i}
                </div>
                <div>
                  Price: Rs.{i+i+i}/night
                </div>
                <div>
                  <Button type="primary" disabled={i==1?true:false} onClick={this.onSelect.bind(this)}>Book now</Button>
                </div>
              </div>
            </Card>
          )
        }
          return(
            <div style={{display:'flex', flexDirection:'column',margin:5}}>
              {rooms}
            </div>
          )
          break;
        case 2:

          return(
            <div style={{textAlign:'center'}}>
              <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around',margin:5}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                  <Input placeholder="Name" size="large" style={{marginTop:5}}/>
                  <div style={{display:'flex',flexDirection:'row',marginTop:5}}>
                    <Input placeholder="E-mail" size="large" />
                    <Input placeholder="Mobile" size="large" />
                  </div>
                  <Input placeholder="Special request if any" size="large" style={{marginTop:5}}/>
                  <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',margin:5,}}>
                    <RadioGroup style={{display:'flex',flexDirection:'column'}} defaultValue='now'>
                      <Radio value='now'>Pay Now</Radio>
                      <Radio value='later'>Pay Later</Radio>
                    </RadioGroup>
                  </div>
                </div>
                <div className="steps-last">
                  <div style={{textAlign:'center',padding:10}}>
                    Grand total:
                  </div>
                </div>
              </div>
              <Button type="primary" size="large">Book Now</Button>
            </div>
          )


    }
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
              <Button type="primary" onClick={() => this.next()}>{this.state.current==0?<div>Check Availability</div>:<div>Next</div>}</Button>
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
