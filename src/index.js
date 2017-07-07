import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar  from './components/search_bar';

import VideoList from  './components/video_list';

const API_KEY = 'AIzaSyAcWOmI9YyTk_Feth4jfRGAQ4Aww3tMh8Q';



class App extends Component{
	constructor(props){
		super(props);

		this.state = { videos: [] };
		
		YTSearch({key: API_KEY, term:'kiteboard'}, (videos)=>{
			this.setState({videos}); //if key and value the same string (videos:videos) can reduce it to one word
		});
	}
	render(){
		return (  
			<div>
	 			<SearchBar />
	 			<VideoList videos = {this.state.videos}/>
	 		</div>
		);
	}
} 

// makes an instance and put it to DOM
// say where to put it

ReactDOM.render(<App/>, document.querySelector('.container'));