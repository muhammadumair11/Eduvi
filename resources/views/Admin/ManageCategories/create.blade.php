@extends("Layout.layout")


@section('content')
<div class="app-content">
					<section class="section">

                        <!--page-header open-->
						<div class="page-header pt-0">
							<h4 class="page-title">Add Categories & Sub Categories</h4>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="{{ route("admin.dashboard")}}" class="text-light-color">Dashboard</a></li>
								<li class="breadcrumb-item active" aria-current="page">Add Categories</li>
							</ol>
						</div>
						<!--page-header closed-->


                        <!--row open-->
						<div class="row">
							<div class="col-12 ">
								<div class="card">
									<div class="card-header">
										<h4>Categories Form</h4>
									</div>
									<div class="card-body">
										<form method="POST" action="{{ route("categories.storeCategory") }}" class="form-horizontal">
                                            @csrf
											<div class="form-group row">
												<label class="col-md-3 form-label">Category Name</label>
												<div class="col-md-9">
													<input type="text" class="form-control" name="name_category" value="{{ old("name_category") }}">
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
							</div>
							<div class="col-12 ">
								<div class="card">
									<div class="card-header">
										<h4>Sub Categories Form</h4>
									</div>
									<div class="card-body">
										<form method="POST" action="{{ route("categories.storeSubCategory") }}" class="form-horizontal">
                                            @csrf
                                            <div class="form-group row">
                                                <label class="col-md-3 form-label">Category</label>
                                                <div class="col-md-9">
                                                    <select name="category_id" class="form-control select2 " >
                                                        @foreach ($categories as $category)
                                                            <option value="{{ $category->id }}">{{ $category->name_category }}</option>
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
													<input type="text" class="form-control" name="name_sub_category" value="{{ old("name_sub_category") }}">
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
							</div>
						</div>
						<!--row close-->
					</section>
				</div>
 @endsection
