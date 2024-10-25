'use strict'

// import * as React from 'react';

// const e = React.createElement;
import ReactDOM from 'react-dom';

class Testpage extends React.Component {
    render() {
        return (
            <p>TEST CDN</p>
        );
    }
}
ReactDOM.render(<Testpage />, document.getElementById('root'));
