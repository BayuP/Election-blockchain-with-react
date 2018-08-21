import React,{ Component } from 'react';
import {Layout, Button, Icon} from 'antd';
import {Link} from 'react-router-dom'
import Footer from './FooterMenu';
import BackgroundImage from '../images/landingpage3.jpeg'
import '../App.css'
const {Content} = Layout;

class LandingPage extends Component{
  render(){
    return(
      <Layout style={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: '100% 100%',
        }}>
        <Content style={{
          minHeight: '83vh',
        }}>
          <div style={{
             textAlign:'center',
          }}>
          <h2 style={{
            bottom:'250px',
            left: '70px',
            color:'white',
            position: 'absolute'
          }}>
            Blockchain tech in Election System
          </h2>
          <h3 style={{
            color:'white',
            bottom:'230px',
            left: '80px',
            position: 'absolute'
          }}>
            Election system powered by Ethereum blockchain,
          </h3>
          <h3 style={{
            color:'white',
            bottom:'215px',
            left: '80px',
            position: 'absolute'
          }}>
            makes vote imutable, transparent, and distributed in network
          </h3>
            <Link to="/home">
              <Button style={{
               top: '275px',
               backgroundColor: '#3E606F',
               borderColor: '#3E606F',
               color:'white'
             }}>Vote Now!<Icon type="select" /></Button>
            </Link>
          </div>
        </Content>
        <Footer/>
      </Layout>
        
    )
  }
}

  export default LandingPage