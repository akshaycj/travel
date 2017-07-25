import React from 'react';
import {Spin, Row, Col, Anchor} from 'antd';
import Img from 'react-image';
import BookNow from './BookNow';
import App from './App';
import pic from './400.jpg'
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';
import Responsive from 'react-responsive-decorator';

var Carousel = require('react-responsive-carousel').Carousel;


 class Single extends React.Component{
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
    dir:'row',cent:''})
    });
  }
    //console.log("active",App.state.data);

    getAutoResponsiveProps() {
        return {
          itemMargin: 10,

          itemClassName: 'item',
          gridWidth: 100,
          transitionDuration: '.5'
        };
    }
    changeDiv(){
      this.setState({dir:'column',cent:'center'});
      console.log("esgffdajhg");
    }


  render(){

    const items=[];
        for(let i =0; i<3;i++){
          items.push(<div><Img src={pic} style={{width:'100%'}} loader={<div style={{padding:10,margin:'auto',width:'100%',textAlign:'center'}}><Spin size="large" /></div>}/></div>)
        }

    var settings_slider = {
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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
          </div>

          <div style={{background:'#fff'}}>
            <BookNow  />
          </div>
        </div>

        {/*
          <Row gutter={1}>
            <Col span={18} >
              <div style={{marginLeft:20}}>
                <div style={{height:'auto'}}>
                  <Slider {...settings_slider}>
                    {items}
                  </Slider>
                </div>

                <div style={{marginTop:20}}>
                  <Row>
                    <Col span={18}>
                      <Col span={4}>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                          <div><h1>Details:</h1></div>
                          <div style={{background:'#0792EF',width:'50%',height:1,marginTop:2}}/>
                        </div>
                      </Col>
                      <Col span={8} style={{marginLeft:40}}>
                        <div style={{marginTop:10,display:'flex',flexDirection:'column',}}>
                          <h2>Title 1</h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <br />
                          <h2>Title 2</h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </div>
                      </Col>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div style={{display:'flex',justifyContent:'flex-end',marginRight:20}}>
                <Anchor affix={false}>
                  <BookNow />
                </Anchor>
              </div>
            </Col>
          </Row>
          */}


    </div>
    )
  }
}
export default Responsive(Single);
