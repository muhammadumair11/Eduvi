<?php

use App\Http\Controllers\MentorDashboard\CourseController;
use App\Http\Controllers\MentorDashboard\MentorController;
use Illuminate\Support\Facades\Route;

Route::get("dashboard", [MentorController::class, "index"])->name("mentor.dashboard");

Route::get("profile", [MentorController::class, "profile"])->name("mentor.index");
Route::put("profile/{id}/update", [MentorController::class, "update"])->name("mentor.update");


// Courses

Route::get("course", [CourseController::class, "index"])->name("course.index");

Route::get('course/create', [CourseController::class, "create"])->name("course.create");
Route::post('course/create', [CourseController::class, "store"])->name("course.store");

Route::get("course/{id}", [CourseController::class, "show"])->name("course.show");

Route::get('course/{id}/createcoursedata', [CourseController::class, "createCourseData"])->name("course.create.data");
Route::post('course/{id}/createcoursedata', [CourseController::class, "storeCourseData"])->name("course.store.data");

Route::get('course/{id}/editcoursedata', [CourseController::class, "editCourseData"])->name("course.edit.data");
Route::put('course/{id}/updatecoursedata', [CourseController::class, "updateCourseData"])->name("course.update.data");


Route::get("course/{id}/edit", [CourseController::class, "edit"])->name("course.edit");
Route::put("course/{id}/update", [CourseController::class, "update"])->name("course.update");

Route::delete("course/{id}/delete", [CourseController::class, "destroy"])->name("course.delete");
Route::delete("course/{id}/deletecoursedata", [CourseController::class, "destroyCourseContent"])->name("course.delete.data");


?>
