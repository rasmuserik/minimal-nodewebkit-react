import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';


let space = {margin: 10};

ReactDOM.render(
    <MuiThemeProvider>
    <div>
    <TextField type="number" style={space}/><br/>
    <Slider style={{display: 'inline-block', height:200}} axis="y-reverse" />
    <span style={{height:200, width:200, outline: '1px solid black', display: 'inline-block', verticalAlign: 'bottom'}}></span>
    <RaisedButton label="hello" style={space}/>
    </div>
    </MuiThemeProvider>,
    document.getElementById('root'));
