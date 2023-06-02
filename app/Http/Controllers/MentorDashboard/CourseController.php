<?php

namespace App\Http\Controllers\MentorDashboard;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::where("mentor_id", auth()->user()->mentors->id)->get();

        return view("Mentor.Courses.index", [
            "courses" => $courses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("Mentor.Courses.create");
    }
    public function createCourseData($id)
    {
        return view("Mentor.Courses.createcoursedata", [
            'course' => Course::with("subCategory", "data")->find($id)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $path = Storage::putFile("thumbnails", $request->file("thumbnail"));

        Course::create(array_merge($this->validateCourse(true), [
            "mentor_id" => auth()->user()->mentors->id,
            "sub_category_id" => request("sub_category_id"),
            'thumbnail' => $path
        ]));

        return redirect()->route("course.index");
    }
    public function storeCourseData(Request $request, $id)
    {
        $course = Course::with("subCategory", "data")->find($id);

        CourseContent::create([
            "course_id" => $course->id,
            "type" => $request->type,
            "order" => $request->order,
            "data" => $request->data
        ]);

        return redirect()->route("course.show", ["id" => $course->id]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // dd(Course::with("subCategory")->find($id));
        return view("Mentor.Courses.show", [
            'course' => Course::with(["subCategory", "data" => function ($query) {
                $query->orderBy("order", "ASC");
            }])->find($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view("Mentor.Courses.edit", [
            'course' => Course::with("subCategory")->find($id)
        ]);
    }
    public function editCourseData($id)
    {
        return view("Mentor.Courses.editcoursedata", [
            'coursecontent' => CourseContent::find($id)
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
        // $this->validateCourse(false);

        $course = Course::find($id);

        if(request()->file("thumbnail") != null) {
            if($course->thumbnail != null) {
                Storage::delete($course->thumbnail);
            }
            $path = Storage::putFile("thumbnails", $request->file("thumbnail"));
        } else {
            $path = $course->thumbnail;
        }


        $course->name = request()->name;
        $course->description = request()->description;
        $course->thumbnail = $path;
        $course->price = request()->price;
        $course->sub_category_id = request()->sub_category_id;

        $course->save();

        return redirect()->route("course.show", ["id" => $course->id]);
    }
    public function updateCourseData(Request $request, $id)
    {
        $courseContent = CourseContent::find($id);

        $request->validate([
            "data" => "unique:course_contents,data,".$courseContent->id,
        ]);


        $courseContent->type = $request->type;
        $courseContent->order = $request->order;
        $courseContent->data = $request->data;

        $courseContent->save();

        return redirect()->route("course.show", ["id" => $courseContent->course->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Course::find($id)->delete();
        CourseContent::where("course_id", $id)->delete();

        return redirect()->route("course.index");
    }
    public function destroyCourseContent($id)
    {
        $courseContent = CourseContent::find($id);
        $courseId = $courseContent->course->id;
        $courseContent->delete();

        return redirect()->route("course.show", ["id" => $courseId]);
    }

    protected function validateCourse($newCourse)
    {
        return request()->validate([
            "name" => "required",
            "description" => "required",
            'thumbnail' => $newCourse ? ["image","required"] : "",
            "price" => "required"
        ]);
    }
}
