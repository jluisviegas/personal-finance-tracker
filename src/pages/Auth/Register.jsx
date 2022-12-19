import React from 'react';

const Register = () => {
	// const [registerEmail, setRegisterEmail] = useState('');
	// const [registerPass, setRegisterPass] = useState('');

	return (
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 class="text-green-200 text-xl font-bold leading-tight tracking-tight md:text-2xl ">
						Create account
					</h1>
					<form
						class="space-y-4 md:space-y-6 md:w-80"
						action="submit"
						onSubmit={(e) => e.preventDefault()}
					>
						<div>
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="email@company.com"
								required=""
							/>
						</div>
						<div>
							<label
								for="password"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div>
							<label
								for="confirm-password"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Confirm password
							</label>
							<input
								type="confirm-password"
								name="confirm-password"
								id="confirm-password"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>

						<button
							type="submit"
							class="w-full text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Create an account
						</button>
						<p class="text-sm font-light text-gray-500 dark:text-gray-400">
							Already have an account?&nbsp;
							<a href="#" class="font-medium text-green-500 hover:underline">
								Login here
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
