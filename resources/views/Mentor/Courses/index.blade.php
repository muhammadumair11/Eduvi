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
                            <h4> List Courses </h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                @foreach ($courses as $course)
                                    <div class="col-lg-4">
                                        <div class="card">
                                            <img class="card-img-top" src="{{ asset("storage/".$course->thumbnail) }}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">{{ $course->name }}</h5>
                                                <small>Created at {{ $course->created_at->diffForHumans() }}</small>
                                                <p class="card-text">{{ Str::limit($course->description, 100, '...') }}</p>
                                                <div class="h3">
                                                    <span class="fw-bold">
                                                        RS {{$course->price}}
                                                    </span>
                                                </div>
                                                <a href="{{route("course.show", ["id" => $course->id])}}" class="btn btn-primary">Show more</a>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
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
