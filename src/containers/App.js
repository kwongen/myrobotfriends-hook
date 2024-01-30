import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
//import { robots } from './robots';
import '../containers/App.css';

function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users => setRobots(users));			
	}, []);

	const filterRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	});

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	};

	return (!robots.length)  
			?
			<h1>Loading...</h1> 
			:
			(
				<div className='tc'>
					<h1 className='f1'>My RobotFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
} 

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			robots: [],
// 			searchfield: ''
// 		}
// 	};

// 	componentDidMount() {
// 		// fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
// 		// 	return response.json();
// 		// }).then(users => {
// 		// 		this.setState({robots: users});
// 		// });
// 		// Simplify as below
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response=>response.json())
// 		.then(users => this.setState({robots: users}));		
// 	}

// 	onSearchChange = (event) => {
// 		this.setState({searchfield : event.target.value});
// 	};

// 	render () {
// 		const {robots, searchfield} = this.state;
// 		const filterRobots = robots.filter(robot => {
// 			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
// 		});

// 		return (!robots.length)  ?
// 			 <h1>Loading...</h1> :
// 			(
// 				<div className='tc'>
// 					<h1 className='f1'>My RobotFriends</h1>
// 					<SearchBox searchChange={this.onSearchChange}/>
// 					<Scroll>
// 						<ErrorBoundary>
// 							<CardList robots={filterRobots}/>
// 						</ErrorBoundary>
// 					</Scroll>
// 				</div>
// 			);
// 	}
// };

export default App;