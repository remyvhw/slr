<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ChangeCollection;
use App\Http\Resources\Obstruction as ObstructionResource;
use App\Obstruction;
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
        $changes = Obstruction::withTrashed()->when($request->has("since"), function ($query) use ($request) {
            return $query->where("updated_at", ">=", new Carbon($request->input("since")));
        })->orderBy('updated_at', 'desc')->get()->map(function ($obstruction) {
            return collect([
                "payload" => new ObstructionResource($obstruction),
                "type" => "Obstruction",
            ]);
        });
        return new ChangeCollection($changes);

    }
}
