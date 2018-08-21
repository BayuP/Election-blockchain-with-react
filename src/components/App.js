import React, { Component } from 'react'
import ElectionContract from '../../build/contracts/Election.json'
import getWeb3 from '../utils/getWeb3'
import TruffleContract from 'truffle-contract'
import Footer from './FooterMenu'
import Home from './Home'
import {Layout} from 'antd';


import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      account: '0x0',
      verified:'0xe1358eF4D3a25E0b9381B0E866faE21F09014787',
      verified2:'0xEF334D4C029802A205125FE5f39CC3a83d416533',
      verified3:'0x337B08D4CcFfB3c5cb357775cEac90366e4757b9',
      verified4:'0x07ae85b6ca8c830d5aD33ae150f42531Fc1C91A2',
      varivied5:'0xF0224B4eA21C2580659cb6245eB314E44df5d178',
      candidates: [],
      hasVoted: false,
      loading: true,
      voting: false,
    }

    this.castVote=this.castVote.bind(this)
    this.watchEvents=this.watchEvents.bind(this)

  }

  componentDidMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */
    
    const election = TruffleContract(ElectionContract)
    election.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    
    // Get accounts.
    this.state.web3.eth.getCoinbase((error, account) => {
      this.setState({account})
      var checked = this.state.account
      if (checked===this.state.verified.toLowerCase() || checked===this.state.verified2.toLowerCase() || checked===this.state.verified3.toLowerCase() 
      || checked===this.state.verified4.toLowerCase() || checked===this.state.verified5.toLowerCase()   ) {
        election.deployed().then((electioninstance) => {
          console.log(this.state.account)
          this.electionInstance = electioninstance
          this.watchEvents()
          console.log('1')
          this.electionInstance.candidatesCount().then((candidatesCount) => {
            for (var i = 1; i <= candidatesCount; i++) {
              this.electionInstance.candidates(i).then((candidate) => {
                const candidates = [...this.state.candidates]
                candidates.push({
                  id: candidate[0],
                  name: candidate[1],
                  voteCount: candidate[2]
                });
                this.setState({ candidates: candidates })
                console.log('2')
              });
            } 
          })
          this.electionInstance.voters(this.state.account).then((hasVoted) => {
            this.setState({ hasVoted, loading: false})
          })
        })
      }else{
        this.setState({hasVoted:true,voters:true})
        console.log(this.state.account)
        console.log('3')
      }
      })
  }

  watchEvents(){
    this.electionInstance.votedEvent({},{
      fromBlock:'latest'
    }).watch((error, event) => {
      this.setState({ voting: false })
    })
  }

  castVote(candidateId) {
    this.setState({ voting: true })
    var _price =0.00000001;
    this.electionInstance.vote(candidateId, { from: this.state.account, gasPrice:this.state.web3.toWei(_price,"ether")}).then((result) =>
      this.setState({ hasVoted: true}),
      console.log('3')
    )
  }

  render() {
    return(
      <Layout>
        <div>
          { this.state.loading || this.state.voting
          ? <h2 style={{
            textAlign:'center',
            margin:'30px'
          }}>Loading</h2>
        :
        <Home  
        account={this.state.account}
        candidates={this.state.candidates}
        hasVoted={this.state.hasVoted}
        castVote={this.castVote}
        watchEvents={this.watchEvents}/>
          } 
        </div>
        <Footer/>
      </Layout>
    );
  }
}


