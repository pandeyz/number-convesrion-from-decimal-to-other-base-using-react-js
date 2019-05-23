import React, {Component} from 'react';

class ResultComponent extends Component {

    render() {
        let {binary, octal, hexaDecimal} = this.props;

        return (
            <div>
                <div>
                    <label className="control-label col-sm-12" htmlFor="number_decimal">Result (in binary): <span>{binary}</span></label>
                </div>
                <div>
                    <label className="control-label col-sm-12" htmlFor="number_decimal">Result (in octal): <span>{octal}</span></label>
                </div>
                <div>
                    <label className="control-label col-sm-12" htmlFor="number_decimal">Result (in hexadecimal): <span>{hexaDecimal}</span></label>
                </div>
            </div>
            )
        ;
    }
}

export default ResultComponent;
