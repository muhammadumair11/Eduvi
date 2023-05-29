<?php

namespace App\Http\Controllers\AdminDashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends Controller
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
        $categories = Category::all();
        $subcategories = SubCategory::with("categories")->get();

        return view("Admin.ManageCategories.index", [
            "categories" => $categories,
            'subcategories' => $subcategories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();


        return view("Admin.ManageCategories.create", [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCategory(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name_category" => 'required|unique:categories,name_category'
        ]);

        if($validator->fails()) {
            // dd($validator);
            return redirect()->route("categories.create")
                                ->withErrors($validator)
                                ->withInput();
        }

        Category::create([
            "name_category" => $request->name_category
        ]);

        return redirect()->route("categories.index");
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeSubCategory(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name_sub_category" => "required|unique:sub_categories,name_sub_category",
            "category_id" => "required",
        ]);

        if($validator->fails()) {
            // dd($validator);
            return redirect()->route("categories.create")
                                ->withErrors($validator)
                                ->withInput();
        }

        SubCategory::create([
            "name_sub_category" => $request->name_sub_category,
            "category_id" => $request->category_id
        ]);


        return redirect()->route("categories.index");
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
    public function updateCategory(Request $request, $id)
    {
        $category = Category::find($id);

        $validator = Validator::make($request->all(), [
            "name_category" => "unique:categories,name_category,".$id."|required",
        ]);

        if($validator->fails()) {
            return redirect()->route("categories.index",["#categoryCollapse".$id])
                                ->withErrors($validator)
                                ->withInput();
        }

        $category->name_category = $request->name_category;

        $category->save();

        return redirect()->route("categories.index");
    }
    public function updateSubCategory(Request $request, $id)
    {
        $subcategory = SubCategory::find($id);

        $validator = Validator::make($request->all(), [
            "name_sub_category" => "unique:sub_categories,name_sub_category,".$id."|required",
            "category_id" => "required",
        ]);

        if($validator->fails()) {
            return redirect()->route("categories.index",["#subcategoryCollapse".$id])
                                ->withErrors($validator)
                                ->withInput();
        }

        $subcategory->name_sub_category = $request->name_sub_category;
        $subcategory->category_id = $request->category_id;

        $subcategory->save();

        return redirect()->route("categories.index");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroyCategory($id)
    {
        Category::find($id)->delete();

        return redirect()->route("categories.index");
    }
    public function destroySubCategory($id)
    {
        SubCategory::find($id)->delete();

        return redirect()->route("categories.index");
    }
}
