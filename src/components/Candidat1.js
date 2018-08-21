import React, {Component} from 'react'
import Footer from './FooterMenu';
import {Layout, Row, Col, Card} from 'antd';
import Avatar from '../images/avatar1.png'
const {Content} = Layout

class Candidat1 extends Component{
    render(){
        return(
            <Layout>
                <Content style={{
                    minHeight: '83vh'
                }}>
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
                                                <p>Tempat Tanggal Lahir : Makasar, 17 Mei 1992</p>
                                                <p>Alamat       : Pejaten, Jakarta</p>
                                                <p>No.Telepon : 082 3132 3456</p>
                                                <p>Email: Samuelkarim@gmail.com </p>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card title="Education" bordered={false}>
                                                <p>SDN 8 Pagi Pejaten</p>
                                                <p>SMP 75 Jakarta</p>
                                                <p>SMA 105 Jakarta</p>
                                                <p>Teknik Industri Universitas Gunadarma</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row style={{
                                        marginTop:'10px'
                                    }}>
                                        <Col>
                                        <Card title="Track Record" bordered={false}>
                                                <p>Wakil Ketua eskul KIR SMP 8</p>
                                                <p>Bendahara Osis SMP 8</p>
                                                <p>Ketua eskul English Club SMA 105</p>
                                                <p>Sekertaris Osis SMA 105</p>
                                                <p>Sekertaris UKM Pencinta Alam </p>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={8} pull={16} style={{ 
                                textAlign:'center',
                                backgroundColor:'#FCFFF5',
                                minHeight:'83vh'}}>
                                <div style={{
                                    margin:'10px',
                                    marginTop:'20px',
                                    color:'#193441'   
                                }} >
                                    <img src={Avatar} style={{
                                        width :'175px',
                                        height: '175px'
                                    }}  alt="Avatar"/>
                                    <h3>
                                    Samuel Karim   
                                    </h3>
                                    <br/>
                                    <p>Sekertaris UKM Pecinta Alam</p>                
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
export default Candidat1;