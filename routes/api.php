<?php

use App\Http\Controllers\API\AuthApiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthApiController::class,'register']);
Route::post('login', [AuthApiController::class,'login']);

Route::middleware("auth:api")->group(function () {
    Route::get('refresh', [AuthApiController::class,'refresh']);
    Route::post('logout', [AuthApiController::class,'logout']);
});




