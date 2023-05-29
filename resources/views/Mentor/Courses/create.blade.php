@extends("Layout.layout")


@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">Add Course</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("mentor.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Add Courses</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">

            <!--row open-->
            <div class="row">
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <h4> Add Course </h4>
                            <small>
                                Here the mentor shall add the course, course data shall be added in furthre steps.
                            </small>
                        </div>
                        <div class="card-body">
                            <form method="POST" action="{{route("course.store")}}" enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-lg-4">
                                        <input type="file" name="thumbnail" class="dropify" data-height="200"  />
                                        @error("thumbnail")
                                            <div class="text-danger mt-3">
                                                {{$message}}
                                            </div>
                                        @enderror
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="form-group ">
                                                    <label class="form-label">Name</label>
                                                    <div>
                                                        <input
                                                            value="{{old("name")}}"
                                                            type="text"
                                                            name="name"
                                                            class="form-control py-3"/>
                                                    </div>
                                                    @error("name")
                                                        <div class="text-danger">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group ">
                                                    <label class="form-label">Price</label>
                                                    <div>
                                                        <input
                                                            value="{{old("price")}}"
                                                            type="number"
                                                            name="price"
                                                            class="form-control py-3">
                                                    </div>
                                                    @error("price")
                                                        <div class="text-danger">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group ">
                                                        <label class="form-label">Sub Category</label>
                                                        <select  name="sub_category_id" class="form-control text-black-50 select2 w-100" >
                                                            @php
                                                                use App\Models\SubCategory;
                                                            @endphp
                                                            @foreach (SubCategory::all() as $subcategory)
                                                                <option
                                                                    value="{{$subcategory->id}}"
                                                                    >
                                                                    {{ $subcategory->name_sub_category }}
                                                                </option>
                                                            @endforeach
                                                        </select>

                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group ">
                                                    <label class="form-label">Description</label>
                                                    <textarea class="form-control" name="description" style="width: 100%; height: 100px !important;" >
                                                        {{old("description")}}
                                                    </textarea>
                                                    @error("description")
                                                        <div class="text-danger">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="col-lg-12 text-right">
                                                <button type="submit" class="btn btn-default px-5">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--row closed-->
        </div>

    </section>
</div>

@endsection
