import React from 'react';
import { Layout, Menu, Icon,Carousel,Card, Col, Row , Button, Dropdown,Steps,Rate,Spin} from 'antd';
import './footer.css';
import FontAwesome from 'react-fontawesome';
const { Header, Sider, Content,Footer } = Layout;

export default class Base extends React.Component{
  render(){
    const menu = (
          <Menu>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="">menu item</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="">menu item</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="">menu item</a>
            </Menu.Item>
          </Menu>
        );
        /*<Dropdown overlay={menu}>
           <a href={"#"+arr[i]} style={{color:"#fff"}} >
            {arr[i]} {<Icon type="down" />}
           </a>
         </Dropdown>*/
    const menuItems=[]
    const arr = ['Home','Rooms','Packages','About','Contact']
    for(let i= 0; i<4;i++){
      menuItems.push(
        <div style={{marginLeft:16}}>
          <a href={"#"+arr[i]} style={{color:"#fff"}} >
           {arr[i]} {/*<Icon type="down" />*/}
          </a>
        </div>
      )
    }

    return(
      <Layout style={{ background:'#fff'}}>

        <Layout>
          <Header style={{ background: '#fff', padding: 0, width:'100%'}}>
            <Row>
              <div>

              </div>
                <Menu theme="lite" mode="horizontal">
                  <div style={{display:'flex',flexFlow:'row',justifyContent:'flex-end',alignContent:'space-between',marginRight:20}}>
                    <div style={{marginRight:10}}>
                      <Icon type="user" style={{fontSize:16}} />
                      <span className="nav-text"> Account</span>
                    </div>
                    <div style={{marginRight:10}}>
                      <Icon type="question-circle" style={{fontSize:16}}/>

                      <span className="nav-text"> Help</span>

                    </div>


                  </div>
                </Menu>



            </Row>

            <Row>

              <div style={{background:'#0792EF',display:'flex',flexDirection:'row', alignItems:'center',maxHeight:48 ,paddingLeft:20}}>

                {menuItems}
              </div>

            </Row>



          </Header>
          {this.props.children}

          </Layout>
{/*          <Layout style={{background: '#2E2C2D'}}>
            <div style={{background:'#e3e3e3',width:'100%',height:1,marginTop:2}}/>
            <Footer>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <h3 style={{marginLeft:15}}>About Us</h3>
                <h3 style={{marginLeft:15}}>Support</h3>
                <h3 style={{marginLeft:15}}>Privacy Policy</h3>

              </div>

            </Footer>
            <div style={{background:'#e3e3e3',width:'100%',height:1,marginTop:2}}/>
            <Footer>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h3><b>Partners</b></h3>
                <div style={{textAlign:'center',marginTop:20}}>
                  Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/<br />
                Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/Lorem Ipsum/
                </div>
              </div>
            </Footer>
            <div style={{background:'#e3e3e3',width:'100%',height:1,marginTop:2}}/>
            <Footer>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginLeft:105}}>
                <div>
                  --SOCIAL--
                </div>
                <div style={{textAlign:'center'}}>
                  --LOGO--
                </div>
                <div>
                  2016-2017 CYNBUS MEDIA LABS
                </div>
              </div>
            </Footer>
          </Layout>*/}

          <footer className="footer-distributed">

      			<div className="footer-left">

      				<h3 className="cursive">Travel<span className="cursivespan">X</span></h3>

      				<p className="footer-links" >
      					<a style={{margin:5}} href="#">Home</a>
      					·
      					<a style={{margin:10}} href="#">Blog</a>
      					·
      					<a style={{margin:10}} href="#">Pricing</a>
      					·
      					<a style={{margin:10}} href="#">About</a>
      					·
      					<a style={{margin:10}} href="#">Faq</a>
      					·
      					<a style={{margin:10}} href="#">Contact</a>
      				</p>


      			</div>

      			<div className="footer-center">

      				<div>
      					<Icon type="environment-o" />
      					<p><span>21 Address 1 </span>Address 2</p>
      				</div>

      				<div>
      					<Icon type="mobile" />
      					<p>+91 1234 56789</p>
      				</div>

      				<div>
      					<Icon type="mail"  />
      					<p><a href="mailto:support@company.com">support@company.com</a></p>
      				</div>

      			</div>

      			<div className="footer-right">

      				<p className="footer-company-about">
      					<span>About the company</span>
      					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
      				</p>

      				<div className="footer-icons">

      					<a href="#"><i class="fa fa-facebook"></i></a>
      					<a href="#"><i class="fa fa-twitter"></i></a>
      					<a href="#"><i class="fa fa-linkedin"></i></a>
      					<a href="#"><i class="fa fa-github"></i></a>

      				</div>
              <p className="footer-company-name">CYNBUS MEDIA LABS &copy; 2017</p>

      			</div>

      		</footer>
          </Layout>
    )
  }
}
