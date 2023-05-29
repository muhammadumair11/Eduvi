<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Course;
use App\Models\Mentor;
use App\Models\SubCategory;

class DataController extends Controller
{
    public function mentors()
    {
        $mentors = Mentor::with(["users" => function ($q) {
            $q->join("socials", "socials.user_id", "users.id");
        }])->get();

        return response()->json($mentors);
    }

    public function courses()
    {
        return response()->json(
            Course::all()
        );
    }
    public function categories()
    {
        return response()->json(
            Category::all()
        );
    }
    public function subcategories($id)
    {
        return response()->json(
            SubCategory::where("category_id", $id)->get()
        );
    }
    public function mentorsCourses($id)
    {
        return response()->json(
            Course::where("mentor_id", $id)->get()
        );
    }
}
