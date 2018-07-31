<?php

namespace App\Http\Requests;

use App\Rules\Latitude;
use App\Rules\Longitude;
use Auth;
use Illuminate\Foundation\Http\FormRequest;

class StorePhoto extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'photo' => 'required|mimetypes:image/jpeg|max:25000|dimensions:min_width=500,min_height=500',
            'legend' => 'nullable',
            'created_at' => 'nullable|date',
            'lat' => ['nullable', new Latitude],
            'lng' => ['nullable', new Longitude],
        ];
    }
}
