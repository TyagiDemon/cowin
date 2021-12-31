import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeroBottom from "./components/HeroBottom";
function App() {
  return (
		<div className="w-full">
			<Navbar />
			<Hero />
			<HeroBottom />
		</div>
	);
}

export default App;
