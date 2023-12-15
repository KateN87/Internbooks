import { StyledErrorContainer } from './ErrorContainer.styled';

type ErrorProps = {
	message: string;
};

export const ErrorContainer = ({ message }: ErrorProps) => {
	return (
		<StyledErrorContainer>
			<p>{message}</p>
		</StyledErrorContainer>
	);
};

export default ErrorContainer;
