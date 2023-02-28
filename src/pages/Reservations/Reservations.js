import BookingForm from "../../component/bookings/BookingForm";
import BookingPage from "../../component/bookings/BookingPage";
import "./reservations.css";



const Reservations = () => {
  return (
		<div>
			<h2 style={{ textAlign:"center" }}>Make A Reservation </h2>
			<BookingPage/> 
			<BookingForm />
		</div>
	);
}
export default Reservations




// import BookingPage from "../../component/bookings/BookingPage";
// const Reservations = () => {
// 	return (
// 		<div>
// 			Reservations
// 			<BookingPage />
// 		</div>
// 	);
// };
// export default Reservations;
