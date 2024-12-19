import React from 'react';
import { CornerDownLeft } from 'lucide-react';

const CustomButton = ({
	children,
	onClick,
	className = "",
	icon: Icon = CornerDownLeft, // Default to CornerDownLeft, can be overridden
	iconPosition = "right", // Can be 'left' or 'right'
	disabled = false
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`
        relative px-6 py-3 rounded-full text-white
        flex items-center justify-center gap-2
        transition-all duration-200
        font-semibold
        disabled:opacity-50 disabled:cursor-not-allowed
        ${iconPosition === 'right' ? 'flex-row' : 'flex-row-reverse'}
        ${className}
      `}
			style={{
				background: 'linear-gradient(0, #F800C0 0%, #FE8A70 100%)',
				boxShadow: '0 4px 15px rgba(248, 0, 192, 0.3)',
			}}
		>
			{children}
			{Icon && (
				<Icon
					size={20}
					className={`
            transform transition-transform duration-200
            ${iconPosition === 'right' ? '-rotate-135' : 'rotate-45'}
          `}
				/>
			)}
		</button>
	);
};

export default CustomButton;
