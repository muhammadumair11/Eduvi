<?php

use App\Http\Controllers\AdminDashboard\AdminController;
use App\Http\Controllers\AdminDashboard\CategoriesController;
use App\Http\Controllers\AdminDashboard\MentorController;
use App\Http\Controllers\AdminDashboard\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('dashboard', [AdminController::class, "index"])->name("admin.dashboard");

// Add Admin

Route::get('users', [UsersController::class, "index"])->name("user.index");
Route::get('admins', [UsersController::class, "listadmins"])->name("user.admins");
Route::get('mentors', [UsersController::class, "listmentors"])->name("user.mentors");
Route::get('students', [UsersController::class, "liststudents"])->name("user.students");


Route::get('users/create', [UsersController::class, "create"])->name("user.create");
Route::post('users/create', [UsersController::class, "store"])->name("user.store");

Route::get('users/{id}', [UsersController::class, "show"])->name("user.show");
Route::get('users/{id}/edit', [UsersController::class, "edit"])->name("user.edit");
Route::put('users/{id}/edit', [UsersController::class, "update"])->name("user.update");
Route::delete('users/{id}/delete', [UsersController::class, "destroy"])->name("user.destroy");



// Add Categories


Route::get('categories',[CategoriesController::class, "index"])->name("categories.index");
Route::get('categories/create',[CategoriesController::class, "create"])->name("categories.create");

Route::post('categories/createCategory',[CategoriesController::class, "storeCategory"])->name("categories.storeCategory");
Route::post('categories/createSubCategory',[CategoriesController::class, "storeSubCategory"])->name("categories.storeSubCategory");

Route::put('categories/{id}/editCategory', [CategoriesController::class, "updateCategory"])->name("categories.updateCategory");
Route::put('categories/{id}/editSubCategory', [CategoriesController::class, "updateSubCategory"])->name("categories.updateSubCategory");

Route::delete('categories/{id}/deleteCategory', [CategoriesController::class, "destroyCategory"])->name("categories.destroyCategory");
Route::delete('categories/{id}/deleteSubCategory', [CategoriesController::class, "destroySubCategory"])->name("categories.destroySubCategory");










?>
