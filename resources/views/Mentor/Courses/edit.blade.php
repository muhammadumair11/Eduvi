@extends("Layout.layout")


@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">List Courses</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("mentor.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">List Courses</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">

            <!--row open-->
            <div class="row">
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <h4> List Users </h4>
                        </div>
                        <div class="card-body">
                            <form method="POST" action="{{route("course.update", ["id" => $course->id])}}" enctype="multipart/form-data">
                                @method("PUT")
                                @csrf
                                <div class="row">
                                    <div class="col-lg-4">
                                        @if ($course->thumbnail)
                                        <input type="file" name="thumbnail" class="dropify" data-height="200" data-default-file="{{asset("storage/".$course->thumbnail)}}" />
                                        @else
                                        <input type="file" name="thumbnail" class="dropify" data-height="200"  />
                                        @endif
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
                                                            type="text"
                                                            name="name"
                                                            class="form-control py-3"
                                                            value=" {{ $course->name }}"
                                                            ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group ">
                                                    <label class="form-label">Price</label>
                                                    <div>
                                                        <input
                                                            type="number"
                                                            name="price"
                                                            class="form-control py-3"
                                                            value="{{$course->price}}"
                                                            ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group ">
                                                        <label class="form-label">Sub Category</label>
                                                        <select name="sub_category_id" class="form-control text-black-50 select2 w-100" >
                                                            @php
                                                                use App\Models\SubCategory;
                                                            @endphp
                                                            @foreach (SubCategory::all() as $subcategory)
                                                                <option
                                                                    <?php
                                                                        if($course->subCategory->id == $subcategory->id) {
                                                                            echo "selected";
                                                                        }
                                                                    ?>
                                                                    value="{{$subcategory->id}}">
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
                                                        {{$course->description}}
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 text-right">
                                                <button type="submit" class="btn btn-default px-5">Update</button>
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
