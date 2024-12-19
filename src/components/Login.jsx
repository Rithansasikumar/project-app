import React, { useState } from 'react'
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isWrongCredentials, setIsWrongCredentials] = useState(false);

	const handleSignIn = () => {
		console.log(username, password);
		setIsWrongCredentials(true);
	}

	return (
		<div className="p-6 space-y-4 min-h-fit">
			<CustomInput
				placeholder="Enter your Username"
				type="text"
				value={username}
				onChange={setUsername}
			/>
			{username &&
				<CustomInput
					placeholder="Enter your Password"
					type="password"
					value={password}
					onChange={setPassword}
				/>
			}
			{isWrongCredentials &&
				<div className="flex flex-col gap-4 items-center w-full">
					<div className="w-full px-6 py-4 flex flex-col sm:flex-row justify-between items-center
						rounded-lg text-left bg-[#F800C0]/10 backdrop-blur-sm      
						border border-rose-500 border-opacity-50 text-[#F800C0]">
						<p>
							Wrong credentials! Please check the entered details
						</p>
						<button className="ml-2 text-white hover:opacity-80">
							Reset Password
						</button>
					</div>
					<div className="w-full flex justify-end text-[#F800C0]">
						Need help?
					</div>
				</div>
			}



			<div className="flex justify-center py-10">
				<CustomButton onClick={handleSignIn}>Sign In</CustomButton>
			</div>
		</div>
	)
}

export default Login;