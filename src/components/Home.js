import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
            <div className="algn">
               <div> <img className="logo" src="https://i.postimg.cc/RVKJRLLZ/download.png" alt=""></img></div>
               <div>  <button type="button" className="btn btn-outline-primary home"><i className="fa fa-home home-1 "></i>Home</button> </div>

                <div className="row">
                    <div className="col fnts">
                    <div><i className="fa fa-hashtag "></i></div>
                    <div><i className="fa fa-bell-o"></i></div>
                    <div><i className="fa fa-envelope-o"></i></div>
                    <div><i className="fa fa-bookmark"></i> </div>
                    <div><i className="fa fa-list-alt"></i> </div>
                    <div><i className="fa fa-user-o"></i></div>
                    <div><i className="fa fa-ellipsis-h"></i></div>
                    </div>
                    <div className="col fnts">
                      <div> Explore</div>
                      <div> Notifications</div>
                      <div> Messages</div>
                      <div> Bookmarks</div>
                      <div>Lists</div>
                      <div>Profile</div>
                      <div>More</div>
                </div>
                </div>

                <div><button type="button" className="btn btn-primary twit">Twitter</button></div>
                <div className="ids">
                <div className="log">
                 <i className="fa fa-user-circle-o" style={{fontSize:"2em",opacity:"0.3"}}></i>
                </div>
                <div  className="log">
                 <p>Ch Chandu...</p>
                </div>
                <div className="log"><i className="fa fa-ellipsis-h"></i></div>
                </div>
                <p className="twid">@Ch_Chandu</p>
            </div>
        )
    }
}
