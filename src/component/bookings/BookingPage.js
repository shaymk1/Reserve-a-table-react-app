import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
import {fetchAPI,submitAPI} from "../../temp.js"


export function initializeTimes() {
	const today = new Date();
	const availableTimes = fetchAPI(today);
	return availableTimes;
}

export function updateTimes(state, date) {
	const selectedDate = date;
	const availableTimes = fetchAPI(selectedDate);
	return availableTimes;
}

export default function BookingPage() {
	const [date, setDate] = useState(new Date());
	const navigate = useNavigate();

	const availableOcassions = ["Birthday", "Anniversary"];

	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);

	const defaultTime = availableTimes[0];
	const defaultGuests = 1;
	const defaultOccasion = availableOcassions[0];

	function submitForm(formData) {
		const success = submitAPI(formData);
		if (success) {
			navigate("/confirmed-booking");
		}
	}

	const handleDateChange = (date) => {
		setDate(date);
		dispatch(date);
	};

	return (
		<section className="flexbox-booking-page">
			<BookingForm
				date={date}
				handleDateChange={handleDateChange}
				defaultTime={defaultTime}
				availableTimes={availableTimes}
				defaultGuests={defaultGuests}
				defaultOccasion={defaultOccasion}
				availableOcassions={availableOcassions}
				onSubmit={submitForm}
			/>
		</section>
	);
}



// const BookingPage = () => {
// 	return <div>bookingPage</div>;
// };
// export default BookingPage;
