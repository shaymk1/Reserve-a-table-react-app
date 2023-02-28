import "./bookingform.css";
import React, { useState } from "react";
import Calendar from "react-calendar";

export default function BookingForm({
	date,
	handleDateChange,
	defaultTime,
	availableTimes,
	defaultGuests,
	defaultOccasion,
	availableOcassions,
	onSubmit,
}) {
	const [formData, setFormData] = useState({
		date,
		name: "",
		time: defaultTime,
		guests: defaultGuests,
		occasion: defaultOccasion,
		phone: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		if (event.target.checkValidity()) {
			onSubmit(formData);
		}
	};

	const handleFieldChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<div className="flexbox-calendar-booking-form" id="reservations-section">
				<h1>Reservation</h1>
				<Calendar
					onChange={handleDateChange}
					value={date}
					aria-label="Select a date for your reservation"
				/>
			</div>
			<div className="flexbox-details-booking-form">
				<form
					className="grid-details-booking-form"
					aria-labelledby="booking-form-heading"
				>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleFieldChange}
						required
						aria-required="true"
					/>
					<label htmlFor="phone">Phone</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleFieldChange}
						required
						aria-required="true"
					/>
					<label htmlFor="res-time">Choose time</label>
					<select
						id="res-time"
						name="time"
						value={formData.time}
						onChange={handleFieldChange}
						required
						aria-required="true"
						aria-label="Select a time for your reservation"
					>
						{/* {availableTimes.map((time) => (
							<option key={time}>{time}</option>
						))} */}
					</select>
					<label htmlFor="guests">Number of guests</label>
					<input
						type="number"
						placeholder="1"
						min="1"
						max="12"
						id="guests"
						name="guests"
						value={formData.guests}
						onChange={handleFieldChange}
						required
						aria-required="true"
						aria-label="Select the number of guests for your reservation"
					/>
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						name="occasion"
						value={formData.occasion}
						onChange={handleFieldChange}
						required
						aria-required="true"
						aria-label="Select an occasion for your reservation"
					>
						<option value="" disabled hidden>
							Select an occasion
						</option>
						{/* {availableOcassions.map((occasion) => (
							<option key={occasion}>{occasion}</option>
						))} */}
					</select>

					<button
						type="submit"
						onClick={handleSubmit}
						value="Make Your reservation"
						disabled={!formData.name || !formData.phone}
						aria-label="Submit your reservation"
					>
						Make Your reservation
					</button>
				</form>
			</div>
		</>
	);
}

// const BookingForm = () => {
// 	return (
// 		<section className="form__section">
// 			<form action="" className="form">
// 				<label for="res-date" className="res-date-label">
// 					Choose Date
// 				</label>
// 				<input type="date" id="res-date" />
// 				<label for="res-time">Choose Time</label>
// 				<select id="res-time " className="select">
// 					<option>17:00</option>
// 					<option>18:00</option>
// 					<option>19:00</option>
// 					<option>20:00</option>
// 					<option>21:00</option>
// 					<option>22:00</option>
// 				</select>
// 				<label for="guests">Number Of Guests</label>
// 				<select id="res-time " className="select">
// 					<option>1</option>
// 					<option>2</option>
// 					<option>3</option>
// 					<option>4</option>
// 					<option>5</option>
// 					<option>6</option>
// 					<option>More than 6</option>
// 				</select>
// 				{/* <input type="number" placeholder="1" min="1" max="10" id="guests" /> */}

// 				<label for="occasion">Occasion</label>
// 				<select id="occasion">
// 					<option>Birthday</option>
// 					<option>Anniversary</option>
// 					<option>Just Dinner</option>
// 					<option>Other Celebrations</option>
// 				</select>
// 				<input
// 					type="submit"
// 					value="Make Your reservation"
// 					className="btn-primary"
// 				/>
// 			</form>
// 		</section>
// 	);
// };

// export default BookingForm;
