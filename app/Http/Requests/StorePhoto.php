<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePhoto extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'photo' => 'required|mimetypes:image/jpeg|size:25000|dimensions:min_width=500,min_height=500',
            'legend' => 'nullable',
            'created_at' => 'nullable|date',
        ];
    }
}
