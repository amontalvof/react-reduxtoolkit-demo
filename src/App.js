import logo from './logo.svg';
import './App.css';
import CakeView from './components/CakeView';
import IceCreamView from './components/IceCreamView';
import UserView from './components/UserView';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CakeView />
                <IceCreamView />
                <UserView />
            </header>
        </div>
    );
}

export default App;
