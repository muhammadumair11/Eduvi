<?php

use App\Http\Controllers\AdminDashboard\AdminController;
use App\Http\Controllers\DashboardAuth\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware(['guest'])->group(function () {
    Route::get('/', [AuthController::class, "index"])->name("login");
    Route::post('login', [AuthController::class, "login"]);
});


Route::middleware(['auth'])->group(function () {
    Route::get("/logout", [AuthController::class, "logout"])->middleware("auth");

    Route::prefix("admin")->group(base_path('routes/base/admin.php'));
    Route::prefix("mentor")->group(base_path("routes/base/mentor.php"));
});

        Route::get('/formadvance', function () {
            return view('formadvance');
        });


        Route::get('/form', function () {
            return view('form');
        });
        Route::get('/table', function () {
            return view('table');
        });
        Route::get('/datatables', function () {
            return view('datatables');
        });
        Route::get('/userlist', function () {
            return view('userlist');
        });
        Route::get('/models', function () {
            return view("models");
        });



// Route::middleware(["admin"])->group(function () {


//     Route::get('/dashboard', function () {
//         return view('dashboard');
//     });
//     Route::get('/profile', function () {
//         return view('profile');
//     });
//

// });

// Route::middleware(['mentor'])->group(function () {

//     Route::get('/dashboard', function () {
//         return view('dashboard');
//     });
//     Route::get('/profile', function () {
//         return view('profile');
//     });
//     Route::get('/register', function () {
//         return view('register');
//     });
//     Route::get('/formadvance', function () {
//         return view('formadvance');
//     });


//     Route::get('/form', function () {
//         return view('form');
//     });
//     Route::get('/table', function () {
//         return view('table');
//     });
//     Route::get('/datatables', function () {
//         return view('datatables');
//     });
//     Route::get('/userlist', function () {
//         return view('userlist');
//     });
// });



