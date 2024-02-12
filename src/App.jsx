import Home from './pages/Home';
import FavouriteListProvider from './provider/FavouriteListProvider';
import LocationProvider from './provider/LocationProvider';
import WeatherProvider from './provider/WeatherProvider';

function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavouriteListProvider>
                    <Home />
                </FavouriteListProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}

export default App;
