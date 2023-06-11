<ul class="side-menu">
    <li class="slide">
        <a class="side-menu__item"  data-toggle="slide" href="#">
            <span class="side-menu__label">Users</span>
        </a>
        <ul class="slide-menu">
            <li><a class="slide-item"  href="{{ route("user.create") }}"><span> Add Users </span></a></li>
            <li><a class="slide-item"  href="{{ route("mentor.requests") }}"><span> Mentor Request </span></a></li>
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
        <a class="side-menu__item" href="{{route("course.admin.index")}}"><span class="side-menu__label">Courses</span></a>
    </li>

</ul>
