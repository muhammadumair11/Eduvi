@extends('Layout.layout')

@section('content')
<div class="app-content">
					<section class="section">

					    <!--page-header open-->
						<div class="page-header pt-0">
							<h4 class="page-title">Dashboard</h4>
						</div>
						<!--page-header closed-->

                        <!--row open-->
                        <div class="row row-deck">
							<div class="col-sm-12 col-lg-6 col-xl-3 col-md-6">
								<div class="card text-center">
									<div class="card-body  mb-0">
									    <h5 class="mb-3">Total Users</h5>
										<input type="text" class="knob mb-0" value="{{ count($users) }}" data-thickness="0.2" data-width="90" data-height="90" data-fgColor="#767266"><br>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-lg-6 col-xl-3 col-md-6">
								<div class="card text-center">
									<div class="card-body  mb-0">
									    <h5 class="mb-3">Total Admins</h5>
										<input type="text" class="knob mb-0" value="{{ count($admins) }}" data-thickness="0.2" data-width="90" data-height="90" data-fgColor="#7673e6"><br>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-lg-6 col-xl-3 col-md-6">
								<div class="card text-center">
									<div class="card-body  mb-0">
									    <h5 class="mb-3">Total Mentors</h5>
										<input type="text" class="knob mb-0" value="{{ count($mentors)}}" data-thickness="0.2" data-width="90" data-height="90" data-fgColor="#ffb209"><br>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-lg-6 col-xl-3 col-md-6">
								<div class="card text-center">
									<div class="card-body  mb-0">
									    <h5 class="mb-3">Total Students</h5>
										<input type="text" class="knob mb-0" value="{{ count($students )}}" data-thickness="0.2" data-width="90" data-height="90" data-fgColor="#22e840"><br>
									</div>
								</div>
							</div>
						</div>
						<!--row closed-->


					</section>
				</div>
 @endsection
