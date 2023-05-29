@extends("Layout.layout")

@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">List Categories</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("admin.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">List Categories</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">

            <!--row open-->
            <div class="row">
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <h4> List Categories </h4>
                        </div>
                        <div class="card-body mb-3">
                            <div class="table-responsive">
                                @php
                                    $headArray = ["Category ID", "Name", "Actions"];
                                @endphp
                                <x-generaltable :head="$headArray">
                                    @foreach ($categories as $category)
                                        <tr>

                                            <td>{{ $category->id }}</td>
                                            <td>{{ $category->name_category }}</td>
                                            <td class="d-flex justify-content-around">
                                                <a data-toggle="collapse" href="#categoryCollapse{{$category->id}}" role="button" aria-expanded="false" aria-controls="collapseExample" class="btn btn-action btn-primary">Edit</a>
                                                <form class="px-2" action="{{ route("categories.destroyCategory",['id' => $category->id]) }}" method="post">
                                                    @csrf
                                                    @method("delete")
                                                    <button type="submit" class="btn btn-action btn-danger">Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">
                                                <div class="collapse" id="categoryCollapse{{$category->id}}">
                                                    <div class="card card-body">
                                                        <form method="POST" action="{{ route("categories.updateCategory", ["id" => $category->id]) }}" class="form-horizontal">
                                                            @method("PUT")
                                                            @csrf
                                                            <div class="form-group row">
                                                                <label class="col-md-3 form-label">Category Name</label>
                                                                <div class="col-md-9">
                                                                    <input type="text" class="form-control py-3" name="name_category" value="{{ $category->name_category }}">
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("name_category")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                            <button class="btn btn-default" type="submit">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                </x-generaltable>
                            </div>

                        </div>

                        <div class="card-header mt-5">
                            <h4> List Sub Categories </h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive ">
                                @php
                                    $headArray = ["Sub Category ID", "Name","Category Name", "Actions"];
                                @endphp
                                <x-generaltable :head="$headArray">
                                    @foreach ($subcategories as $subcategory)
                                        <tr>

                                            <td>{{ $subcategory->id }}</td>
                                            <td>{{ $subcategory->name_sub_category }}</td>
                                            <td>{{ $subcategory->categories->name_category }}</td>
                                            <td class="d-flex justify-content-around">
                                                <a data-toggle="collapse" href="#subcategoryCollapse{{$subcategory->id}}" role="button" aria-expanded="false" aria-controls="collapseExample" class="btn btn-action btn-primary">Edit</a>
                                                <form class="px-2" action="{{ route("categories.destroySubCategory",['id' => $subcategory->id]) }}" method="post">
                                                    @csrf
                                                    @method("delete")
                                                    <button type="submit" class="btn btn-action btn-danger">Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">
                                                <div class="collapse" id="subcategoryCollapse{{$subcategory->id}}">
                                                    <div class="card card-body">
                                                        <form method="POST" action="{{ route("categories.updateSubCategory", ["id" => $subcategory->id]) }}" class="form-horizontal">
                                                            @method("PUT")
                                                            @csrf
                                                            <div class="form-group row">
                                                                <label class="col-md-3 form-label">Category</label>
                                                                <div class="col-md-9">
                                                                    <select name="category_id" class="form-control select2 " >
                                                                        @foreach ($categories as $category)
                                                                            <option
                                                                            <?php if($subcategory->category_id == $category->id) {
                                                                                echo 'selected';
                                                                            } ?>
                                                                            value="{{ $category->id }}">
                                                                                {{ $category->name_category }}
                                                                            </option>
                                                                        @endforeach
                                                                    </select>
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("category_id")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-md-3 form-label">Sub Category Name</label>
                                                                <div class="col-md-9">
                                                                    <input type="text" class="form-control py-3" name="name_sub_category" value="{{ $subcategory->name_sub_category }}">
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("name_sub_category")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                            <button class="btn btn-default" type="submit">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                </x-generaltable>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <!--row closed-->
        </div>

    </section>
</div>

@endsection
