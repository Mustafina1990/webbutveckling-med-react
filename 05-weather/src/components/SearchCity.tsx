import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

interface SearchCityProps {
	onSearch: (location: string) => Promise<void>;
}

function SearchCity({ onSearch }: SearchCityProps) {
	const [city, setCity] = useState("");

	const handleSubmit = (e: React.SubmitEvent) => {
       e.preventDefault();

	   if(isCityInvalid) {
		return;
	   }

	   onSearch(city);

	   setCity("");
	}

	const isCityInvalid = city.trim().length > 0 && city.trim().length < 3;

	return (
		<div id="search-wrapper">
			<Form id="search-form" onSubmit={handleSubmit}>
				<Form.Label htmlFor="city-input">City</Form.Label>

				<InputGroup>
					<Form.Control
						id="city-input"
						type="text"
						placeholder="Enter a city"
						autoComplete="off"
						onChange={e => setCity(e.target.value)}
						minLength={3}
						value={city}
						isInvalid={isCityInvalid}
						required
					/>
					<Button 
					type="submit" 
					variant="primary" 
					disabled={isCityInvalid}
					>Search</Button>

					<FormControl.Feedback tooltip type="invalid">
						Please enter at least 3 characters
					</FormControl.Feedback>
				</InputGroup>
			</Form>
		</div>
	);
}

export default SearchCity;
