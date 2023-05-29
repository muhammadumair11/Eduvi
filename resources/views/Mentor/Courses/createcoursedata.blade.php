@extends("Layout.layout")


@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">Add Course Data</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("mentor.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Add Course Data</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">

            <!--row open-->
            <div class="row">
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <h4> Add Course Data</h4>
                        </div>
                        <div class="card-body">
                            <form method="POST" action="{{route("course.create.data", ["id" => $course->id])}}" enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group ">
                                                        <label class="form-label">Type</label>
                                                        <select  name="type" class="form-control text-black-50 select2 w-100" >
                                                            @php
                                                                $types = ["Video"]
                                                            @endphp
                                                            @endphp
                                                            @foreach ($types as $type)
                                                                <option
                                                                    value="{{$type}}"
                                                                    >
                                                                    {{ $type }}
                                                                </option>
                                                            @endforeach
                                                        </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group ">
                                                    <label class="form-label">Order</label>
                                                    <div>
                                                        <input
                                                            type="number"
                                                            name="order"
                                                            class="form-control py-3"
                                                            value="{{old("order")}}"
                                                            ">
                                                        </div>
                                                    </div>
                                                    @error("order")
                                                        <div class="text-danger">
                                                            {{$message}}
                                                        </div>
                                                    @enderror
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group ">
                                                    <label class="form-label">Video Link</label>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            name="data"
                                                            class="form-control py-3"
                                                            value="{{old("data")}}"
                                                            ">
                                                        </div>
                                                    </div>
                                                    @error("data")
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
