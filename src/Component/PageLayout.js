import React, { Component } from 'react';
import ProfileBox from './PokeProfile';

export default class PageLayout extends Component {

    constructor(props){
        super(props);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.updatePagination = this.updatePagination.bind(this);
        console.log('Bawaan', props);
        this.state = {
            id : 1,
            pokeContent : [],
            contentNumber : this.props.id
        };
    }

    componentDidMount() {
        let pokeContent = this.updatePagination(this.state.contentNumber);
        this.setState({
            pokeContent
        });
    }

    componentDidUpdate(prevProps, prevState){
        
        if (this.props.id !== prevProps.id){
            let pokeContent = this.updatePagination(this.props.id);
            this.setState({
                contentNumber : this.props.id,
                pokeContent : pokeContent
            })
        }
    }

    updatePagination = function(n) {
        let tempContent = [];
        for (let i = 1; i<=n; i++){
            tempContent.push(<ProfileBox key = {i} id={i}/>);
        }
        
        return tempContent;
        
    }

    handleIdChange (event) {
        const contentNumber = parseInt(event.target.value, 10);
        this.temp = contentNumber;
        if (!isNaN(contentNumber) && contentNumber > 0) {
            this.setState({ contentNumber });
        }
    }

    render(){

        return (
            <div>
                <header>
                    <h1 className = 'blue block'>Pokemon Library</h1>
                    <select 
                        name="pageSize" 
                        className = "counterID block pagi"
                        onChange = {this.props.change} 
                    >
                        <option value="1">1</option>
                        <option value="6">6</option>
                        <option value="15">15</option>
                        {/* <option value="25">25</option> */}
                    </select> 
                </header>
                <div className= 'container'>
                    <div className="half">{this.state.pokeContent}
                    </div>
                </div>
            </div>
        );
    }
}

