<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ChangeCollection;
use App\Obstruction;
use App\Photo;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ChangeController extends Controller
{
    /**
     * Display an obstruction list of created, updated or deleted since a given date.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $since = new Carbon($request->input("since"));
        $changes = Obstruction::withTrashed()->when($request->has("since"), function ($query) use ($request, $since) {
            return $query->where("updated_at", ">=", $since);
        })->get();

        $changes = $changes->concat(Photo::when($request->has("since"), function ($query) use ($request, $since) {
            return $query->where("updated_at", ">=", $since);
        })->get());

        return new ChangeCollection($changes->sortByDesc('updated_at'));

    }
}
