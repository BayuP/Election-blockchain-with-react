import React , { Component } from 'react';

import imgCandidate1 from '../images/avatar1.png';
import imgCandidate2 from '../images/avatar2.png';
import {Layout, Row, Col, Card, Button} from 'antd';
const {Content} = Layout

class Home extends Component{
    
    render(){
        const candidate1Name = this.props.candidates.filter((candidate)=>{
            return candidate.id.toNumber()===1;
          }).map((candidate)=>{
            return(candidate.name)
          })
          const candidate2Name = this.props.candidates.filter((candidate)=>{
            return candidate.id.toNumber()!==1;
          }).map((candidate)=>{
            return(<div key={candidate.id.toNumber()}>
                  {candidate.name}
                  </div>
            )
          })
          let candidate1Vote = this.props.candidates.filter((candidate)=>{
            return candidate.id.toNumber()===1;
          }).map((candidate)=>{
            return(<div key={candidate.id.toNumber()}>
                  {candidate.voteCount.toNumber()}
                  </div>
            )
          })
          let candidate2Vote = this.props.candidates.filter((candidate)=>{
            return candidate.id.toNumber()!==1;
          }).map((candidate)=>{
            return(<div key={candidate.id.toNumber()}>
                  {candidate.voteCount.toNumber()}
                  </div>
            )
          })
          
        return(
            <Content style={{minHeight:'83vh',backgroundColor:'#D1DBBD'}} >
            <div className="App" style={{textAlign:'center',padding:'10px'}}>
            <h1>Chose Wisely</h1>
            </div>
            <div>
              <Row style={{textAlign:'center'}}>
                <Col span={12} style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <div>
                <Card style={{
                width: '220px',
                padding:'10px',
                backgroundColor:'#3E606F',
                }} 
                cover={<img alt='Avatar' src={imgCandidate1}/>}
                bordered={false}>
                <h3 style={{color:'white'}}>{candidate1Name}</h3>
                { !this.props.hasVoted ?
                <Button
                 onClick={(event)=>{
                   event.preventDefault()
                   this.props.castVote(this.candidateId=1)
                 }}>VOTE</Button> : <Button disabled>VOTE</Button> }
                </Card>
                <h2 style={{padding:'10px'}}>{candidate1Vote}</h2>
                </div>
                </Col>
                <Col span={12} style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <div>
                <Card  style={{
                width: '220px',
                padding:'10px',
                backgroundColor:'#91AA9D',
                textAlign:'center'
                }} 
                cover={<img alt='Avatar' src={imgCandidate2}/>}
                bordered={false}>
                <h3 style={{color:'white'}}>{candidate2Name}</h3>
                { !this.props.hasVoted ?
                <Button
                 onClick={(event)=>{
                   event.preventDefault()
                   this.props.castVote(this.candidateId=2)
                 }}>VOTE</Button> : <Button disabled>VOTE</Button> }
                </Card>
                <h2 style={{padding:'10px'}}>{candidate2Vote}</h2>
                </div> 
                </Col>
                </Row>
                </div>
                <div style={{ verticalAlign:'text-bottom'}}>
                <h2 style={{textAlign:'center'}} > Your Account :{this.props.account} </h2>
                </div>
            </Content>
        )
    }
}

export default Home