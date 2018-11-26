<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        factory( \App\Models\User::class,10)->create();
        factory(\App\Models\Category::class,5)->create();
        factory(\App\Models\Question::class,10)->create();
        factory(\App\Models\Reply::class,50)->create()->each(function ($reply){
           return $reply->likes()->save(factory(\App\Models\Likes::class)->make());
        });
    }
}
