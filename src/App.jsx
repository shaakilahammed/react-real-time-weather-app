import Home from './pages/Home';
import WeatherProvider from './provider/WeatherProvider';

function App() {
    return (
        <WeatherProvider>
            <Home />
        </WeatherProvider>
    );
}

export default App;
