import React, { Component } from 'react';
import ProfileBox from './PokeProfile';

export default class PageLayout extends Component {

    constructor(props){
        super(props);
        this.state = {
            pokeContent : [],
            contentNumber : 1
        };
        this.handleIdChange = this.handleIdChange.bind(this);
    }

    componentDidMount() {
        this.updatePagination(this.state.contentNumber);
    }

    updatePagination = function(n) {
        let tempContent = [];
        for (let i = 1; i<=n; i++){
            tempContent.push(<ProfileBox key = {i} id={i}/>);
        }
        
        this.setState({
            pokeContent : tempContent
        });
    }

    handleIdChange (event) {
        const contentNumber = parseInt(event.target.value, 10);
        this.temp = contentNumber;
        if (!isNaN(contentNumber) && contentNumber > 0) {
            this.setState({ contentNumber }, () => {this.updatePagination(this.state.contentNumber)});
        }
    }

    render(){
        const {
            contentNumber,
            pokeContent
        } = this.state;

        return (
            <div>
                <header>
                    <h1 className = 'blue block'>Pokemon Library</h1>
                    <select 
                        name="pageSize" 
                        className = "counterID block pagi"
                        onChange = {this.handleIdChange} 
                        defaultValue = {contentNumber}
                    >
                        <option value="1">1</option>
                        <option value="6">6</option>
                        <option value="15">15</option>
                    </select> 
                </header>
                <div className= 'container'>
                    <div className="half">{pokeContent}
                    </div>
                </div>
            </div>
        );
    }
}

