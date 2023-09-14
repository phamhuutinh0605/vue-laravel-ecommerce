<button
    {{ $attributes->merge(['type' => 'submit', 'class' => 'btn-primary bg-emerald-500 hover:bg-emerald-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition w-full px-3 py-2 rounded-md mt-2 text-white']) }}>
    {{ $slot }}
</button>
