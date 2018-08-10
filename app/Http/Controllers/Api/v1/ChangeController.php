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
        })->get(); /*->map(function ($obstruction) {
        return collect([
        "payload" => new ObstructionResource($obstruction),
        "type" => "Obstruction",
        "id" => "obstruction_" . $obstruction->id,
        ]);
        });*/

        $changes = $changes->concat(Photo::when($request->has("since"), function ($query) use ($request, $since) {
            return $query->where("updated_at", ">=", $since);
        })->get()); /*->map(function ($photo) {
        return collect([
        "payload" => new PhotoResource($photo),
        "type" => "Photo",
        "id" => "photo_" . $photo->id,
        ]);
        }));*/

        return new ChangeCollection($changes->sortByDesc('updated_at'));

    }
}
