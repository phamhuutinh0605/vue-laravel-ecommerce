<x-app-layout>
    <x-auth-session-status class="mb-4" :status="session('status')" />
    <form action="{{ route('login') }}" method="post" class="w-[400px] mx-auto p-6 my-16">
        @csrf

        <h1 class="text-2xl font-semibold text-center mb-5">
            Login to your account
        </h1>
        <p class="text-center text-gray-500 mb-6">
            or
            <a href="{{ route('register') }}" class="text-sm text-indigo-700 hover:text-indigo-600">create new account</a>
        </p>
        <div class="mb-4">
            <x-input-label for="email" :value="__('Email')" />
            <input id="loginEmail" type="email" name="email"
                class="border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded-md w-full" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>
        <div class="mb-4">
            <x-input-label for="password" :value="__('Password')" />
            <input id="loginPassword" type="password" name="password"
                class="border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded-md w-full" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="flex justify-between items-center mt-4">
            <label for="remember_me" class="inline-flex items-center cursor-pointer">
                <input id="remember_me" type="checkbox"
                    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" name="remember">
                <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
            </label>
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 hover:text-indigo-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif
        </div>

        <x-primary-button class="mt-6">
            {{ __('Log in') }}
        </x-primary-button>

    </form>
</x-app-layout>
