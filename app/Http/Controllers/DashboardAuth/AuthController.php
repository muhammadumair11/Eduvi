<?php

namespace App\Http\Controllers\DashboardAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index()
    {
        return view("login");
    }
    public function login(Request $request)
    {
        # code...
        $credentials = $request->only("email","password");
        if (Auth::attempt($credentials) && Auth::user()->user_type != "student") {
            // Authentication passed...
            if(Auth::user()->user_type == "admin") {
                return redirect("/admin/dashboard");
            } elseif (Auth::user()->user_type == "mentor") {
                # code...
                return redirect("/mentor/dashboard");
            }
        }
        return redirect('/');
    }
    public function logout()
    {
        # code...
        Auth::logout();
        return redirect("/");
    }

}
