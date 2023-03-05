import { Heading } from "@chakra-ui/react";
import ExpensesTable from "components/ExpensesTable";

const Home = () => {
	return (
		<div data-testid="home-page">
			<Heading>Home</Heading>
			<ExpensesTable />
		</div>
	);
};

export default Home;
