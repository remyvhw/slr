<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\Obstruction as ObstructionResource;
use App\Http\Resources\ObstructionCollection;
use App\Obstruction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ObstructionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ObstructionCollection(Obstruction::orderBy('updated_at', 'desc')->paginate(50));
    }

    /**
     * Display an obstruction list of created, updated or deleted since a given date.
     *
     * @return \Illuminate\Http\Response
     */
    public function getNew(Request $request)
    {
        return new ObstructionCollection(Obstruction::withTrashed()->when($request->has("since"), function ($query) use ($request) {
            return $query->where("updated_at", ">=", new Carbon($request->input("since")));
        })->orderBy('updated_at', 'desc')->paginate(50));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Obstruction $obstruction)
    {
        return new ObstructionResource($obstruction);
    }

}
