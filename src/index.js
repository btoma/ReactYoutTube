import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCimA4iJE3p7yZ3wZV6DXYNRIucry3VyAg';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

// Create new Component and this component produce some html.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos})
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }

}

// Take this component html and put it on the page.
ReactDom.render(<App/>, document.querySelector('.container'));