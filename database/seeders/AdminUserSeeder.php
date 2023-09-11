<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "name" => "Admin",
            "email" => "admin@gmail.com",
            "password" => Hash::make("12345"),
            "email_verified_at" => now(),
            'is_admin' => true
        ]);
        User::create([
            "name" => "Hữu Tình",
            "email" => "huutinh@gmail.com",
            "password" => Hash::make("12345"),
            "email_verified_at" => now(),
            'is_admin' => false
        ]);
        User::create([
            "name" => "Hoàng Công",
            "email" => "hoangcong@gmail.com",
            "password" => Hash::make("12345"),
            "email_verified_at" => now(),
        ]);
    }
}