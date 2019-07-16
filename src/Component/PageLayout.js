import React, { Component } from 'react';
import ProfileBox from './PokeProfile'

export default class PageLayout extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : 1,
            pokeContent : [],
            contentNumber : 1
        }
        this.handleIdChange = this.handleIdChange.bind(this);
        this.updatePagination = this.updatePagination.bind(this);
    }

    componentDidMount() {
        this.updatePagination()
    }

    componentDidUpdate(prevProps, prevState){
        console.log('NOW', this.state.contentNumber, 'PREV', prevState.contentNumber)
        if (this.state.contentNumber !== prevState.contentNumber){
            this.updatePagination();
        }
    }

    updatePagination () {

        let tempContent = [];
        for (let i = 1; i<=this.state.contentNumber; i++){
            tempContent.push(<ProfileBox key = {i} id={i}/>);
        }
        this.setState({
            pokeContent : tempContent
        })
    }

    handleIdChange (event) {
        const contentNumber = parseInt(event.target.value, 10);
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
                        onChange = {this.handleIdChange} 
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
        )
    }
}

