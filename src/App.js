import React, {Component} from 'react';
import Provider from './data/store/provider';
import PeopleScreen from './screens/PeopleScreen/container';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <PeopleScreen/>
            </Provider>
        );
    }
}

export default App;
