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


        <link rel="stylesheet" href="{{asset("assets/plugins/fileuploads/css/fileupload.css")}}">
        <link rel="stylesheet" href="{{asset("assets/plugins/fancyuploder/fancy_fileupload.css")}}">

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

        {{-- Summernote --}}

        <link rel="stylesheet" href="{{asset("assets/plugins/summernote/summernote-bs4.css")}}">


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
        {{ $slot }}

<!--Footer-->
			<footer class="main-footer">
				<div class="text-center">
					Copyright &copy;Eduvi</a>
				</div>
			</footer>
			<!--/Footer-->
		</div>
		<!--app closed-->

		<!-- Back to top -->
		<a href="#top" id="back-to-top" ><i class="fa fa-angle-up"></i></a>


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

        <!--Summernote js-->
		<script src="../../assets/plugins/summernote/summernote-bs4.js"></script>
		<script src="../../assets/js/summernote.js"></script>

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


        <!-- Internal Fileuploads js-->
		<script src="{{asset("assets/plugins/fileuploads/js/fileupload.js")}}"></script>
        <script src="{{asset("assets/plugins/fileuploads/js/file-upload.js")}}"></script>
        <script src="{{asset("assets/plugins/fancyuploder/jquery.ui.widget.js")}}"></script>
        <script src="{{asset("assets/plugins/fancyuploder/jquery.fileupload.js")}}"></script>
        <script src="{{asset("assets/plugins/fancyuploder/jquery.iframe-transport.js")}}"></script>
        <script src="{{asset("assets/plugins/fancyuploder/jquery.fancy-fileupload.js")}}"></script>
        <script src="{{asset("assets/plugins/fancyuploder/fancy-uploader.js")}}"></script>
	<!--Advanced Froms -->
	<script src="{{asset('assets/js/advancedform.js')}}"></script>
	<script src="{{asset('assets/js/forms.js')}}"></script>

	</body>
</html>
