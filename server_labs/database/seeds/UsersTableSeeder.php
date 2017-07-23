<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      User::create([
        'name' => 'Carlos Beltran',
        'email' => 'canti89@gmail.com',
        'password' => bcrypt('secret')
      ]);
    }
}
