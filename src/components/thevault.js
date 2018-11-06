import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Textfield, Dialog, DialogActions, DialogTitle, DialogContent} from 'react-mdl';

class Vault extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    toggleCategories() {
        if(this.state.activeTab == 0){
            return(
              <div className="vault-grid"> 
                {/* Vault 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/9/96/Video_tape_archive_%286498650083%29.jpg) center / cover'}}>Video 1</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Vault 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/9/96/Video_tape_archive_%286498650083%29.jpg) center / cover'}}>Video 2</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Vault 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/9/96/Video_tape_archive_%286498650083%29.jpg) center / cover'}}>Video 3</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Vault 4 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ak1.picdn.net/shutterstock/videos/4195021/thumb/1.jpg) center / cover'}}>View More</CardTitle>
                    <CardText> Click here to view more!
                    </CardText>
                    <CardActions border>
                        <Button colored>Click here to view more!</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

              </div>
            )
        }else if(this.state.activeTab ==1){
            return(
                <div className="vault-grid"> 
                {/* Article 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/breaking%20down%20journal.jpg?itok=DSsQPvdE) center / cover'}}>Article 1</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Article 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/breaking%20down%20journal.jpg?itok=DSsQPvdE) center / cover'}}>Article 2</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Article 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/breaking%20down%20journal.jpg?itok=DSsQPvdE) center / cover'}}>Article 3</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Article 4 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKzqBzhWxfgPxt4CIJMOJlCizNEF7pIgoAa8ppN63LMyA5AlSTw) center / cover'}}>View More</CardTitle>
                    <CardText> Click here to view more!
                    </CardText>
                    <CardActions border>
                        <Button colored>Click here to view more!</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

              </div>
            )
        }else if(this.state.activeTab ==2){
            return(
                <div className="vault-grid"> 
                {/* Gallery 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://finephoto.com.br/wp-content/uploads/2018/09/art_business.jpg) center / cover'}}>Gallery 1</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Gallery 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://finephoto.com.br/wp-content/uploads/2018/09/art_business.jpg) center / cover'}}>Gallery 2</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Gallery 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://finephoto.com.br/wp-content/uploads/2018/09/art_business.jpg) center / cover'}}>Gallery 3</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Open</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Gallery 4 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://us.123rf.com/450wm/opasstudio/opasstudio1503/opasstudio150300048/37592669-art-gallery-generic-background-intentionally-blurred-editing-post-production-.jpg?ver=6) center / cover'}}>View More</CardTitle>
                    <CardText> Click here to view more!
                    </CardText>
                    <CardActions border>
                        <Button colored>Click here to view more!</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
             
              </div>
            )
        }
    }
      
        handleOpenDialog() {
          this.setState({
            openDialog: true
          });
        }
      
        handleCloseDialog() {
          this.setState({
            openDialog: false
          });
        }

    render(){
        return(
            <div className ="category-tabs">
               <div className ="vault-grid">
                 <Card shadow={3} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://secure-images.rarenewspapers.com/ebayimgs/5.80.2009/image061.jpg) center / cover'}}>Hard-coded article</CardTitle>
                    <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </CardText>
                    {/* <CardActions border>
                        <Button colored>Add email</Button>
                        
                    </CardActions> */}
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={3} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfq5HUFaPPUseoC1cRqzQ1oUSmmTosesvdqprEPgI71L_Yx5xa) center / cover'}}>Like what you see?</CardTitle>
                    <CardText> Add your email and subscribe for free toreceive the latest updates!
                    </CardText>
                    <CardActions border>
                        <Button colored>Add email</Button>
                        <Button colored>Subscribe</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
              </div>

              <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID})} ripple>
                    <Tab> Videos </Tab>
                    <Tab> Articles </Tab>
                    <Tab> Gallery </Tab>
              </Tabs>

              <Grid>
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
              </Grid>

              <center><h3>Creating an article</h3></center>
                {/* Floating Multiline Textfield */}
                <Textfield
                    onChange={() => {}}
                    label="Text lines..."
                    rows={3}
                    style={{width: '200px'}}
                />

                {/* Expandable Textfield */}
                <Textfield
                    onChange={() => {}}
                    label="Expandable Input"
                    expandable
                    expandableIcon="search"
                />
            </div>
            
        )
    }
}

export default Vault;
