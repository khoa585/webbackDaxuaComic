<?php

namespace App\Http\Controllers\Comic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Models\Comicmodel;
use App\Helper\ApiHelper;
class listComic extends Controller
{
    public function show(Request $request)
    {
        $results = Comicmodel::getlist();
        $response = ApiHelper::createApiHelper(false,200,"",$results);
        return response()->json($response,200);
    }
}
