import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            locations: '',
            sortBy: 'best_match'
        }
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
          };
        this.handleSortByChange = this.handleSortByChange.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active'
        } else {
            return ''
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    handleTermChange(event) {
        this.setState({
            location: event.target.value
        })
    }

    handleLocationChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        event.preventDefault()
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
            return <li className={this.getSortByClass(sortByOptionValue)} 
            key={sortByOptionValue} 
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}
            </li>
        })
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit"
                onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;