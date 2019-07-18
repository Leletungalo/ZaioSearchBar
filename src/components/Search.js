import React, { Component } from 'react'

class Search extends Component {
    state = {
        result: []
    }

    handleChane = (event) => {
        const {value} = event.target;
        const arr = this.props.list;
        let temparr = [];
        arr.forEach(element => {
            let tempStr =  element.toLowerCase();
            
            if(tempStr.includes(value) && value !== ""){
                temparr.push(element);
            }
        });
        this.setState({
            result: temparr
        });
    }

    render() {
        const resultArray = this.state.result.map((ele) => (<h1>{ele}</h1>) );
        return (
            <form>
                <input className="inputSearch" 
                    type="text" 
                    name="result" 
                    onChange={this.handleChane}/>
                <div>{resultArray}</div>
            </form>
        )
    }
}

export default Search;
