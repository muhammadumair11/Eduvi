<?php

use App\Http\Controllers\API\AuthApiController;
use App\Http\Controllers\API\DataController;
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

Route::get('categories', [DataController::class,'categories']);
Route::get('subcategories', [DataController::class,'allsubcategories']);
Route::get('categories/{id}', [DataController::class,'subcategories']);
Route::get('mentors', [DataController::class,'mentors']);
Route::get('courses', [DataController::class,'courses']);
Route::get('mentorCourses/{id}', [DataController::class,'mentorsCourses']);


Route::middleware("auth:api")->group(function () {
    Route::get('refresh', [AuthApiController::class,'refresh']);



    Route::post('update', [AuthApiController::class,'update']);
    Route::post('logout', [AuthApiController::class,'logout']);
});




