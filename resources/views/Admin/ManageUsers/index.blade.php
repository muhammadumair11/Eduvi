@extends("Layout.layout")

@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">List Users</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("admin.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">List Users</li>
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
                            <div class="table-responsive">
                                @php
                                    $headArray = ["User ID", "Username", "Name", "Email", "User Type", "Actions"];
                                @endphp
                                <x-generaltable :head="$headArray">
                                    @foreach ($users as $user)
                                        <tr>

                                            <td>{{ $user->id }}</td>
                                            <td>{{ $user->username }}</td>
                                            <td>{{ $user->name }}</td>
                                            <td>{{ $user->email }}</td>
                                            <td>{{ $user->user_type }}</td>
                                            <td class="d-flex justify-content-around">
                                                <a href="{{route("user.edit", ['id' => $user->id])}}" class="btn btn-action btn-primary">Edit</a>
                                                <form class="px-2" action="{{ route("user.destroy",['id' => $user->id]) }}" method="post">
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
