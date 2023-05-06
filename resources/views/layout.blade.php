<!DOCTYPE html>
<html lang="en">
	<head>

		<meta charset="UTF-8">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
		<meta content="Splite - a responsive, flat and full featured admin template" name="description">
	    <meta content="Spruko Technologies Private Limited" name="author">
		<meta name="keywords" content="bootstrap admin template,bootstrap dashboard,dashboard template,bootstrap dashboard,admin dashboard,bootstrap admin,html admin template,html dashboard template,bootstrap admin dashboard,themeforest admin template,admin panel template,bootstrap 4 admin template,template admin bootstrap 4,bootstrap dashboard template,dashboard design template">
		<link rel="icon" href="{{asset('assets/img/brand/favicon.icon')}}" type="image/x-icon"/>
		<link rel="shortcut icon" type="image/x-icon" href="{{asset('assets/img/brand/favicon.icon')}}" />
		<title>Laravel Admin</title>


		<!--Bootstrap.min css-->
		<link rel="stylesheet" href="{{asset('assets/plugins/bootstrap/css/bootstrap.min.css')}}">

		<!--Style css-->
		<link rel="stylesheet" href="{{asset('assets/css/style.css')}}">

		<!--Icons css-->
		<link rel="stylesheet" href="{{asset('assets/css/icons.css')}}">

		<!--P-scrollbar css-->
		<link href="{{asset('assets/plugins/p-scroll/perfect-scrollbar.css')}}" rel="stylesheet"/>

		<!--Sidemenu css-->
		<link rel="stylesheet" href="{{asset('assets/css/sidemenu.css')}}">

		<!--Chartist css-->
		<link rel="stylesheet" href="{{asset('assets/plugins/chartist/chartist.css')}}">
		<link rel="stylesheet" href="{{asset('assets/plugins/chartist/chartist-plugin-tooltip.css')}}">

		<!--Full calendar css-->
		<link rel="stylesheet" href="{{asset('assets/plugins/fullcalendar/stylesheet1.css')}}">

		<!--morris css-->
		<link rel="stylesheet" href="{{asset('assets/plugins/morris/morris.css')}}">
		<!--mutli css-->
		<link rel="stylesheet" href="{{asset('assets/plugins/multi/multi.min.css')}}">
	<!--Select2 css-->
<link rel="stylesheet" href="{{asset('assets/plugins/select2/select2.css')}}">

<!--mutipleselect css-->
<link rel="stylesheet" href="{{asset('assets/plugins/multipleselect/multiple-select.css')}}">

