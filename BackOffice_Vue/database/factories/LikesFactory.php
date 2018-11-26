<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Likes::class, function (Faker $faker) {
    return [
        'user_id' => function ()
        {
            return \App\Models\User::all()->random();
        },
        'reply_id' => function()
        {
            return \App\Models\Reply::all()->random();
        }
    ];
});
