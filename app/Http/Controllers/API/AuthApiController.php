<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Mentor;
use App\Models\Social;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AuthApiController extends Controller
{
    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users,username|max:50',
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user = User::create([
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            "user_type" => "student"
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

        $token = $user->createToken('MyApp')->accessToken;

        return response()->json(['token' => $token, "user" => $user], 200);
    }



    public function login(Request $request) {
        $credentials = $request->only('email', 'password');
        // return response()->json($credentials);


        if (Auth::attempt($credentials)) {
            if(Auth::user()->user_type == "student") {
                $user = User::with("student")->find(Auth::id());
            } else if(Auth::user()->user_type == "mentor") {
                $user = User::with("mentors")->find(Auth::id());
            } else {
                $user = User::with("admins")->find(Auth::id());
            }
            $token = $user->createToken('MyApp')->accessToken;
            return response()->json(['token' => $token, "user" => $user], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function update(Request $request)
    {
        $user = User::with("student")->find(auth()->user()->id);


        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users,username,'. $user->id .'|max:50',
            'name' => 'required',
            'email' => 'required|unique:users,email,'. $user->id .'|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        if($request->file("file") != null) {
            if($user->student->image != null) {
                Storage::delete($user->student->image);
            }
            $path = Storage::putFile("students", $request->file("file"));
        } else {
            $path = $user->student->image;
        }

        $user->username = $request->username;
        $user->name = $request->name;
        $user->email = $request->email;

        $student = Student::find($user->student->id);
        $student->image = $path;


        $user->save();
        $student->save();


        return response()->json(["user" => $user]);
    }

    public function test(Request $request)
    {
        // return response()->json($request->all());


        if($request->hasFile("file")) {
        } else {
            return response()->json("no file");
        }
    }




    public function refresh(Request $request) {
        if(Auth::user()->user_type == "student") {
            $user = User::with("student")->find(Auth::id());
        } else if(Auth::user()->user_type == "mentor") {
            $user = User::with("mentors")->find(Auth::id());
        } else {
            $user = User::with("admins")->find(Auth::id());
        }
        return response()->json(["user" => $user]);
    }



    public function logout() {
        if(auth()->user()->token()->revoke()) {
            return response()->json(['logout' => true]);
        } else {
            return response()->json(['logout' => false]);
        }
    }
}
