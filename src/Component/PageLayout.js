import React, { Component } from 'react';
import '../App.css';
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
        // for (let i = 1; i<=1; i++){

        //     this.setState(prevState => {
        //         let tempContent = [...prevState.pokeContent]
        //         tempContent.push(<ProfileBox key = {prevState.id} id={prevState.id}/>)
        //         // console.log('WAAAW', tempContent)
        //         return {
        //             id : prevState.id+1,
        //             pokeContent : tempContent
        //         }}
        //     )

        // }
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

            // this.setState(() => {
            //     // let tempContent = [...prevState.pokeContent]
            //     // tempContent.push(<ProfileBox key = {prevState.id} id={prevState.id}/>)
            //     tempContent.push(<ProfileBox key = {i} id={i}/>)
            //     // console.log('WAAAW', tempContent)
            //     // return {
            //     //     id : prevState.id+1,
            //     //     pokeContent : tempContent
            //     // }
            // }
            // )  
        }
        console.log('ASDAS', tempContent)
        this.setState({
            pokeContent : tempContent
        })
    }

    handleIdChange (event) {
        // console.log('event', event)
        const contentNumber = parseInt(event.target.value, 10);
        if (!isNaN(contentNumber) && contentNumber > 0) {
            this.setState({ contentNumber });
        }
    }

    render(){

        return (
            <div>
                <header>
                    <h1 className = 'blue block'>Pokemon Library Try</h1>
                    {/* <nav className = 'block blue right'>Content</nav> */}
                    {/* <input
                        className = "counterID block right"
                        type="number"
                        step={1}
                        min={0}
                        value={this.state.contentNumber}
                        onChange={this.handleIdChange}
                    /> */}
                    <select 
                        name="pageSize" 
                        className = "counterID block right"
                        onChange = {this.handleIdChange} 
                    >
                        <option value="1">1</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select> 
                </header>
                <div className= 'container'>{this.state.pokeContent}</div>
            </div>
        )
    }
}

