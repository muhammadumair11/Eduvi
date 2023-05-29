<ul class="side-menu">
    <li class="slide">
        <a class="side-menu__item"  data-toggle="slide" href="#">
            <span class="side-menu__label">Dashboard</span><span class="badge badge-orange nav-badge">5</span>
        </a>
        <ul class="slide-menu">
            <li><a class="slide-item"  href="{{url('dashboard')}}"><span> Dashboard </span></a></li>
            <li><a class="slide-item" href="{{url('profile')}}"><span>Profile</span></a></li>
            <li><a class="slide-item" href="{{url('login')}}"><span>Login</span></a></li>
            <li><a class="slide-item" href="{{url('register')}}"><span>Register</span></a></li>
            <li><a class="slide-item" href="{{url('formadvance')}}"><span>Advance Form </span></a></li>
        </ul>
    </li>
    <li class="slide">
        <a class="side-menu__item"  data-toggle="slide" href="#">
            <span class="side-menu__label">Users</span>
        </a>
        <ul class="slide-menu">
            <li><a class="slide-item"  href="{{ route("user.create") }}"><span> Add Users </span></a></li>
            <li><a class="slide-item"  href="{{ route("user.index") }}"><span> List Users </span></a></li>
            <li><a class="slide-item"  href="{{ route("user.admins") }}"><span> List Admins </span></a></li>
            <li><a class="slide-item"  href="{{ route("user.mentors") }}"><span> List Mentors </span></a></li>
            <li><a class="slide-item"  href="{{ route("user.students") }}"><span> List Students </span></a></li>
        </ul>
    </li>
    <li class="slide">
        <a class="side-menu__item"  data-toggle="slide" href="#">
            <span class="side-menu__label">Categories</span>
        </a>
        <ul class="slide-menu">
            <li><a class="slide-item"  href="{{ route("categories.index") }}"><span> Categories </span></a></li>
            <li><a class="slide-item"  href="{{ route("categories.create") }}"><span> Add Categories </span></a></li>
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
