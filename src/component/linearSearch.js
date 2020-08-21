import React, { Component } from 'react';

export default class LinearSearch extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueToFind: null,
            numOfSearches: 0,
            linearSearch: true
        }
    }

    handleLinearSearch = e => {
        e.preventDefault();

        this.setState({
            linearSearch: true
        })

        const valueToFind = this.state.valueToFind
        const sortThrough = [
            89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
        ];
        let numOfSearches = 0;
        for(let i = 0; i < sortThrough.length; i++){
            numOfSearches++;
            if(sortThrough[i] === valueToFind){
                console.log(numOfSearches)
                this.setState({ numOfSearches: numOfSearches})
            }
        }
    }
    
    handleBinarySearch = e => {
        e.preventDefault();

        this.setState({
            linearSearch: false
        })

        const valueToFind = this.state.valueToFind
        const sortThrough = [
            89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
        ];
        const sortedArr = sortThrough.sort((a, b) => a - b);
        let numOfSearches = this.binarySearch(sortedArr, valueToFind);
        this.setState({
            numOfSearches: numOfSearches
        })
    }

    binarySearch(array, value, start, end){
        var start = start === undefined ? 0 : start;
        var end = end === undefined ? array.length : end;

        if(start > end){
            return -1;
        }

        const index = Math.floor((start + end) / 2);
        const item = array[index];

        console.log(start, end);
        if (item == value) {
            return index;
        }
        else if (item < value) {
            return this.binarySearch(array, value, index + 1, end);
        }
        else if (item > value) {
            return this.binarySearch(array, value, start, index - 1);
        }
    }

    changeValueToFind = e =>{
        const newValue = parseInt(e.target.value);
        this.setState({ 
            valueToFind: newValue
        })
    }

    render(){
        return(
            <div>
                <form >
                    <input onChange={this.changeValueToFind} placeholder='1'></input><br/>
                    <button type='submit' onClick={this.handleLinearSearch}>Linear Search</button><br/>
                    <button type='submit' onClick={this.handleBinarySearch}>Binary Search</button>
                </form>
                {this.state.linearSearch ? "Linear Search" : "Binary Search"} took {this.state.numOfSearches} searches to find {this.state.valueToFind}
            </div>
        )
    }
}