import React, {Component} from 'react'
import { Layout } from 'antd'
const { Footer } = Layout;

class FooterMenu extends Component{
    render(){
        return(
            <Layout className="Footer">
                <Footer 
                style={{
                    textAlign:'center'
                }}>
                    Bayu Y @2018
                </Footer>
            </Layout>
        )
    }
}

export default FooterMenu;