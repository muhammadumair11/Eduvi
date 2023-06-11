<ul class="side-menu">
    <li>
        <a class="side-menu__item" href="{{ route("mentor.index") }}"><span class="side-menu__label">Profile</span></a>
    </li>
    <li class="slide">
        <a class="side-menu__item"  data-toggle="slide" href="#">
            <span class="side-menu__label">Courses</span>
        </a>
        <ul class="slide-menu">
            <li><a class="slide-item"  href="{{ route("course.create") }}"><span> Add Courses </span></a></li>
            <li><a class="slide-item"  href="{{ route("course.index") }}"><span> All Courses </span></a></li>
            <li><a class="slide-item" href="{{url('profile')}}"><span>Profile</span></a></li>
            <li><a class="slide-item" href="{{url('login')}}"><span>Login</span></a></li>
            <li><a class="slide-item" href="{{url('register')}}"><span>Register</span></a></li>
            <li><a class="slide-item" href="{{url('formadvance')}}"><span>Advance Form </span></a></li>
        </ul>
    </li>

</ul>
