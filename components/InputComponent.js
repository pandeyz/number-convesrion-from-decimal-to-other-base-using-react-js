import React, {Component} from 'react';

import ResultComponent from './ResultComponent';

class InputComponent extends Component {
    constructor(){
        super();

        this.state = {
            num: 0,
            binary: '',
            octal: '',
            hexaDecimal: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.convert = this.convert.bind(this);
    }

    // To handle the user inputs
    handleChange(event) {
        this.setState({num: event.target.value});
    }

    // To calculate BMI
    convert(event) {
        let {num} = this.state;
        let binary, octal, hexaDecimal = 0;

        if (num < 0) {
            num = 0xFFFFFFFF + num + 1;
        }

        binary      = parseInt(num, 10).toString(2);
        octal       = parseInt(num, 10).toString(16);
        hexaDecimal = parseInt(num, 10).toString(8);

        this.setState({binary: binary});
        this.setState({octal: octal});
        this.setState({hexaDecimal: hexaDecimal});
    }

    render() {
        return (
            <div className="container">
                <div style={{'marginTop': '50px'}}>
                    <div className="text-center"><h5>Number Conversion</h5></div>
                    <form className="form-horizontal" autoComplete="off">
                    	<div className="form-group">
                    		<label className="control-label col-sm-2" htmlFor="number_decimal">Number (in decimal):</label>
                    		<div className="col-sm-10">
                    			<input type="text" className="form-control" name="number_decimal" id="number_decimal" placeholder="Enter number in decimal" onChange={this.handleChange} />
                    		</div>
                    	</div>
                    	<div className="form-group">
                    		<div className="col-sm-offset-2 col-sm-10">
                    			<button type="button" onClick={this.convert} className="btn btn-primary">Calculate</button>
                    		</div>
                    	</div>
                        <div className="form-group">
                    		<ResultComponent binary={this.state.binary} octal={this.state.octal} hexaDecimal={this.state.hexaDecimal}></ResultComponent>
                    	</div>
                    </form>
                </div>
            </div>
        );
    }
}


export default InputComponent;
