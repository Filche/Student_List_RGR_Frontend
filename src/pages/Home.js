import React, { Component } from 'react';
import { Container ,Paper,Button} from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import Appbar from '../components/Appbar';
import '../components/Styles.css';
import Login from './Login';
import Register from './Register';

const paperStyle={padding:'50px 50px', width:300,margin:"20px auto"}



export default class Home extends Component{


    render(){
        return(
        <div>
            <Appbar/>
            <Paper elevation={5} style={paperStyle}>
            <Container>
                <form noValidate autoComplete="off">
                <Navbar collapseOnSelect>
                    <Navbar.Collapse>
                <Nav>
                        <span>
                            <span>
                                <Nav.Link href='/login' component={Login}>
                                    <Button id="login" variant="contained" color="secondary">
                                    Log In
                                    </Button>
                                </Nav.Link>
                            </span>

                            <span>
                                <Nav.Link href='/register'>
                                <Button id="register" variant="contained" color="secondary">
                                    Register
                                </Button>
                                </Nav.Link>
                            </span>
                        </span>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    <Router>
                        <Routes>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/register' component={Register}/>
                        </Routes>
                    </Router>
                </form>
            </Container>
            </Paper>
        </div>
      );
    }
}