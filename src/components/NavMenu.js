import React ,{Component} from 'react';
import { Menu, Icon ,Layout } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

import etherIcon from '../images/EthereumIcon1.png'


class NavMenu extends Component{
    render(){
        return(
        <Layout>
          <Menu mode="horizontal" style={{
              backgroundColor:'#193441',
              borderColor: '#193441'
          }}>
            <Menu.Item>
                <Link to="/" style={{
                    color:'white'
                }}><img src={etherIcon} alt='avatar' style={{
                    height:'30px',
                    width:'30px',
                    padding:'5px'
                }}/> ElectionApp
                </Link>
        </Menu.Item>
          <SubMenu title={<span><Icon type="profile" />Profile</span>} 
          style={{
              right: '200px',
              position: 'absolute',
              color:'white',
          }}>
            <Menu.Item >
                <Link to="/profile/candidat1">Candidat 1</Link>
            </Menu.Item>
            <Menu.Item >
                <Link to="/profile/candidat2" >Candidat 2</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="home" 
          style={{
            right: '305px',
            position: 'absolute'
          }}>
            <Link to="/home" style={{
                color:'white'
            }}>
            <Icon type="check" />Vote
            </Link>
          </Menu.Item>
          <Menu.Item 
          style={{
            right: '70px',
            position: 'absolute'
          }}>
              <Link to="/aboutme" key="aboutme" style={{
                  color:'white'
              }}>
              <Icon type="user" />About
              </Link>
          </Menu.Item>
          </Menu>
          </Layout>
        )
    }
}


export default NavMenu




