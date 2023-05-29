<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
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
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('MyApp')->accessToken;

        return response()->json(['token' => $token, "user" => $user], 200);
    }



    public function login(Request $request) {
        $credentials = $request->only('email', 'password');
        // return response()->json($credentials);


        if (Auth::attempt($credentials)) {
            if(Auth::user()->user_type == "student") {
                $user = User::with("student")->find(Auth::id());
            } else {
                $user = Auth::user();
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
        } else {
            $user = Auth::user();
        }
        return response()->json(["user" => $user]);
    }



    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response()->json(['logout' => true]);
    }
}
