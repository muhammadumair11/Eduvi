@extends("Layout.layout")

@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">Mentor Requests</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("admin.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Mentor Requests</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">

            <!--row open-->
            <div class="row">
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <h4> Mentor Requests </h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                @php
                                    $headArray = ["ID","User ID","Student ID","Status", "Actions"];
                                @endphp
                                <x-generaltable :head="$headArray">
                                    @foreach ($requests as $request)
                                        <tr>
                                            <td>{{ $request->id }}</td>
                                            <td>{{ $request->user_id }}</td>
                                            <td>{{ $request->student_id }}</td>
                                            <td>{{ $request->status }}</td>
                                            <td>
                                                <form class="px-2" action="{{ route("mentor.request.accept",['id' => $request->id]) }}" method="post">
                                                    @csrf
                                                    @method("PUT")
                                                    <button type="submit" class="btn btn-action btn-success">Accept</button>
                                                </form>
                                                <form class="px-2" action="{{ route("mentor.request.destroy",['id' => $request->id]) }}" method="post">
                                                    @csrf
                                                    @method("delete")
                                                    <button type="submit" class="btn btn-action btn-danger">Delete</button>
                                                </form>
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
