import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeroBottom from "./components/HeroBottom";
import ForChildren from "./components/ForChildren";
import ShareStatus from "./components/ShareStatus";
import SearchVaccinationCenter from "./components/SearchVaccinationCenter";
import NewOnCowin from "./components/NewOnCowin";
import Certificate from "./components/Certificate";
import RaiseIssue from "./components/RaiseIssue";
import Steps from "./components/Steps";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
function App() {
  return (
		<div className="w-full">
			<Navbar />
			<Hero />
			<HeroBottom />
			<ForChildren />
			<ShareStatus />
			<SearchVaccinationCenter />
			<NewOnCowin />
			<Certificate />
			<RaiseIssue />
			<Steps />
			<Partners />
			<Footer />
		</div>
	);
}

export default App;
