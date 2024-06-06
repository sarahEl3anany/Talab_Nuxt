<?php
use App\Http\Controllers\UserController;

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', [UserController::class, 'login']);
});