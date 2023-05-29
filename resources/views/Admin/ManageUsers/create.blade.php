@extends("Layout.layout")


@section('content')
<div class="app-content">
					<section class="section">

                        <!--page-header open-->
						<div class="page-header pt-0">
							<h4 class="page-title">Add Users</h4>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="{{ route("admin.dashboard")}}" class="text-light-color">Dashboard</a></li>
								<li class="breadcrumb-item active" aria-current="page">Add Users</li>
							</ol>
						</div>
						<!--page-header closed-->


                        <!--row open-->
						<div class="row">
							<div class="col-12 ">
								<div class="card">
									<div class="card-header">
										<h4>Users Form</h4>
									</div>
									<div class="card-body">
										<form method="POST" action="{{ route("user.store") }}" class="form-horizontal">
                                            @csrf
											<div class="form-group row">
												<label class="col-md-3 form-label">User name</label>
												<div class="col-md-9">
													<input type="text" class="form-control" name="username" value="{{ old("username") }}">
												</div>
                                                <div class="col-lg-3"></div>
                                                @error("username")
                                                    <div class="col-lg-9 py-2">
                                                        <div class=" text-danger">{{$message}}</div>
                                                    </div>
                                                @enderror
											</div>
											<div class="form-group row">
												<label class="col-md-3 form-label">Name</label>
												<div class="col-md-9">
													<input type="text" class="form-control" name="name" value="{{ old("name") }}">
												</div>
                                                <div class="col-lg-3"></div>
                                                @error("name")
                                                    <div class="col-lg-9 py-2">
                                                        <div class=" text-danger">{{$message}}</div>
                                                    </div>
                                                @enderror
											</div>
											<div class="form-group row">
												<label class="col-md-3 form-label">Email</label>
												<div class="col-md-9">
													<input type="email" class="form-control" name="email" value="{{ old("email") }}">
												</div>
                                                <div class="col-lg-3"></div>
                                                @error("email")
                                                    <div class="col-lg-9 py-2">
                                                        <div class=" text-danger">{{$message}}</div>
                                                    </div>
                                                @enderror
											</div>
											<div class="form-group row">
                                                <div class="col-md-3">
                                                    <label class="form-label">User Type</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <select name="user_type" class="form-control text-black-50 select2 w-100" >
                                                        <option value="student" selected="selected">Student</option>
                                                        <option value="mentor">Mentor</option>
                                                        <option value="admin">Admin</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-3"></div>
                                                @error("user_type")
                                                    <div class="col-lg-9 py-2">
                                                        <div class=" text-danger">{{$message}}</div>
                                                    </div>
                                                @enderror
											</div>
											<div class="form-group row">
												<label class="col-md-3 form-label">Password</label>
												<div class="col-md-9">
													<input type="password" class="form-control" name="password" value="{{ old("password") }}">
												</div>
                                                <div class="col-lg-3"></div>
                                                @error("password")
                                                    <div class="col-lg-9 py-2">
                                                        <div class=" text-danger">{{$message}}</div>
                                                    </div>
                                                @enderror
											</div>
                                            <button class="btn btn-default" type="submit">Submit</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						<!--row close-->
					</section>
				</div>
 @endsection
