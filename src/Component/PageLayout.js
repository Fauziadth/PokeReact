import React, { Component } from 'react';
import ProfileBox from './PokeProfile';

const page_size = [1, 6, 15, 50];

export default class PageLayout extends Component {

    constructor(props){
        super(props);
        this.state = {
            pokeContent : [],
            contentNumber : 1,
            size : 1,
            startNo : 1,
        };
        this.handleSizeChange = this.handleSizeChange.bind(this);
    }

    componentDidMount() {
    }

    handleSizeChange (event) {
        const size = parseInt(event.target.value, 10);
        this.setState({ 
            contentNumber : size,
            size
         });
    }

    showMore = () => {
        this.setState({
            contentNumber : this.state.contentNumber + this.state.size
        });
    }

    render(){
        const {
            contentNumber,
            size,
            startNo
        } = this.state;

        return (
            <div>
                <header>
                    <h1 className = 'blue block'>Pokemon Library</h1>
                    <select 
                        name="pageSize" 
                        className = "counterID block pagi"
                        onChange = {this.handleSizeChange} 
                        value = {size}
                    >
                        {page_size.map((val, i) => 
                                <option key={i} value={val}>{val}</option>
                         )}
                    </select> 
                </header>
                <div className= 'container'>
                    <div className="half">
                        {Array.from(Array(contentNumber), (_, i) => 
                            <ProfileBox key={i+startNo} id={i+startNo}/>
                        )}
                    </div>
                </div>
                <div onClick={this.showMore} style={{cursor : 'pointer'}}>
                    Show More
                </div>
            </div>
        );
    }
}

