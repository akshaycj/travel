import React from 'react';
import {Card,Table} from 'antd';


export default class Home extends React.Component{
  render(){
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
    }, {
      title: 'Dates',
      dataIndex: 'dates',
      key: 'dates',
    },{
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },{
      title: 'Paid',
      dataIndex: 'paid',
      key: 'paid',
    },{
      title: 'Mode',
      dataIndex: 'mode',
      key: 'mode',
    }
  ];

    const datasource=[];
    for(let i=0;i<5;i++){
      datasource.push(
        {
          key:i,
          name:'Dummy',
          room:'Super Duelex',
          dates:'26/7/2017 - 29/7/2017',
          mobile:'987654321',
          paid:'2300',
          mode:'Cash',
        },
      )
    }
    const items =[];
    for(let i =0;i<4; i++){
      items.push(
        <Card style={{width:'100%',margin:10}}>
          <div>

          </div>
        </Card>
      )
    }

    return(
      <div style={{marginTop:50,background:'#fff'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',textAlign:'center'}}>
          <h2>Room Bookings</h2>
          <div style={{background:'#0792EF',width:'5%',height:1,marginTop:2}}/>
        </div>
        <br />

        <div style={{width:'60%',margin:'auto'}}>
          <Table dataSource={datasource} columns={columns} style={{margin:5}} />
        </div>
      </div>
    )
  }
}
