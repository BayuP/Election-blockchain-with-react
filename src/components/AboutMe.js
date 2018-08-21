import React, { Component } from 'react';
import Footer from './FooterMenu';
import {Layout} from 'antd';
const {Content} = Layout
import aboutMeImage from '../images/blockchain.jpg'

import '../App.css'

class AboutMe extends Component {
    render(){
        return(
            <Layout>
                <Content style={{
                    minHeight:'83vh',
                    backgroundColor:'#D1DBBD'
                }}>
                <div style={{
                    height:'25vh',
                    backgroundColor:'#91AA9D',
                    textAlign:'center'
                }}>
                <h1 style={{
                    padding:'10px',
                    textAlign:'center',
                    color:'white'
                }}> What is blockchain ? </h1>
                <img src={aboutMeImage} alt='Avatar' style={{
                    borderRadius: '50%',
                    height:'200px',
                    width:'200px',
                    //position:'absolute',
                    //top:'140px',
                   // left:'650px'
                }}/>
                <div  style={{
                    textAlign:'center',
                    margin:'20px',
                   color:'white',
                   fontFamily:'comic sans ms'
                }}>
                 <h3>
                A blockchain,originally block-chain,is a growing list of records, called blocks, which are linked using cryptography.
                </h3>
                <h3>
                Blockchains which are readable by the public are widely used by cryptocurrencies.
                </h3>
                </div>
               
                </div>
                </Content>
                <Footer/>
            </Layout>
               
        )
    }
}

export default AboutMe;