import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';
import "./Events.css";
import Calendar from "./Calendar";

class Events extends Component {
    render(){
        return(
        <div>
            <div className ="big-box">
                <div class="jumbotron">
                    <h3>Check Back here to see what we're doing in the future and on social media!</h3>
                </div>
            </div>

            <div class="calendarcon">
            <Calendar/>
            </div>
         
            <div className="events-grid"> 
                {/* Vault 1 */}
                <Card shadow={5} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', textShadow: '2px 2px 5px #000', background: 'url(https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/46472489_985038954953876_889194861771620352_n.jpg?_nc_cat=105&_nc_ht=scontent-sjc3-1.xx&oh=c884d6177a28ce2afdf0b02ebe80149a&oe=5CAC6DD0) center / cover'}}>The Okinawa Memories Initiative</CardTitle>
                    <CardText> During our trip to Okinawa, we were fortunate to have the opportunity to attend a Henoko base protest. We learned about the issues surrounding the base in Henoko, Camp Schwab, and were able to gain a better understanding of current events happening in Okinawa today. #tbt #ucsc #okinawa
                    </CardText>
                    <a href="#" class="btn btn-primary" role="button" style={{position: 'absolute', bottom: '0', width: '100%'}}>Read More!</a>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Vault 2 */}
                <Card shadow={5} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', textShadow: '2px 2px 5px #000', background: 'url(https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/47068357_999198536871251_6775056681735815168_n.jpg?_nc_cat=105&_nc_ht=scontent-sjc3-1.xx&oh=29f75cfa916bd3b2b978b204470802a2&oe=5CB21CD4) center / cover'}}>The Okinawa Memories Initiative</CardTitle>
                    <CardText> 🌺TEAM MEMBER SPOTLIGHT: Emily Aranda 🌺 Emily is a third-year double majoring in art and politics, with a concentration in international relations. 
                    She was a member of our Okinawa trip team last year, and is our newly appointed Director of Social Media! Click on the post 👇 to see some of Emily's photography from our trip!
                    </CardText>
                    <a href="#" class="btn btn-primary" role="button" style={{position: 'absolute', bottom: '0', width: '100%'}}>Read More!</a>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Vault 3 */}
                <Card shadow={5} style={{minWidth: '450', height: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', textShadow: '2px 2px 5px #000', background: 'url(https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/44764883_960999057357866_1124210700500074496_n.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=fc639a3f76447f9a712a68ec3b33542e&oe=5CA973D3) center / cover'}}>The Okinawa Memories Initiative</CardTitle>
                    <CardText> Last Friday we held a dinner party for a post-trip get together including team members and supporters. The Websters were one of our kindest supporters and without them we wouldn’t have been able to find Masako Arakaki, the girl in the photograph. We cannot thank all of our supporters enough and we appreciate them so much! #ucsc
                    </CardText>
                    <a href="#" class="btn btn-primary" role="button" style={{position: 'absolute', bottom: '0', width: '100%'}}>Read More!</a>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>

            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="https://pbs.twimg.com/card_img/1065532167667646464/Y-GwI_dv?format=jpg&name=800x419" alt="..."/>
                    </a>
                </div>
                <div class="media-body">
                    <h8 class="media-heading"><i>The Okinawa Memories Inititative</i> Retweeted</h8>
                    <h6>Ryan Yokota 横田ライアン <i>@RyanYokota</i>: </h6>
                    <h5><b>"</b>Gov. Tamaki invites US lawmakers to Okinawa to see base reality - The Mainichi<b>"</b></h5>
                    <a href="#" class="btn btn-primary" role="button">Read More!</a>
                </div>
            </div>

        </div>
        )
    }
}

export default Events;