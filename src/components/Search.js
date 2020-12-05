import React, { Component } from 'react';
export default class Search extends Component {
    render() {
        return (
            <div>
            <div><input type="text" placeholder="Search Twitter" className="inpt"></input> </div> 
            <div className="smd" style={{borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}><h2>What's happening</h2> </div>
            <div className="smd">
            <img className="mask" src="https://i.postimg.cc/8P6SW2z3/mask.jpg" alt=""></img>
                <p>news-live</p>
                <p>Cyclone Burevi Approches Tamilnadu coast</p>
            </div>
            <div className="smd">
                <span style={{fontSize:"1.2em"}}>#2020 Wrapped</span> <i className="fa fa-headphones" style={{backgroundColor:"goldenrod"}}></i>
                <p>Share your year im music</p>
            </div>
            <div className="smd">
                <p>Covid-19 .Live</p>
                <h3> Covid-19 in india</h3>
            </div>
            <div className="smd">
                <p> Tending in india</p>
                <h3>#कंगना_चुपचाप_माफी_माँग</h3>
                <p>Trending with <a href="#"> #कंगना_को_दिलजीत_पेल_रहा_है</a></p>
            </div>
            <div className="smd">
                <p> Tending in india</p>
                <h3>#DiljitDosanjh</h3>
                <p>Trending with <a href="#"> Punjabi, G.O.A.T</a></p>
            </div>
            <div style={{backgroundColor:"lightblue",width:"80%"}}><a href="#"> Show more</a></div>
            <div className="smd" style={{marginTop:"2em"}}>
                <h2>Who to follow</h2>
            </div>
            <div className="all">
            <div className="smd">
            <div className="row">
                <div className="col-3">
                <img src="https://i.postimg.cc/3wBYLVVB/ntr.jpg" className="flw" alt=""></img>
                </div>
                <div className="col">
                    <div>N Tarak</div>
                    <div>@N_Tarak</div>
                </div>
                <div className="col">
                <button className="btn btn-primary folbtn">Follow</button>    
                </div>
            </div>
            </div>
            <div className="smd">
            <div className="row">
                <div className="col-3">
                <img src="https://i.postimg.cc/Gh2K9Dbh/narendramodi.jpg" className="flw" alt=""></img>
                </div>
                <div className="col">
                    <div>Narendra Modi</div>
                    <div>@Narendra_Modi</div>
                </div>
                <div className="col">
                <button className="btn btn-primary folbtn">Follow</button>    
                </div>
            </div>
            </div>
            <div className="smd">
            <div className="row">
                <div className="col-3">
                <img  src="https://i.postimg.cc/K8m0FW4w/prabash.jpg" className="flw" alt=""></img>
                </div>
                <div className="col">
                    <div>Prabash</div>
                    <div>@Prabash</div>
                </div>
                <div className="col">
                <button  className="btn btn-primary folbtn ">Follow</button>    
                </div>
            </div>
            </div>
            </div>
            <div><a href="#"> Show more</a></div>
            <div>
            <div>
                <dl>
                    <dd>Terms of Services</dd>
                    <dd>privacy Policy</dd>
                    <dd>Coookies Policy</dd>
                </dl>
            </div>
            <div >
                <dl>
                    <dd>Ads info</dd>
                    <dd>More ...</dd>
                    <dd>2020 Twitter, Inc.</dd>
                </dl>
            </div>
            </div>
            </div>
        )
    }
}
