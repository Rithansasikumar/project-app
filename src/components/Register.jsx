import React, { useState } from 'react'
import CustomDropdown from './CustomDropdown'
import CustomInput from './CustomInput';
import OtpInput from './OtpInput';
import CustomButton from './CustomButton';
import Congratulation from '../assets/Congratulation.svg';

const Register = () => {

	const [selectedAccount, setSelectedAccount] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState([]);
	const [selectedEmailPhone, setSelectedEmailPhone] = useState(null);
	const [selectedEmailPhoneValue, setSelectedEmailPhoneValue] = useState(null);
	const [showOtp, setShowOtp] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const handleSubmit = () => {
		setShowOtp(true);
	};

	const handleOtpComplete = (otp) => {
		console.log('OTP Entered:', otp);
		setIsSubmit(true);
		// Handle OTP verification here
	};


	const accountOptions = [
		{ value: "business", label: "Business Account" },
		{ value: "individual", label: "Individual Account" }
	];

	const categoryOptions = [
		{ value: "property", label: "Property" },
		{ value: "motors", label: "Motors" },
		{ value: "influencer", label: "Influencer" },
		{ value: "talents", label: "Talents" },
		{ value: "job", label: "Job" },
		{ value: "venues", label: "Venues" },
		{ value: "hotels", label: "Hotels" },
		{ value: "education", label: "Education" },
		{ value: "healthcare", label: "Healthcare" },
		{ value: "crypto", label: "Crypto" }
	];

	const emailPhoneOptions = [
		{ value: "email", label: "Email" },
		{ value: "phone", label: "Phone" }
	];

	return (
		<div className="p-6 space-y-4 min-h-[400px]">
			<CustomDropdown
				placeholder="Your account type"
				options={accountOptions}
				value={selectedAccount}
				onChange={setSelectedAccount}
				type="default"
			/>

			{selectedAccount && (
				<CustomDropdown
					placeholder="Your category"
					options={categoryOptions}
					type="category"
					value={selectedCategory}
					onChange={setSelectedCategory}
				/>
			)}

			{selectedCategory.length > 0 && (
				<CustomDropdown
					placeholder="Verify your account"
					options={emailPhoneOptions}
					type="default"
					value={selectedEmailPhone}
					onChange={setSelectedEmailPhone}
				/>
			)}

			{selectedEmailPhone && !isSubmit && (
				<CustomInput
					placeholder="Your email or phone number"
					type="text"
					value={selectedEmailPhoneValue}
					onChange={setSelectedEmailPhoneValue}
				/>
			)}


			{showOtp && !isSubmit && (
				<OtpInput
					length={4}
					onComplete={handleOtpComplete}
				/>
			)}

			{selectedEmailPhone && !isSubmit && (
				<div className="flex justify-center mt-10">
					<CustomButton onClick={handleSubmit}>Receive OTP</CustomButton>
				</div>
			)}

			{isSubmit && (
				<div className="flex flex-col items-center text-center my-14 py-8">
					<img src={Congratulation} alt="Congratulation" className="w-full max-w-xs" />
					<div className="flex flex-col sm:flex-row gap-4 mt-6">
						<button
							className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:opacity-90"
							style={{
								background: 'linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)',
							}}
						>
							Visit Website
						</button>
						<button
							className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:opacity-90"
							style={{
								background: 'linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)',
							}}
						>
							Visit Dashboard
						</button>
					</div>
				</div>
			)}

		</div>
	)
}

export default Register