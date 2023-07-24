import Banner from "../Banner/Banner";
import CollegeCard from "../CollegeCard/CollegeCard";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Search from "../Search/Search";

const Home = () => {
	return (
		<div>
			<Search></Search>
			<Banner></Banner>
			<CollegeCard></CollegeCard>
			<Gallery></Gallery>
			<Research></Research>
		</div>
	);
};

export default Home;
