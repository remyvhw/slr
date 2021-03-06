<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePhoto;
use App\Http\Resources\Photo as PhotoResource;
use App\Http\Resources\PhotoCollection;
use App\Photo;
use Auth;
use Carbon;
use Illuminate\Http\Request;
use Storage;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new PhotoCollection(Photo::latest()->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePhoto $request)
    {
        $this->authorize('create', Photo::class);

        $photo = new Photo;
        if ($request->has("created_at")) {
            $photo->created_at = new \Carbon\Carbon($request->input("created_at"));
        }
        $photo->legend = $request->input("legend");
        $photo->lat = $request->input("lat");
        $photo->lng = $request->input("lng");
        $photo->direction = $request->input("direction");
        $photo->legend = $request->input("legend");
        $photo->user_id = Auth::id();
        $photo->save();

        $request->photo->storeAs('', $photo->getStoragePathAttribute(), config("filesystems.cloud"));
        Storage::disk("cloud")->setVisibility($photo->getStoragePathAttribute(), 'public');

        return new PhotoResource($photo);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function show(Photo $photo)
    {
        return new PhotoResource($photo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Photo $photo)
    {
        $this->authorize('delete', $photo);

    }
}
