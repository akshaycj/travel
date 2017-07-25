import React from 'react';
import {Spin, Row, Col, Anchor,Table} from 'antd';
import Img from 'react-image';
import BookNow from './BookNow';
import App from './App';
import pic from './400.jpg'
import Responsive from 'react-responsive-decorator';
var Carousel = require('react-responsive-carousel').Carousel;


 class SinglePack extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dir:'row',
      cent:''
    }
  }
  componentDidMount(){
    this.props.media({ maxWidth: 768 }, () => {
    this.setState({
      dir:'column',cent:'center'
    })
  });
  this.props.media({ minWidth: 768 }, () => {
  this.setState({
    dir:'row',cent:''
  })
});
  }


  render(){

    const items=[];
        for(let i =0; i<3;i++){
          items.push(<div><Img src={pic} style={{width:'100%'}} loader={<div style={{padding:10,margin:'auto',width:'100%',textAlign:'center'}}><Spin size="large" /></div>}/></div>)
        }

  const columns = [
    { title: '', dataIndex: 'name', key: 'name' },

  ];

  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },

    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: 'Time',
        name: 'event',
      });
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };
  const data = [];
  for (let i = 1; i < 4; ++i) {
    data.push({
      key: i,
      name: 'Day '+i,

    });
  }




    return(
      <div style={{marginTop:31,background: '#fff',width:'auto',height:'auto'}}>

        <div style={{display:'flex',flexDirection:this.state.dir,alignItems:this.state.cent }}>
          <div style={{maxWidth:1100}}>
            <Carousel>
              {items}
            </Carousel>
            <div style={{display:'flex',flexDirection:this.state.dir,}}>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minWidth:150}}>
                  <div><h1>Details:</h1></div>
                  <div style={{background:'#0792EF',width:'50%',height:1,marginTop:2}} />
              </div>
              <div style={{margin:10,display:'flex',flexDirection:'column',}}>
                  <h2>Title 1</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <br />
                  <h2>Title 2</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <br />
                  <br />
              </div>
            </div>

            <div style={{display:'flex',flexDirection:this.state.dir,}}>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minWidth:150}}>
                  <div><h1>Itenary:</h1></div>
                  <div style={{background:'#0792EF',width:'50%',height:1,marginTop:2}} />
              </div>
              <div style={{margin:10,width:'100%'}}>
                <Table
                    className="components-table-demo-nested"
                    columns={columns}
                    expandedRowRender={expandedRowRender}
                    dataSource={data}
                  />
              </div>
            </div>

          </div>

          <div style={{background:'#fff'}}>
            <BookNow  />
          </div>
        </div>



    </div>
    )
  }
}
export default Responsive(SinglePack);
