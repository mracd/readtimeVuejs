<?php

Route::apiResource('question','QuestionController');
Route::apiResource('category','CategoryController');
Route::apiResource('question/{question}/reply','ReplyController');

Route::post('/like/{reply}', 'LikesController@likeIt');
Route::delete('/like/{reply}', 'LikesController@unlikeIt');


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('signup', 'AuthController@signup');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});