<!--Tempusdominus css-->
<link rel="stylesheet" href="{{asset('assets/plugins/tempusdominus-bootstrap-4/tempusdominus-bootstrap-4.css')}}">
<!--Datatables css-->
<link rel="stylesheet" href="{{asset('assets/plugins/Datatable/css/dataTables.bootstrap4.css')}}">
<link rel="stylesheet" href="{{asset('assets/plugins/Datatable/css/buttons.bootstrap4.min.css')}}">
</head>

	<body class="app ">

		<!--Header Style -->
		<div class="wave -three"></div>

		<!--loader -->
		<div id="spinner"></div>

		<!--app open-->
		<div id="app" class="page">
			<div class="main-wrapper" >

			    <!--nav open-->
				<nav class="navbar navbar-expand-lg main-navbar">
					<a class="header-brand" href="index.html">
						<img src="{{asset('assets/img/brand/logo-white.png')}}" class="header-brand-img" alt="Splite-Admin  logo">
					</a>
					<form class="form-inline mr-auto">
						<ul class="navbar-nav mr-2">
							<li><a href="#" data-toggle="sidebar" class="nav-link nav-link toggle"><i class="fa fa-reorder"></i></a></li>
							<li><a href="#" data-toggle="search" class="nav-link nav-link d-md-none navsearch"><i class="fa fa-search"></i></a></li>
						</ul>
						<div class="search-element mr-3">
							<input class="form-control" type="search" placeholder="Search" aria-label="Search">
							<span class="Search-icon"><i class="fa fa-search"></i></span>
						</div>
					</form>
					<ul class="navbar-nav navbar-right">
					    <li class="dropdown dropdown-list-toggle d-none d-lg-block "><a href="#" data-toggle="dropdown" class="nav-link  nav-link-lg "><i class=" fa fa-flag-o "></i></a>
							<div class="dropdown-menu dropdown-menu-lg  dropdown-menu-right">
								<a href="#" class="dropdown-item d-flex align-items-center">
									<img src="{{asset('assets/img/flags/french_flag.jpg')}}" alt="flag-img" class=" flag-sm mr-3 align-self-center">
									<div>
										<strong>French</strong>
									</div>
								</a>
								<a href="#" class="dropdown-item d-flex align-items-center">
									<img src="{{asset('assets/img/flags/germany_flag.jpg')}}" alt="flag-img" class=" flag-sm mr-3 align-self-center">
									<div>
										<strong>Germany</strong>
									</div>
								</a>
								<a href="#" class="dropdown-item d-flex align-items-center">
									<img src="{{asset('assets/img/flags/italy_flag.jpg')}}" alt="flag-img" class=" flag-sm  mr-3 align-self-center">
									<div>
										<strong>Italy</strong>
									</div>
								</a>
								<a href="#" class="dropdown-item d-flex align-items-center">
									<img src="{{asset('assets/img/flags/russia_flag.jpg')}}" alt="flag-img" class=" flag-sm mr-3 align-self-center">
									<div>
										<strong>Russia</strong>
									</div>
								</a>
								<a href="#" class="dropdown-item d-flex align-items-center">
									<img src="{{asset('assets/img/flags/spain_flag.jpg')}}" alt="flag-img" class=" flag-sm mr-3 align-self-center">
									<div>
										<strong>Spain</strong>
									</div>
								</a>
							</div>
						</li>
						<li class="dropdown dropdown-list-toggle "><a href="#" data-toggle="dropdown" class="nav-link  nav-link-lg "><span class="badge badge-danger nav-link-badge">5</span><i class="hvr-buzz fa fa-envelope-o"></i></a>
							<div class="dropdown-menu dropdown-list dropdown-menu-right">
								<div class="dropdown-header">Messages
									<div class="float-right">
										<a href="#" class="text-white">View All</a>
									</div>
								</div>
								<div class="dropdown-list-content">
									<a href="#" class="dropdown-item dropdown-item-unread">
										<img alt="image" src="{{asset('assets/img/avatar/avatar-3.jpeg')}}" class="rounded-circle dropdown-item-img">
										<div class="dropdown-item-desc">
											<div class="dropdownmsg d-flex">
												<div class="">
													<b>Stewart Ball</b>
													<p>Your template awesome</p>
												</div>
												<div class="time">6 hours ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="dropdown-item dropdown-item-unread">
										<img alt="image" src="{{asset('assets/img/avatar/avatar-2.jpeg')}}" class="rounded-circle dropdown-item-img">
										<div class="dropdown-item-desc">
											<div class="dropdownmsg d-flex">
												<div class="">
													<b>Jonathan North</b>
													<p>Your Order Shipped.....</p>
												</div>
												<div class="time">45 mins ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="dropdown-item">
										<img alt="image" src="{{asset('assets/img/avatar/avatar-4.jpeg')}}" class="rounded-circle dropdown-item-img">
										<div class="dropdown-item-desc">
											<div class="dropdownmsg d-flex">
												<div class="">
													<b>Victor Taylor</b>
													<p>Hi!, I' am web developer</p>
												</div>
												<div class="time"> 8 hours ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="dropdown-item">
										<img alt="image" src="{{asset('assets/img/avatar/avatar-3.jpeg')}}" class="rounded-circle dropdown-item-img">
										<div class="dropdown-item-desc">
											<div class="dropdownmsg d-flex">
												<div class="">
													<b>Ruth	Arnold</b>
													<p>Hi!, I' am web designer</p>
												</div>
												<div class="time"> 3 hours ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="dropdown-item">
										<img alt="image" src="{{asset('assets/img/avatar/avatar-5.jpeg')}}" class="rounded-circle dropdown-item-img">
										<div class="dropdown-item-desc">
											<div class="dropdownmsg d-flex">
												<div class="">
													<b>Sam	Lyman</b>
													<p>Hi!, I' am java developer</p>
												</div>
												<div class="time"> 15 mintues ago</div>
											</div>
										</div>
									</a>
								</div>
							</div>
						</li>
						<li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" class="nav-link  nav-link-lg "><span class="badge badge-secondary nav-link-badge">6</span><i class="fa fa-bell-o"></i></a>
							<div class="dropdown-menu dropdown-list dropdown-menu-right">
								<div class="dropdown-header">Notifications
									<div class="float-right">
										<a href="#" class="text-white">View All</a>
									</div>
								</div>
								<div class="dropdown-list-content">
									<a href="#" class="dropdown-item">
										<i class="fa fa-users text-primary"></i>
										<div class="dropdown-item-desc">
											<b>So many Users Visit your template</b>
										</div>
									</a>
									<a href="#" class="dropdown-item">
										<i class="fa fa-exclamation-triangle text-danger"></i>
										<div class="dropdown-item-desc">
											<b>Error message occurred....</b>
										</div>
									</a>
									<a href="#" class="dropdown-item">
										<i class="fa fa-users text-warning"></i>
										<div class="dropdown-item-desc">
											<b> Adding new people</b>
										</div>
									</a>
									<a href="#" class="dropdown-item">
										<i class="fa fa-shopping-cart text-success"></i>
										<div class="dropdown-item-desc">
											<b>Your items Arrived</b>
										</div>
									</a>
									<a href="#" class="dropdown-item">
										<i class="fa fa-comment text-primary"></i>
										<div class="dropdown-item-desc">
											<b>New Message received</b> <div class="float-right"><span class="badge badge-pill badge-danger badge-sm">67</span></div>
										</div>
									</a>
									<a href="#" class="dropdown-item">
										<i class="fa fa-users text-primary"></i>
										<div class="dropdown-item-desc">
											<b>So many Users Visit your template</b>
										</div>
									</a>
								</div>
							</div>
						</li>
						<li class="dropdown dropdown-list-toggle d-none d-lg-block">
							<a href="#" class="nav-link nav-link-lg full-screen-link">
								<i class="fa fa-expand " id="fullscreen-button"></i>
							</a>
						</li>
						<li class="dropdown"><a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg d-flex">
								<span class="mr-3 mt-2 d-none d-lg-block ">
									<span class="text-white">Hello,<span class="ml-1"> Alica Nestle</span></span>
								</span>
							<span><img src="{{asset('assets/img/avatar/avatar-3.jpeg')}}" alt="profile-user" class="rounded-circle w-32 mr-2"></span>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<div class=" dropdown-header noti-title text-center border-bottom pb-3">
									<h5 class="text-capitalize text-dark mb-1">Alica Nestle</h5>
									<small class="text-overflow m-0"> Web-Designer</small>
								</div>
								<a class="dropdown-item" href="profile.html"><i class="mdi mdi-account-outline mr-2"></i> <span>My profile</span></a>
								<a class="dropdown-item" href="#"><i class="mdi mdi-settings mr-2"></i> <span>Settings</span></a>
								<a class="dropdown-item" href="#"><i class=" mdi mdi-message-outline mr-2"></i> <span>Mails</span></a>
								<a class="dropdown-item" href="#"><i class=" mdi mdi-account-multiple-outline mr-2"></i> <span>Friends</span></a>
								<a class="dropdown-item" href="#"><i class="fe fe-calendar mr-2"></i> <span>Activity</span></a>
								<a class="dropdown-item" href="#"><i class="mdi mdi-compass-outline mr-2"></i> <span>Support</span></a>
								<div class="dropdown-divider"></div><a class="dropdown-item" href="login.html"><i class="mdi  mdi-logout-variant mr-2"></i> <span>Logout</span></a>
							</div>
						</li>
					</ul>
				</nav>
				<!--nav closed-->

                <!--aside open-->
				<aside class="app-sidebar">
					<div class="app-sidebar__user">
						<div class="dropdown user-pro-body text-center">
							<div class="nav-link pl-1 pr-1 leading-none ">
								<img src="{{asset('assets/img/avatar/avatar-3.jpeg')}}" alt="user-img" class="avatar-xl rounded-circle mb-1">
								<span class="pulse bg-success" aria-hidden="true"></span>
							</div>
							<div class="user-info">
								<h6 class=" mb-1 text-dark">Alica Nestle</h6>
								<span class="text-muted app-sidebar__user-name text-sm"> Web-Designer</span>
							</div>
						</div>
					</div>
					<ul class="side-menu">
						<li class="slide">
							<a class="side-menu__item"  data-toggle="slide" href="#"><i class="side-menu__icon fa fa-laptop"></i><span class="side-menu__label">Dashboard</span><span class="badge badge-orange nav-badge">5</span></a>
							<ul class="slide-menu">
								<li><a class="slide-item"  href="{{url('dashboard')}}"><span> Dashboard </span></a></li>
								<li><a class="slide-item" href="{{url('profile')}}"><span>Profile</span></a></li>
								<li><a class="slide-item" href="{{url('login')}}"><span>Login</span></a></li>
								<li><a class="slide-item" href="{{url('register')}}"><span>Register</span></a></li>
								<li><a class="slide-item" href="{{url('formadvance')}}"><span>Advance Form </span></a></li>
							</ul>
						</li>
						<li>
							<a class="side-menu__item" href="{{url('form')}}"><i class="side-menu__icon fe fe-grid"></i><span class="side-menu__label">Form</span></a>
						</li>
						<li>
							<a class="side-menu__item" href="{{url('table')}}"><i class="side-menu__icon fe fe-grid"></i><span class="side-menu__label">Table</span></a>
						</li>
						<li>
							<a class="side-menu__item" href="{{url('datatables')}}"><i class="side-menu__icon fe fe-grid"></i><span class="side-menu__label">Data Table</span></a>
						</li>
						<li>
							<a class="side-menu__item" href="{{url('userlist')}}"><i class="side-menu__icon fe fe-grid"></i><span class="side-menu__label">Userlist</span></a>
						</li>
						
					</ul>
				</aside>
				<!--aside closed-->

                <!--app-content open-->
				@yield('content')
				<!--app-content closed-->

				<!-- Popupchat open-->
				<div class="popup-box chat-popup" id="qnimate">
					<div class="popup-head">
						<div class="popup-head-left pull-left"><img src="{{asset('assets/img/avatar/avatar-3.jpeg')}}" alt="iamgurdeeposahan" class="mr-2"> Alica Nestle</div>
						<div class="popup-head-right pull-right">
							<div class="btn-group">
								<button class="chat-header-button" data-toggle="dropdown" type="button" aria-expanded="false">
								<i class="glyphicon glyphicon-cog"></i> </button>
								<ul role="menu" class="dropdown-menu dropdown-menu-right">
									<li><a href="#">Media</a></li>
									<li><a href="#">Block</a></li>
									<li><a href="#">Clear Chat</a></li>
									<li><a href="#">Email Chat</a></li>
								</ul>
							</div>
							<button data-widget="remove" id="removeClass" class="chat-header-button pull-right" type="button"><i class="glyphicon glyphicon-off"></i></button>
						</div>
					</div>
					<div class="popup-messages">
						<div class="direct-chat-messages">
							<div class="chat-box-single-line">
								<abbr class="timestamp">December 15th, 2018</abbr>
							</div>
							<div class="direct-chat-msg">
								<div class="direct-chat-info clearfix">
									<span class="direct-chat-name float-left">Alica Nestle</span>
									<span class="direct-chat-timestamp float-right">7:40 Am</span>
								</div>
								<img class="direct-chat-img" src="{{asset('assets/img/avatar/avatar-3.jpeg')}}" alt="message user image">
								<div class="direct-chat-text">
									Hello. How are you today?
								</div>
							</div>
							<div class="direct-chat-msg right">
								<div class="direct-chat-info clearfix">
									<span class="direct-chat-name float-right">Roberts</span>
									<span class="direct-chat-timestamp float-left">8:05 Am</span>
								</div>
								<img class="direct-chat-img" src="{{asset('assets/img/avatar/avatar-2.jpeg')}}" alt="message user image">
								<div class="direct-chat-text">
									I'm fine. Thanks for asking!
								</div>
							</div>
							<div class="chat-box-single-line  mb-3">
								<abbr class="timestamp">December 14th, 2018</abbr>
							</div>
							<div class="direct-chat-msg doted-border">
								<div class="direct-chat-info clearfix">
									<span class="direct-chat-name float-left">Alica Nestle</span>
									<span class="direct-chat-timestamp float-right">6:20 Am</span>
								</div>
								<img alt="iamgurdeeposahan" src="{{asset('assets/img/avatar/avatar-3.jpeg')}}" class="direct-chat-img"><!-- /.direct-chat-img -->
								<div class="direct-chat-text">
									Hey bro, how’s everything going ?
								</div>
								<div class="direct-chat-msg right">
									<div class="direct-chat-info clearfix">
										<span class="direct-chat-name float-right">Roberts</span>
										<span class="direct-chat-timestamp float-left">7:05 Am</span>
									</div>
									<img class="direct-chat-img" src="{{asset('assets/img/avatar/avatar-2.jpeg')}}" alt="message user image">
									<div class="direct-chat-text">
										Nothing Much!
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="popup-messages-footer">
						<textarea id="status_message" placeholder="Type a message..." rows="10" cols="40" name="message"></textarea>
						<div class="btn-footer">
							<button class="bg_none"><i class="glyphicon glyphicon-film"></i> </button>
							<button class="bg_none"><i class="glyphicon glyphicon-camera"></i> </button>
							<button class="bg_none"><i class="glyphicon glyphicon-paperclip"></i> </button>
							<button class="bg_none pull-right"><i class="glyphicon glyphicon-thumbs-up"></i> </button>
						</div>
					</div>
				</div>
				<!-- Popupchat closed -->

			</div>

			<!--Footer-->
			<footer class="main-footer">
				<div class="text-center">
					Copyright &copy;Splite-Admin 2021. Design By<a href="https://spruko.com/"> Spruko</a>
				</div>
			</footer>
			<!--/Footer-->
		</div>
		<!--app closed-->

		<!-- Back to top -->
		<a href="#top" id="back-to-top" ><i class="fa fa-angle-up"></i></a>

		<!-- Popup-chat -->
		<a href="#" id="addClass"><i class="ti-comment"></i></a>

		<!--Jquery.min js-->
		<script src="{{asset('assets/js/jquery.min.js')}}"></script>

		<!--popper js-->
		<script src="{{asset('assets/js/popper.js')}}"></script>

		<!--Bootstrap.min js-->
		<script src="{{asset('assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>

		<!--Tooltip js-->
		<script src="{{asset('assets/js/tooltip.js')}}"></script>

		<!-- Jquery star rating-->
		<script src="{{asset('assets/plugins/rating/jquery.rating-stars.js')}}"></script>

		<!--Jquery.nicescroll.min js-->
		<script src="{{asset('assets/plugins/nicescroll/jquery.nicescroll.min.js')}}"></script>

		<!--Scroll-up-bar.min js-->
		<script src="{{asset('assets/plugins/scroll-up-bar/dist/scroll-up-bar.min.js')}}"></script>

		<!--Sidemenu js-->
		<script src="{{asset('assets/plugins/toggle-menu/sidemenu.js')}}"></script>

		<!--p-scrollbar js-->
		<script src="{{asset('assets/plugins/p-scroll/perfect-scrollbar.js')}}"></script>
		<script src="{{asset('assets/plugins/p-scroll/p-scroll.js')}}"></script>

		<!-- jQuery Sparklines -->
		<script src="{{asset('assets/plugins/jquery-sparkline/dist/jquery.sparkline.js')}}"></script>

       <!--Jquery.knob js-->
		<script src="{{asset('assets/plugins/othercharts/jquery.knob.js')}}"></script>

		<!--Jquery.sparkline js-->
		<script src="{{asset('assets/plugins/othercharts/jquery.sparkline.min.js')}}"></script>

		<!--Chart js-->
		<script src="{{asset('assets/js/chart.min.js')}}"></script>

		<!--Dashboard js-->
		<script src="{{asset('assets/js/dashboard4.js')}}"></script>

		<!--Other Charts js-->
		<script src="{{asset('assets/plugins/othercharts/jquery.sparkline.min.js')}}"></script>
		<script src="{{asset('assets/js/othercharts.js')}}"></script>

		<!--Sparkline js-->
		<script src="{{asset('assets/js/sparkline.js')}}"></script>

		<!--Showmore js-->
		<script src="{{asset('assets/js/jquery.showmore.js')}}"></script>

		<!--Scripts js-->
		<script src="{{asset('assets/js/scripts.js')}}"></script>
	
		<!--multi js-->
		<script src="{{asset('assets/plugins/multi/multi.min.js')}}"></script>
		<script src="{{asset('assets/js/formelementadvnced.js')}}"></script>
	
		<!--Select2 js-->
		<script src="{{asset('assets/plugins/select2/select2.full.js')}}"></script>
	<!--MutipleSelect js-->
	<script src="{{asset('assets/plugins/multipleselect/multiple-select.js')}}"></script>
		<script src="{{asset('assets/plugins/multipleselect/multi-select.js')}}"></script>

		<!--Accordion-Wizard-Form js-->
		<script src="{{asset('assets/plugins/accordion-Wizard-Form/jquery.accordion-wizard.min.js')}}"></script>

		<!--Tempusdominus js-->
		<script src="{{asset('assets/plugins/tempusdominus-bootstrap-4/tempusdominus-bootstrap-4.js')}}"></script>

			<!--DataTables js-->
			<script src="{{asset('assets/plugins/Datatable/js/jquery.dataTables.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/dataTables.bootstrap4.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/dataTables.buttons.min.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/buttons.bootstrap4.min.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/jszip.min.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/pdfmake.min.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/vfs_fonts.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/buttons.html5.min.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/buttons.print.min.js')}}"></script>
		<script src="{{asset('assets/plugins/Datatable/js/buttons.colVis.min.js')}}"></script>
		
		<script src="{{asset('assets/js/datatable.js')}}"></script>
	<!--Advanced Froms -->
	<script src="{{asset('assets/js/advancedform.js')}}"></script>
	<script src="{{asset('assets/js/forms.js')}}"></script>
	
	</body>
</html>