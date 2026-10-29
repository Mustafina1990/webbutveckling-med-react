/**
 * Types for Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

export interface CurrentWeatherCondition {
    main: string;
    description: string;
    icon: string;
    id: number;
}

export interface CurrentWeatherData {
    name: string;
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: CurrentWeatherCondition[];
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
}