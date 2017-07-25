import React, { Component } from 'react';
import { Card, DatePicker,LocaleProvider,locales,InputNumber,Form,Table,Button,} from 'antd';
import moment from 'moment';
import AutoScale from 'react-auto-scale';
import { Link } from 'react-router/lib';

const RangePicker = DatePicker.RangePicker;
const FormItem = Form.Item;

export default class BookNow extends Component{
  constructor(props){
    super(props);
    this.state={
      adult:0,
      chlid:0,
      price:this.props.price,
      cost:0,
      date:'',
    };


  }

  adultChange(value){

    const cost = this.state.price*value;
    this.setState({adult:value,cost:this.state.cost+cost});

  }
  childChange(value){
    const cost = (this.state.price*value)/2;
    this.setState({child:value,cost:this.state.cost+cost});
  }
  onChange(date, dateString) {
  console.log(date, dateString);
}

  render(){

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const columns = [{
      dataIndex: 'name',
    }, {
      className: 'column-money',
      dataIndex: 'money',
    }];
    const data = [{
        key: '1',
        name: 'Adults',
        money: this.state.adult,

      }, {
        key: '2',
        name: 'Children',
        money: this.state.child,

      }, {
        key: '3',
        name: 'Total Amount',
        money: this.state.cost,

      }];

    return(
      <div style={{width:300,height:300}}>
        <AutoScale maxScale={2}>
          <Card style={{width:300,margin:'auto'}}>

            <Form>
              <FormItem>
                <div style={{background:'#2d2d2d',width:'100%',textAlign:'center'}}>
                  <h2 style={{color:'white'}}>-BOOKING-</h2>
                </div>
              </FormItem>
              <FormItem
                   >
                   <RangePicker locale={obj} onChange={this.onChange.bind(this)} />
             </FormItem>
             <FormItem
                  {...formItemLayout}
                  label="Adults">
                  <InputNumber min={1}  defaultValue={1} onChange={this.adultChange.bind(this)} />

            </FormItem>
            <FormItem
              {...formItemLayout}

              label="Children"
              >
                <InputNumber min={0}  defaultValue={0} onChange={this.childChange.bind(this)}/>
            </FormItem>
            <FormItem

              >
              <Table
                showHeader={false}
                columns={columns}
               dataSource={data}
               pagination={false}

             />
            </FormItem >
            <FormItem >
              <Link to='/details'><Button type="primary" size="large" style={{width:'100%'}}>Book Now</Button></Link>

            </FormItem>
            <FormItem>
              <Button  style={{width:'100%'}} size="small">Add to Wish List</Button>
            </FormItem>



            </Form>
            <br />



          </Card>
        </AutoScale>
      </div>
    );
  }
}


var obj={
  "lang": {
    "placeholder": "Select date",
    "rangePlaceholder": [
      "Start date",
      "End date"
    ],

    "today": "Today",
    "now": "Now",
    "backToToday": "Back to today",
    "ok": "Ok",
    "clear": "Clear",
    "month": "Month",
    "year": "Year",
    "timeSelect": "Select time",
    "dateSelect": "Select date",
    "monthSelect": "Choose a month",
    "yearSelect": "Choose a year",
    "decadeSelect": "Choose a decade",
    "yearFormat": "YYYY",
    "dateFormat": "M/D/YYYY",
    "dayFormat": "D",
    "dateTimeFormat": "M/D/YYYY HH:mm:ss",
    "monthFormat": "MMMM",
    "monthBeforeYear": true,
    "previousMonth": "Previous month (PageUp)",
    "nextMonth": "Next month (PageDown)",
    "previousYear": "Last year (Control + left)",
    "nextYear": "Next year (Control + right)",
    "previousDecade": "Last decade",
    "nextDecade": "Next decade",
    "previousCentury": "Last century",
    "nextCentury": "Next century"
  },
  "timePickerLocale": {
    "placeholder": "Select time"
  }
}
