import Banner from "../Banner/Banner";
import CollegeCard from "../CollegeCard/CollegeCard";
import Gallery from "../Gallery/Gallery";
import Search from "../Search/Search";

const Home = () => {
	return (
		<div>
			<Search></Search>
			<Banner></Banner>
			<CollegeCard></CollegeCard>
			<Gallery></Gallery>
		</div>
	);
};

export default Home;
