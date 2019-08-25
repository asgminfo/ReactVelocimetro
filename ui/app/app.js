import '../styles/velocimetro.scss'
import React from 'react'
import ReactDOM from 'react-dom'

class Velocimetro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top: 0,
            degradianes: -143,
            velocidad: 0       
        }
    }

    render() {
        const style = {
            position: 'absolute',
            height: '0%',
            width: '0%',
            margin: 'auto',
            top: ''+this.state.top+'',
            left: '0',
            bottom: '38%',
            right: '0',
            borderTop: '140px solid transparent',
            borderRight: '10px solid rgb(172, 188, 199)',
            borderBottom: '10px solid transparent',
            //'borderRadius': '4px',
            //'backgroundColor': 'rgb(172, 188, 199)',
            'transformOrigin': 'bottom',
            transform: 'rotate( '+this.state.velocidad-+'-143deg)'
        }
        return(
            <div className="velocimetro">
                <div className="velocidad1"></div>
                <div className="velocidad2"></div>
                <div className="velocidad3"></div>
                <div className="velocidad4"></div>
                <div className="velocidad5"></div>
                <div className="velocidad6"></div>
                <div className="velocidad7"></div>               
                <h1 className="valorVelocidad">{this.state.velocidad}</h1> 
                <div><button className="aumentaVelocidad" onClick={this.subir.bind(this)}>+</button></div>
                <div><button className="bajarVelocidad" onClick={this.bajar.bind(this)}>-</button></div>
                <div className="circuloInterno"></div>
                <div style={style}></div>
            </div>
        )
    }

    subir() {
        //console.log('before: ' + this.state.transform);
        this.setState({
           // top: this.state.top-2,
            velocidad: this.state.velocidad+5,
            //degradianes: this.state.degradianes+5,
            //transform: 'rotate('+ this.state.degradianes +'deg)'            
        });
        //console.log('after: ' + this.state.transform);        
    }
    bajar() {
        //console.log('before: ' + this.state.transform);
        this.setState({
            //top: this.state.top+2,
            velocidad: this.state.velocidad-5,
            //degradianes: this.state.degradianes-5,
            //transform: 'rotate('+ this.state.degradianes +'deg)'           
        });
        //console.log('after: ' + this.state.transform);        
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top: 0,
            degradianes: -143,
            velocidad: 0       
        }
    }
    componentDidMount() {
        this.velocidad = setInterval(
        () =>  this.setState({
            velocidad: this.state.velocidad + 1})
            ,
            1000          
        )
      }

    render() {
        return(
            <Velocimetro velocidad = {this.state.velocidad} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))