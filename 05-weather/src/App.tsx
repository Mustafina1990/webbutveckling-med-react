import Container from "react-bootstrap/Container";
import CurrentWeather from "./components/CurrentWeather";
import SearchCity from "./components/SearchCity";
import "./assets/scss/App.scss";
import { getCurrentWeather } from "./services/OWMAPI";
import { useState } from "react";
import type { CurrentWeatherData } from "./services/OWMAPI.types";

function App() {
	const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData | null>(null);

    const handelSearch = async (location: string) => {
        const data = await getCurrentWeather(location);
		setCurrentWeather(data);
	}

	return (
		<Container as="main" id="app">
			<header className="app-header">
				<h1>Weather</h1>
			</header>

			<SearchCity onSearch={handelSearch} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
		</Container>
	);
}

export default App;
