<?php

namespace App\Http\Controllers\MentorDashboard;

use App\Http\Controllers\Controller;
use App\Models\Mentor;
use App\Models\Social;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class MentorController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("mentor");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("Mentor.dashboard");
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        $user = User::with("mentors","socials")
            ->where("id", auth()->user()->id)
            ->first();



        return view("Mentor.Profile.index", [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        //
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
        $mentor = Mentor::where("user_id", $id)->first();
        $socials = Social::where("user_id", $id)->first();

        // dd($request->all());

        $validator = Validator::make($request->all(), [

            "experience" => "numeric|max:100",

            "username" => "required|unique:users,username,". $id ."",
            "email" => 'required|unique:users,email,'. $id .'|max:255',
            // 'password' => 'min:8'

        ]);

        if($validator->fails()) {
            return redirect()->route("mentor.index")
            ->withErrors($validator)
            ->withInput();
        }

        $user->username = $request->username;
        $user->email = $request->email;

        if(request()->file("image") != null) {
            if($mentor->image != null) {
                Storage::delete($mentor->image);
            }
            $path = Storage::putFile("mentors", $request->file("image"));
        } else {
            $path = null;
        }

        $mentor->image = $path;
        $mentor->experience = $request->experience;
        $mentor->languages = $request->languages;
        $mentor->graduated = intval($request->graduated);
        $mentor->about_id = $request->about_id;
        $mentor->certifications = $request->certifications;

        $socials->facebook = $request->facebook;
        $socials->linkedin = $request->linkedin;
        $socials->twitter = $request->twitter;


        $user->save();
        $mentor->save();
        $socials->save();

        return redirect()->route("mentor.index");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
