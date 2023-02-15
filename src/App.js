import "./App.css";
// import Header from "./component/Header";
// import Main from "./component/Main";
// import Nav from "./component/Nav";

//  import Menu from "./pages/Menu"
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
//    import Reservations from "./pages/reservations/Reservations";
import Order from "./pages/order/Order";
import Error from "./pages/error/Error";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./component/Footer";

function App() {
	return (
		<>
			{/* <Header /> */}
			{/* <Nav /> */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route></Route>
					{/* <Route path = "/" element = {<Navbar/>}/> */}
					{/* <Route path = "/" element = {<Navbar/>}></Route> */}
					{/* <Main /> */}

					{/* Home */}
					{/* <Menu/>  */}
					{/* <Reservations/> */}
					{/* <Order/> */}
					{/* <Error/> */}
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
