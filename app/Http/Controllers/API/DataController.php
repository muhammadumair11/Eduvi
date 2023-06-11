<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Course;
use App\Models\CourseCart;
use App\Models\CourseRating;
use App\Models\Mentor;
use App\Models\MentorRequest;
use App\Models\PurchasedCourses;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DataController extends Controller
{

    function search() {
        return response()->json(
            Course::search(
                request(["search", "sub_category"])
            )->get()
        );
    }
    public function mentors()
    {
        $mentors = Mentor::with(["users" => function ($q) {
            $q->join("socials", "socials.user_id", "users.id");
        }])->get();

        return response()->json($mentors);
    }


    // Categories
    public function categories()
    {
        return response()->json(
            Category::all()
        );
    }
    public function allsubcategories()
    {
        return response()->json(
            SubCategory::all()
        );
    }
    public function subcategories($id)
    {
        return response()->json(
            SubCategory::where("category_id", $id)->get()
        );
    }


    // Courses
    public function courses(Request $request)
    {
        if($request->all()) {
            return response()->json(
                // $request->sub_category
                Course::where("sub_category_id", $request->sub_category)->withAvg("courseratings", "rating")->get()
            );
        } else {
            return response()->json(
                Course::withAvg("courseratings", "rating")->get()
            );
        }
    }
    public function mentorsCourses($id)
    {
        return response()->json(
            Course::where("mentor_id", $id)->withAvg("courseratings", "rating")->get()
        );
    }

        // Cart
    public function course_cart()
    {
        return response()->json(
            CourseCart::with("course")->where("student_id", auth()->user()->student->id)->get()
        );
    }
    public function course_cart_add($id)
    {
        $student_id = auth()->user()->student->id;

        $courseExistsInCart = CourseCart::where("course_id", $id)->where("student_id", $student_id)->exists();
        $courseExistsInPurchasedList = PurchasedCourses::where("course_id", $id)->where("student_id", $student_id)->exists();

        if($courseExistsInCart || $courseExistsInPurchasedList) {
            return response()->json($courseExistsInCart ? "Item is already in the cart" : "Item already Purchased", 400);
        } else {
            CourseCart::create([
                "course_id" => $id,
                "student_id" => $student_id
            ]);

            return response()->json(
                CourseCart::with("course")->where("student_id", $student_id)->get()
            );
        }

    }
    public function course_cart_remove(Request $request)
    {
        $student_id = auth()->user()->student->id;

        foreach ($request->items as $value) {
            CourseCart::find($value)->delete();
        }

        return response()->json(
            CourseCart::with("course")->where("student_id", $student_id)->get()
        );
    }

    // Purchased Coursess

    public function purchased_courses()
    {
        return response()->json(
            PurchasedCourses::with("course")->where("student_id", auth()->user()->student->id)->get()
        );
    }
    public function purchased_courses_add(Request $request)
    {
        $student_id = auth()->user()->student->id;

        foreach ($request->items as $value) {
            if(PurchasedCourses::where("course_id", $value)->where("student_id", $student_id)->exists()) {
                return response()->json("Item already exists", 400);
            } else {
                CourseCart::where("course_id", $value)->delete();
                PurchasedCourses::create([
                    "course_id" => $value,
                    "student_id" => $student_id
                ]);
            }
        }

        return response()->json(
            [
                "cart" =>  CourseCart::with("course")->where("student_id", $student_id)->get(),
                "purchased_courses" => PurchasedCourses::with("course")->where("student_id", auth()->user()->student->id)->get()
            ]
        );
    }

    public function course_data($id)
    {
        $student_id = auth()->user()->student->id;

        if(PurchasedCourses::where("course_id", $id)->where("student_id", $student_id)->exists()) {
            return response()->json(
                Course::with(["data"])->withAvg("courseratings", "rating")->find($id)
            );
        } else {
            return response()->json("Purchase the course first Please", 400);
        }
    }



    // Mentor Request
    public function requestStatus()
    {
        $request = MentorRequest::where("user_id",auth()->user()->id);

        if($request->exists()) {

            return response()->json(
                $request->first()
            );
        } else {
            return response()->json(false);
        }
    }
    public function mentorRequest()
    {
        $request = MentorRequest::create([
            "user_id" => auth()->user()->id,
            "student_id" => auth()->user()->student->id
        ]);

        return response()->json($request);
    }

    public function courseRating(Request $request)
    {
        $student_id = auth()->user()->student->id;
        $course_id = $request->courseID;

        $updateCheck = CourseRating::where("course_id", $course_id)->where("student_id", $student_id)->exists();

        if($updateCheck) {
            $rating = CourseRating::where("course_id", $course_id)->where("student_id", $student_id)->first();
            $rating->rating = $request->rating;
            $rating->save();
        } else {
            CourseRating::create([
                "course_id" => $course_id,
                "student_id" => $student_id,
                "rating" => $request->rating
            ]);
        }

        return response()->json(
            Course::withAvg("courseratings", "rating")->get()
        );
    }
}
