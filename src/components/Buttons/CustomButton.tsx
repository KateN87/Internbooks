import { StyledButton } from './CustomButton.styled';

type ButtonType = {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	text: string;
	className: 'small' | 'medium' | 'large';
	disabled?: boolean;
	type?: 'submit';
};

const CustomButton = ({
	text,
	className,
	disabled,
	onClick,
	type,
}: ButtonType) => {
	return (
		<StyledButton
			className={className}
			disabled={disabled}
			onClick={onClick}
			type={type}
		>
			{text}
		</StyledButton>
	);
};

export default CustomButton;
