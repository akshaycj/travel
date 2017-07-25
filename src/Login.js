import React from 'react';
import {Card,Input,Button} from 'antd';



export default class Login extends React.Component{
  render(){
    return(
      <div style={{width:'30%',margin:'auto',marginTop:50}}>
        <Card title={<div style={{textAlign:'center'}}>Login</div>}>
          <div style={{width:'75%',margin:'auto',height:'auto',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
            <Input placeholder="E-mail" size="large"/>
            <Input placeholder="Password" style={{marginTop:10,marginBottom:10}} size="large"/>
            <Button type="primary" size="large">Login</Button>
          </div>
        </Card>
        <br/>
        <br />
      </div>
    )
  }
}
