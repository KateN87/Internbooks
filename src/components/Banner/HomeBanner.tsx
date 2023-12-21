import { StyledHomeBanner, StyledTextWrapper } from './Banner.styled';

const HomeBanner = () => {
	return (
		<StyledHomeBanner>
			<StyledTextWrapper>
				<div>
					<h2>Welcome to</h2>
					<h2>Intern Books</h2>
				</div>
				<p>Your Gateway to Knowledge and Innovation!</p>
				<p>
					Discover a world of limitless possibilities as you dive into our
					extensive collection of books, specially curated for the tech-savvy
					minds of today.{' '}
				</p>
			</StyledTextWrapper>
		</StyledHomeBanner>
	);
};

export default HomeBanner;
