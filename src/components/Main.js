import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="hm-1" style={{position:"sticky",top:"5px"}}>Home</div>
                <div className="hm">
                <div className="crl">  <i className="fa fa-user-circle-o" style={{fontSize:"2em",opacity:"0.7",padding:"0.7em"}}></i> What's Happening?</div>          
                <div className="st">
                    <i className="fa fa-picture-o st-1"></i>
                    <i className="fa fa-gift st-1"></i>
                    <i className="fa fa-align-left st-1"></i>
                    <i className="fa fa-smile-o st-1"></i>
                    <i className="fa fa-calendar-o st-1"></i>
                </div>
                <div className="tweet" > <button style={{marginLeft:"20em",borderRadius:"40%",opacity:"0.5",fontWeight:"bolder",marginBottom:"1em"}} type="button" className="btn btn-primary ">Tweet</button> </div>
                </div>

                <div className="abt">
                <h3 className="hdr">Welcome to Tweeter!</h3>
                <p>This is the best place to see what's happening in your world. Find some people and topics to follow now.</p>
                <div className="lets"> <button type="button" className="btn btn-primary" style={{borderRadius:"30%",opacity:"0.7",fontWeight:"bolder"}}>Let's go!</button> </div> 
                </div>
            </div>
        )
    }
}
