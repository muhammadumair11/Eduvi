@extends("Layout.layout")


@section('content')
<div class="app-content">
					<section class="section">

                        <!--page-header open-->
						<div class="page-header pt-0">
							<h4 class="page-title">Profile</h4>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="{{ route("admin.dashboard")}}" class="text-light-color">Dashboard</a></li>
								<li class="breadcrumb-item active" aria-current="page">Profile</li>
							</ol>
						</div>
						<!--page-header closed-->


                        <!--row open-->
						<div class="row">
							<div class="col-12 ">
								<div class="card">
									<div class="card-header">
										<h4>Profile Form</h4>
									</div>
									<div class="card-body">
										<form method="POST" action="{{ route("mentor.update", ["id" => $user->id]) }}" class="form-horizontal" enctype="multipart/form-data">
                                            @method("PUT")
                                            @csrf
                                            <div class="row">
                                                <div class="col-lg-4">
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                    @if ($user->mentors->image)
                                                                    <input type="file" name="image" class="dropify" data-height="200" data-default-file="{{asset("storage/".$user->mentors->image)}}"  />
                                                                    @else
                                                                    <input type="file" name="image" class="dropify" data-height="200" />
                                                                    @endif
                                                                @error("image")
                                                                    <div class="text-danger mt-3">
                                                                        {{$message}}
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group ">
                                                                    <label class="form-label">Facebook</label>
                                                                    <div>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            name="facebook"
                                                                            value=" {{ $user->socials->facebook }}"
                                                                            value=" {{ old("facebook") }}">
                                                                    </div>
                                                                    <div class="col-lg-3"></div>
                                                                    @error("facebook")
                                                                        <div class="col-lg-9 py-2">
                                                                            <div class=" text-danger">{{$message}}</div>
                                                                        </div>
                                                                    @enderror
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group ">
                                                                    <label class="form-label">Linkedin</label>
                                                                    <div>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            name="linkedin"
                                                                            value=" {{ $user->socials->linkedin }}">
                                                                    </div>
                                                                    <div class="col-lg-3"></div>
                                                                    @error("linkedin")
                                                                        <div class="col-lg-9 py-2">
                                                                            <div class=" text-danger">{{$message}}</div>
                                                                        </div>
                                                                    @enderror
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group ">
                                                                    <label class="form-label">Twitter</label>
                                                                    <div>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            name="twitter"
                                                                            value=" {{ $user->socials->twitter }}">
                                                                    </div>
                                                                    <div class="col-lg-3"></div>
                                                                    @error("twitter")
                                                                        <div class="col-lg-9 py-2">
                                                                            <div class=" text-danger">{{$message}}</div>
                                                                        </div>
                                                                    @enderror
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="form-group ">
                                                                <label class="form-label">User name</label>
                                                                <div>
                                                                    <input type="text" class="form-control" name="username" value="{{ $user->username }}">
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("username")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group ">
                                                                <label class="form-label">Name</label>
                                                                <div>
                                                                    <input type="text" class="form-control" name="name" value="{{ $user->name }}">
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("name")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group ">
                                                                <label class="form-label">Experience</label>
                                                                <div>
                                                                    <input type="number" class="form-control" name="experience" value="{{ $user->mentors->experience }}">
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("experience")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group ">
                                                                    <label class="form-label">Graduated</label>
                                                                    <select name="graduated" class="form-control text-black-50 select2 w-100" >
                                                                        <option <?php if($user->mentors->graduated == '1') {
                                                                            echo 'selected';
                                                                        } ?> value="1" >Yes</option>
                                                                        <option <?php if($user->mentors->graduated == '0') {
                                                                            echo 'selected';
                                                                        } ?> value="0" >No</option>
                                                                    </select>
                                                            </div>
                                                                @error("graduated")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group ">
                                                                <label class="form-label">Languages
                                                                    <small class="text-danger">(Sperate them with commas)</small>
                                                                </label>
                                                                <div>
                                                                    <input type="text" class="form-control" name="languages" value="{{ $user->mentors->languages }}">
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("languages")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="form-group ">
                                                                <label class="form-label">Email</label>
                                                                <div>
                                                                    <input type="email" class="form-control" name="email" value="{{ $user->email }}">
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("email")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="form-group ">
                                                                <label class="form-label">New Password</label>
                                                                <div>
                                                                    <input type="password" class="form-control" name="password" value="{{ old("password") }}">
                                                                </div>
                                                                <div class="col-lg-3"></div>
                                                                @error("password")
                                                                    <div class="col-lg-9 py-2">
                                                                        <div class=" text-danger">{{$message}}</div>
                                                                    </div>
                                                                @enderror
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 py-5">
                                                            <label class="form-label">About me</label>
                                                            <textarea id="aboutme_editor" name="about_id" >
                                                                {{
                                                                    $user->mentors->about_id
                                                                }}
                                                            </textarea>
                                                            {{-- <div id="summernote"></div> --}}
                                                        </div>
                                                        <div class="col-lg-12 py-5">
                                                            <label class="form-label">Certifications</label>
                                                            <textarea id="certifications_editor" name="certifications">
                                                                {{
                                                                    $user->mentors->certifications
                                                                }}
                                                            </textarea>
                                                        </div>

                                                        <div class="col-lg-6 mt-5">
                                                            <button class="btn btn-default" type="submit">Update profile</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

										</form>
									</div>
								</div>
							</div>
						</div>
						<!--row close-->
					</section>
				</div>

 @endsection
