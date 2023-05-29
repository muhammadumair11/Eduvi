@extends("Layout.layout")

@section("content")

<div class="app-content">
    <section class="section">

        <!--page-header open-->
        <div class="page-header pt-0">
            <h4 class="page-title">List Admins</h4>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{route("admin.dashboard")}} class="text-light-color">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">List Admins</li>
            </ol>
        </div>
        <!--page-header closed-->

        <div class="section-body">

            <!--row open-->
            <div class="row">
                <div class="col-12">
                    <div class="card Advance-table">
                        <div class="card-header">
                            <h4> List Admin </h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">

                                @php
                                    $headArray = ["Admin ID", "User ID", "Username", "Name", "Email", "User Type", "Actions"];
                                @endphp
                                <x-generaltable :head="$headArray">
                                    @foreach ($admins as $admin)
                                        <tr>
                                            <td>{{ $admin->id }}</td>
                                            <td>{{ $admin->users->id }}</td>
                                            <td>{{ $admin->users->username }}</td>
                                            <td>{{ $admin->users->name }}</td>
                                            <td>{{ $admin->users->email }}</td>
                                            <td>{{ $admin->users->user_type }}</td>
                                            <td class="d-flex justify-content-around">
                                                <a href="{{route("user.edit", ['id' => $admin->users->id])}}" class="btn btn-action btn-primary">Edit</a>
                                                <form class="px-2" action="{{ route("user.destroy",['id' => $admin->users->id]) }}" method="post">
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
