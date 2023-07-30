@extends("Layout.layout")

@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title"></h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("mentor.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{$course->name}}</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">
            {{-- {{
                dd($course)
            }} --}}

            <!--row open-->
            <div class="row">
                <div class="col-12">
                </div>
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <h4> {{$course->name}} </h4>
                                <a href="{{route("course.create.data", ["id" => $course->id])}}">Add course data</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-4">
                                    <img class="img-fluid" src="{{ asset("storage/".$course->thumbnail) }}" alt="">
                                </div>
                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="form-group ">
                                                <label class="form-label">Name</label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        class="form-control py-3"
                                                        disabled
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
                                                        type="text"
                                                        class="form-control py-3"
                                                        disabled
                                                        value=" {{ $course->price }}"
                                                        ">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group ">
                                                    <label class="form-label">Sub Category</label>
                                                    <select disabled class="form-control text-black-50 select2 w-100" >
                                                        <option selected>{{ $course->subCategory->name_sub_category }}</option>
                                                    </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group ">
                                                <label class="form-label">Description</label>
                                                <div>
                                                    {{ $course->description }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 d-flex justify-content-end">
                                            <a href="{{ route("course.edit", ["id" => $course->id]) }}" class="btn btn-default px-5">Edit</a>
                                            <form class="px-2" action="{{ route("course.delete",['id' => $course->id]) }}" method="post">
                                                @csrf
                                                @method("delete")
                                                <button type="submit" class="btn btn-default px-5">Delete</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <h4> Course Data </h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                @php
                                    $headArray = ["Video", "Order", "Link", "Action"];
                                @endphp
                                    @if ($course->data->isEmpty())
                                    <span>No data so far</span>
                                    @else
                                    <div class="row">
                                        @foreach ($course->data as $item)
                                            <div class="col-lg-4">
                                                <div class="card">
                                                    <iframe src="{{$item->data}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Video's Order {{ $item->order }}</h5>
                                                        <small>Created at {{ $item->created_at->diffForHumans() }}</small>
                                                        <div class="my-3">
                                                            <span class="fw-bold">
                                                                Youtube's Link {{$item->data}}
                                                            </span>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <a href="{{ route("course.edit.data", ["id" => $item->id]) }}" class="btn btn-default">Edit</a>
                                                            <form action="{{ route("course.delete.data",['id' => $item->id]) }}" method="post">
                                                                @csrf
                                                                @method("delete")
                                                                <button type="submit" style="width: 100%;" class=" btn btn-default px-5">Delete</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                    @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--row closed-->
        </div>
    </section>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p class="mb-0">Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
