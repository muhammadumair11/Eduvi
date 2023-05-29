<?php

namespace App\Http\Controllers\AdminDashboard;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Mentor;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("admin");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        $admins = Admin::with("users")->get();
        $mentors = Mentor::with("users")->get();
        $students = Student::with("users")->get();

        return view("Admin.dashboard", [
            'users' => $users,
            "admins" => $admins,
            "mentors" => $mentors,
            "students" => $students,
        ]);
    }

}
