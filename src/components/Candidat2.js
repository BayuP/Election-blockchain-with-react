import React, {Component} from 'react'
import Footer from './FooterMenu';
import {Layout, Row, Col, Card,} from 'antd';
import Avatar from '../images/avatar2.png'
const {Content} = Layout

class Candidat2 extends Component{
    render(){
        return(
            <Layout>
                <Content style={{ minHeight:'83vh'}}>
                <div>
                        <Row >
                            <Col span={16} push={8} style={{
                                backgroundColor:'#3E606F',
                                minHeight:'83vh'
                            }}>
                                <div style={{
                                    margin:'10px',
                                    marginTop:'20px'
                                }}>
                                    <Row gutter={12}>
                                        <Col span={12}>
                                            <Card title="Biodata" bordered={false}>
                                                <p>Tempat Tanggal Lahir : Bandung, 3 Februari 1992</p>
                                                <p>Alamat       : Pasar Minggu, Jakarta</p>
                                                <p>No.Telepon : 081 5837 3280</p>
                                                <p>Email: Nathantaslim@gmail.com </p>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card title="Education" bordered={false}>
                                                <p>SDN 10 Pagi Bandung</p>
                                                <p>SMP 2 Bandung</p>
                                                <p>SMA 5 Bandung</p>
                                                <p>Teknik Sipil Universitas Gunadarma</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row style={{
                                        marginTop:'10px'
                                    }}>
                                        <Col>
                                        <Card title="Track Record" bordered={false}>
                                                <p>Wakil Ketua eskul basket SMP 2</p>
                                                <p>Bendahara Osis SMP 2</p>
                                                <p>Ketua eskul Basket SMA 5</p>
                                                <p>Sekertaris Osis SMA 5</p>
                                                <p>Bendahara UKM Basket</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={8} pull={16} style={{ 
                                textAlign:'center',
                                minHeight:'83vh',
                                backgroundColor:'#FCFFF5'}}>
                                <div style={{
                                    margin:'10px',
                                    marginTop:'20px',
                                    color:'#193441' 
                                }} >
                                    <img src={Avatar} style={{
                                        width :'170px',
                                        height: '170px'
                                    }}  alt="Avatar"/>
                                    <h3>
                                    Nathan Taslim   
                                    </h3>
                                    <br/> 
                                    <p>Bendahara UKM Basket</p>           
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer/>
            </Layout>
        )
    }
}
export default Candidat2;