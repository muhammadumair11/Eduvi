@extends("Layout.layout")

@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">List Mentors</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("admin.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">List Mentors</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">

            <!--row open-->
            <div class="row">
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <h4> List Mentors </h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                @php
                                    $headArray = ["Mentor ID", "User ID", "Username", "Name", "Email", "User Type", "Actions"];
                                @endphp
                                <x-generaltable :head="$headArray">
                                    @foreach ($mentors as $mentor)
                                        <tr>

                                            <td>{{ $mentor->id }}</td>
                                            <td>{{ $mentor->users->id }}</td>
                                            <td>{{ $mentor->users->username }}</td>
                                            <td>{{ $mentor->users->name }}</td>
                                            <td>{{ $mentor->users->email }}</td>
                                            <td>{{ $mentor->users->user_type }}</td>
                                            <td class="d-flex justify-content-around">
                                                <a href="{{route("user.edit", ['id' => $mentor->users->id])}}" class="btn btn-action btn-primary">Edit</a>
                                                <form class="px-2" action="{{ route("user.destroy",['id' => $mentor->users->id]) }}" method="post">
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
