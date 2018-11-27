import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';

class Events extends Component {
    render(){
        return(
        <div>
            <div className ="big-box">
                <div class="jumbotron">
                    <h3>Check Back here to see what we're doing in the future and on social media!</h3>
                </div>
            </div>
         
            <div className="events-grid"> 
                {/* Vault 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.freepik.com/free-vector/facebook-mobile-post-with-flat-design_23-2147820174.jpg?size=338&ext=jpg) center / cover'}}>Facebook Post 1</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Vault 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.freepik.com/free-vector/facebook-mobile-post-with-flat-design_23-2147820174.jpg?size=338&ext=jpg) center / cover'}}>Facebook Post 2</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Vault 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.freepik.com/free-vector/facebook-mobile-post-with-flat-design_23-2147820174.jpg?size=338&ext=jpg) center / cover'}}>Facebook Post 3</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>

            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="https://www.referralcandy.com/wp-content/uploads/2016/06/ellen-selfie-oscars-samsung.png" alt="..."/>
                    </a>
                </div>
                <div class="media-body">
                    <h6 class="media-heading">Tweet</h6>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </div>
        )
    }
}

export default Events;