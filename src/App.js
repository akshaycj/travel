import React, { Component } from 'react';
import a1 from './a1.jpg';
import a2 from './a2.jpg';
import a3 from './a3.jpg';
import pic from './400.jpg'
import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import ic from './museums.png';
import Slider from 'react-slick';
import Sliders from 'react-slick';
import './App.css';
import { Layout, Menu, Icon,Carousel,Card, Col, Row , Button, Dropdown,Steps,Rate,Spin} from 'antd';
import Img from 'react-image';
import MediaQuery from 'react-responsive';
import Coverflow from 'react-coverflow';
import AutoResponsive from 'autoresponsive-react';
import {storage, ref,str} from './constants';
import { Link } from 'react-router/lib';

const Step =Steps.Step;

const { Header, Sider, Content,Footer } = Layout;


class App extends Component {

  constructor(props){
    super(props);
    this.styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 'auto',
        height: 250,
        overflowY: 'auto',
        marginTop:20
      },
    };
    this.state = {
      collapsed: true,
      dataList:[],
      data:[],
    };

  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
componentDidMount(){
  this.fetchData();
}
fetchData(){
    var self = this;
    var fileList = [];
    ref.child('data/uid/package').once('value')
      .then(function(snapshot){
        snapshot.forEach(function(child){
          var data={
            desc:'',
            title:'',
            cover:'',
          }
          data.desc = child.val().desc;
          data.title = child.val().title
          data.cover = child.val().cover
          fileList.push(data);
        })
        self.setState({dataList:fileList})

      })
}

getAutoResponsiveProps() {
    return {
      itemMargin: 10,

      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
}
cat(data){
  //this.setState({data:data})
  console.log("asdasdajkj",this.data);
  //http://unsplash.it/1400/400?random
}
  render() {

    const pacList = this.state.dataList;
    const packItems = [];
    for(let i = 0; i<8;i++ ){
      packItems.push(
        <Link to="/package">
          <Card onClick={this.cat.bind(this,pacList[i])} title="Package" bordered={false} style={{textAlign:'center',height:240,width:230}} bodyStyle={{ padding: 1 }}><div class="container"><img class="image" src={card1} width="100%" /><div class="overlay"><div class="text">Description</div></div></div></Card>
        </Link>
      )
    }

    const slidePack =[]

    for(let i=0;i<4;i++){
      slidePack.push(
        <div style={{padding:10,}}>
          <Link to="/pack">
            <Card title="Package" bordered={false} style={{textAlign:'center'}} bodyStyle={{ padding: 1 }}><div class="container"><img class="image" src={card3} width="100%" /><div class="overlay"><div class="text">Description </div></div></div></Card>
          </Link>
        </div>
      )
    }


const items=[];
const l =[a1,a2,a3];

    for(let i =0; i<3;i++){
      items.push(<div><Img src={pic} style={{width:'100%'}} loader={<div style={{padding:10,margin:'auto',width:'100%',textAlign:'center'}}><Spin size="large" /></div>}/></div>)
    }



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    autoplay:true,

    responsive: [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 100000,
      settings:'unslick'
    }
  ]
  };
  /**/

  var settings_slider = {
      dots: true,
      autoplay:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <div >


          <Layout >
            <Content style={{marginTop:31}}>
              <Sliders {...settings_slider}>
                {items}
              </Sliders>
            </Content>
          <Content style={{background: '#fff', minHeight:280 }}>
          <br />

            {/*<div style={{display:'flex',justifyContent:'center'}}>
              <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                {packItems}
              </AutoResponsive>
            </div>*/}
            <Content style={{margin:60,}}>
              <div id="Rooms" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <div><h1>Rooms</h1></div>
                <div style={{background:'#0792EF',width:'5%',height:1,marginTop:2}}/>
              </div>
              <div style={{width:'80%',margin:'auto'}}>

                <MediaQuery minDeviceWidth={726}>
                  <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
                    {packItems}
                  </div>
                </MediaQuery>

                <MediaQuery maxDeviceWidth={726}>

                  <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'space-around',alignItems:'center'}}>
                    {packItems}
                  </div>
                </MediaQuery>

                  <div style={{marginTop:20,textAlign:'center'}}>
                    <Button type="primary" size="large" >Explore</Button>
                  </div>
              </div>
            </Content>
          {/*
            */
}
            {/*<Content>

              <div style={{textAlign:'center'}}>
                <h2>Never been this easy!</h2><br />

              </div>

              <div style={{background: '#ECECEC', padding:20}}>
                <Card style={{width:'auto'}}>


                    <MediaQuery minDeviceWidth={526}>
                      <Steps size='default'>
                        <Step status="finish" title="Select your package" icon={<Icon type="environment-o" />} />
                        <Step status="finish" title="Fill up your deatils" icon={<Icon type="solution" />} />
                        <Step status="finish" title="Pay" icon={<Icon type="credit-card" />} />
                        <Step status="finish" title="Done" icon={<Icon type="smile-o" />} />
                      </Steps><br />
                    </MediaQuery>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    <MediaQuery maxDeviceWidth={526}>

                        <Steps size='default' direction="vertical">
                          <Step status="finish" title="Select your package" icon={<Icon type="environment-o" />} />
                          <Step status="finish" title="Fill up your deatils" icon={<Icon type="solution" />} />
                          <Step status="finish" title="Pay" icon={<Icon type="credit-card" />} />
                          <Step status="finish" title="Done" icon={<Icon type="smile-o" />} />
                        </Steps><br />

                    </MediaQuery>
                    </div>


                </Card>


              </div>
            </Content>*/}
            <br />
            <div id="Packages" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <div><h2>Packages</h2></div>
              <div style={{background:'#0792EF',width:'5%',height:1,marginTop:2}}/>
            </div>
            <br />



            <div style={{ background: '#2E2C2D', padding: '30px'  }}>

              <div style={{marginTop:30}}>

              </div>
              <Slider {...settings} style={{margin:30,}}>

                {slidePack}
              </Slider>
              <br/>
              <br/>
              <div style={{textAlign:'center'}}>
              <Button type="primary">View All</Button>

              </div>
            </div>

            <br />


          {/*<div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <div><h2>Destination</h2></div>
              <div style={{background:'#0792EF',width:'5%',height:1,marginTop:2}}/>
            </div>
            <br />


          </div>*/}

          </Content>

          <Content>

          </Content>
          <br />

          <br/>


          </Layout>




      </div>
    );
  }
}

export default App;
