<?php

namespace App\Http\Controllers\AdminDashboard;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Mentor;
use App\Models\Social;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
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
        $data = User::all();

        return view('Admin.ManageUsers.index', [
            "users" => $data,
        ]);
    }
    /**
     * Display a listing of the Admins.
     *
     * @return \Illuminate\Http\Response
     */
    public function listadmins()
    {
        $data = Admin::with("users")->get();

        return view('Admin.ManageUsers.admin', [
            "admins" => $data,
        ]);
    }
    /**
     * Display a listing of the Mentors.
     *
     * @return \Illuminate\Http\Response
     */
    public function listmentors()
    {
        $data = Mentor::with("users")->get();


        return view('Admin.ManageUsers.mentors', [
            "mentors" => $data,
        ]);
    }
    /**
     * Display a listing of the Mentors.
     *
     * @return \Illuminate\Http\Response
     */
    public function liststudents()
    {
        $data = Student::with("users")->get();


        return view('Admin.ManageUsers.student', [
            "students" => $data,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("Admin.ManageUsers.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //


        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users,username|max:50',
            'name' => 'required|max:100',
            'email' => 'required|unique:users,email|max:255',
            'password' => 'required|min:8'
        ]);

        if($validator->fails()) {
            return redirect()->route("user.create")
            ->withErrors($validator)
            ->withInput();
        }

        $user = User::create([
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'user_type' => $request->user_type
        ]);

        switch ($user->user_type) {
            case 'admin':
                Admin::create([
                    'user_id' => $user->id
                ]);
                # code...
            break;
            case 'mentor':
                Mentor::create([
                    'user_id' => $user->id
                ]);
                Social::create([
                    "user_id" => $user->id
                ]);
                # code...
            break;
            case 'student':
                Student::create([
                    'user_id' => $user->id
                ]);
                Social::create([
                    "user_id" => $user->id
                ]);
                # code...
            break;

            default:
                # code...
                break;
        }

        return redirect()->route("user.index");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);

        return view('Admin.ManageUsers.edit', [
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users,username,'. $user->id .'|max:50',
            'name' => 'required|max:100',
            'email' => 'required|unique:users,email,'. $user->id .'|max:255',
        ]);


        if($validator->fails()) {
            return redirect()->route("user.edit", ["id" => $id])
            ->withErrors($validator)
            ->withInput();
        }



        $user->username = $request->username;
        $user->name = $request->name;
        $user->email = $request->email;


        /*
            This following logic update user types accordingly,

            the first condition checks if a user is an admin and wants to become a mentor,

            1: The ID is searched in admin table
            2: With that ID the user is deleted from admin table
            3: Mentor is created with user ID
            4: User type is changed in User Table
            5: The User is saved

            End: The user is deleted from admin table and with new ID a new user is created in Mentor table, while updating the user table.

            The same Logic is repeated accoringly for other cases in other conditionals.
        */

        if($request->user_type == 'mentor') {
            Admin::with("users")->where("user_id",$request->id)->delete();
            Student::with("users")->where("user_id",$request->id)->delete();

            Mentor::create([
                'user_id' => $request->id
            ]);

            $user->user_type = $request->user_type;
            $user->save();
        } elseif($request->user_type == 'admin') {
            Mentor::with("users")->where("user_id",$request->id)->delete();
            Student::with("users")->where("user_id",$request->id)->delete();

            Admin::create([
                'user_id' => $request->id
            ]);
            $user->user_type = $request->user_type;
            $user->save();
        } elseif($request->user_type == 'student') {
            Admin::with("users")->where("user_id",$request->id)->delete();
            Mentor::with("users")->where("user_id",$request->id)->delete();

            Student::create([
                'user_id' => $request->id
            ]);
            $user->user_type = $request->user_type;
            $user->save();
        }

        return redirect()->route("user.index");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $admin = Admin::with('users')->where("user_id", $id)->delete();
        $mentor = Mentor::with('users')->where("user_id", $id)->delete();
        $user = User::find($id)->delete();

        return redirect()->route("user.index");
    }
}
