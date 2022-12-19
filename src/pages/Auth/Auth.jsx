import React, { useEffect, useState } from 'react';

const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div class="flex flex-col items-center justify-center px-6 mx-auto h-screen lg:py-0">
			<div class=" bg-gray-800 rounded-lg shadow">
				<div class="p-6 space-y-2 md:space-y-6 sm:p-8">
					<h1 class="text-xl font-bold leading-tight tracking-tight text-green-200 md:text-2xl">
						Login
					</h1>
					<form
						class="space-y-4 md:space-y-6 md:w-80"
						action="#"
						onSubmit={(e) => e.preventDefault()}
					>
						<div>
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-white"
							>
								E-mail
							</label>
							<input
								type="email"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								id="email"
								placeholder="email@company.com"
								class="bg-gray-700 text-gray-900 border rounded-lg focus:ring-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-500 focus:border-blue-500"
								required=""
							/>
						</div>
						<div>
							<label
								for="password"
								class="block mb-2 text-sm font-medium text-white"
							>
								Password
							</label>
							<input
								type="password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								id="password"
								placeholder="••••••••"
								class="bg-gray-700 text-gray-900 sm:text-sm border rounded-lg focus:ring-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-500 focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="flex items-center justify-between">
							<a
								href="#"
								class="text-xs font-medium text-gray-600 hover:text-gray-500 hover:underline"
							>
								Forgot password?
							</a>
						</div>
						<button
							type="submit"
							class="w-full text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Sign in
						</button>
						<p class="text-xs font-light text-gray-500 dark:text-gray-400">
							Don’t have an account?&nbsp;
							<a
								href="/register"
								class="font-medium text-green-500 hover:underline"
							>
								Sign up
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Auth;
