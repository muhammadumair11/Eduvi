@extends("Layout.layout")

@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">List Students</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("admin.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">List Students</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">

            <!--row open-->
            <div class="row">
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <h4> List Students </h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                @php
                                    $headArray = ["Student ID", "User ID", "Username", "Name", "Email", "User Type", "Actions"];
                                @endphp
                                <x-generaltable :head="$headArray">
                                    @foreach ($students as $student)
                                        <tr>

                                            <td>{{ $student->id }}</td>
                                            <td>{{ $student->users->id }}</td>
                                            <td>{{ $student->users->username }}</td>
                                            <td>{{ $student->users->name }}</td>
                                            <td>{{ $student->users->email }}</td>
                                            <td>{{ $student->users->user_type }}</td>
                                            <td class="d-flex justify-content-around">
                                                <a href="{{route("user.edit", ['id' => $student->users->id])}}" class="btn btn-action btn-primary">Edit</a>
                                                <form class="px-2" action="{{ route("user.destroy",['id' => $student->users->id]) }}" method="post">
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
