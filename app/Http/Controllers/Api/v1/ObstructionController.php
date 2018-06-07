<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\Obstruction as ObstructionResource;
use App\Http\Resources\ObstructionCollection;
use App\Obstruction;

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
    public function getNew()
    {
        return new ObstructionCollection(Obstruction::orderBy('updated_at', 'asc')->paginate(50));
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
