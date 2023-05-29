@props(["head", "body"])

<table class="table table-striped table-bordered mb-0 text-nowrap">
    <tr>
        @foreach ($head as $item)
            <th>{{ $item }}</th>
        @endforeach
    </tr>

    {{ $slot }}
</table>
