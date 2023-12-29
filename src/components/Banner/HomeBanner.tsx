import { StyledHomeBanner, StyledTextWrapper } from './Banner.styled';

const HomeBanner = () => {
  return (
    <StyledHomeBanner>
      <StyledTextWrapper>
        <div>
          <h1>Welcome to</h1>
          <h1>Intern Books</h1>
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
