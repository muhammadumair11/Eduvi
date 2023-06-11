<x-headfooter>



		<!--Header Style -->
		<div class="wave -three"></div>

		<!--loader -->
		<div id="spinner"></div>

		<!--app open-->
		<div id="app" class="page">
			<div class="main-wrapper" >

			    <!--nav open-->
				<nav class="navbar navbar-expand-lg main-navbar">
					<a class="header-brand text-white font-bold" href="{{route("admin.dashboard")}}">
                        @if (auth()->user()->isAdmin())
                        Eduvi Admin Dashboard
                        @else
                        Eduvi Mentor Dashboard
                    @endif
					</a>
					<form class="form-inline mr-auto">

					</form>
					<ul class="navbar-nav navbar-right">
						<li class="dropdown dropdown-list-toggle d-none d-lg-block">
							<a href="#" class="nav-link nav-link-lg full-screen-link">
								<i class="fa fa-expand " id="fullscreen-button"></i>
							</a>
						</li>
						<li class="dropdown"><a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg d-flex">
								<span class="mr-3 mt-2 d-none d-lg-block ">
                                    @if (auth()->user()->isAdmin())
                                        <span class="text-white">Admin</span>
                                    @else
                                        <span class="text-white">Mentor</span>
                                    @endif
								</span>
							<span>
                                <img src="{{asset('assets/img/avatar/avatar-3.jpeg')}}" alt="profile-user" class="rounded-circle w-32 mr-2">
                            </span>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="{{route("admin.dashboard")}}"><i class="mdi mdi-account-outline mr-2"></i> <span>Dashboard</span></a>
								<div class="dropdown-divider"></div><a class="dropdown-item" href="{{ url('logout') }}"><i class="mdi  mdi-logout-variant mr-2"></i> <span>Logout</span></a>
							</div>
						</li>
					</ul>
				</nav>
				<!--nav closed-->

                <!--aside open-->
				<aside class="app-sidebar">
					<div class="app-sidebar__user">
						<div class="dropdown user-pro-body text-center">
							<div class="user-info">
								<h6 class=" mb-1 text-dark">{{ auth()->user()->name }}</h6>
								<span class="text-muted app-sidebar__user-name text-sm"> {{"@".auth()->user()->username}}</span>
							</div>
						</div>
					</div>
					@if (auth()->user()->isAdmin())
                        <x-adminsidebar></x-adminsidebar>
                    @else
                        <x-mentorsidebar></x-mentorsidebar>
                    @endif
				</aside>
				<!--aside closed-->

                <!--app-content open-->
				@yield('content')
				<!--app-content closed-->

			</div>




			</div>




        </x-headfooter>
