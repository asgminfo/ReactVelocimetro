import '../styles/velocimetro.scss'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: 'absolute',
            height: '120px',
            width: '8px',
            margin: 'auto',
            top: '-30%',
            left: '0',
            bottom: '0',
            right: '0',
            'borderRadius': '4px',
            'backgroundColor': 'rgb(172, 188, 199)',
            'transformOrigin': 'bottom',
            transform: 'rotate(-140deg)',
            degradianes: -140,
            velocidad: 0       
        }
    }

    render() {
        return(
            <div className="velocimetro">
                <div className="velocidad1"></div>
                <div className="velocidad2"></div>
                <div className="velocidad3"></div>
                <div className="velocidad4"></div>
                <div className="velocidad5"></div>
                <div className="velocidad6"></div>
                <div className="velocidad7"></div>
                <div style={this.state}></div>
                <h1>{this.state.velocidad}</h1> 
                <div><button className="aumentaVelocidad" onClick={this.subir.bind(this)}>+</button></div>
                <div><button className="bajarVelocidad" onClick={this.bajar.bind(this)}>-</button></div>
                <div className="circuloInterno"></div>
            </div>
        )
    }

    subir() {
        //console.log('before: ' + this.state.transform);
        this.setState({
            velocidad: this.state.velocidad+1,
            degradianes: this.state.degradianes+1,
            transform: 'rotate('+ this.state.degradianes +'deg)'            
        });
        //console.log('after: ' + this.state.transform);        
    }
    bajar() {
        //console.log('before: ' + this.state.transform);
        this.setState({
            velocidad: this.state.velocidad-1,
            degradianes: this.state.degradianes-1,
            transform: 'rotate('+ this.state.degradianes +'deg)'           
        });
        //console.log('after: ' + this.state.transform);        
    }
}

ReactDOM.render(<App />, document.getElementById('root'))