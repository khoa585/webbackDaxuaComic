<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Helper\ApiHelper;
use App\Models\ModelCmt;
use App\Models\rep;
use Illuminate\Support\Collection;
use DB;
class ApiCmtController extends Controller
{
    public function createComment(Request $request)
    {
        $cmts = new ModelCmt();
        $cmts->content = $request->input('content');
        $cmts->IDuser = $request->input('IDuser');
        $cmts->Idcomic = $request->input('Idcomic');
        $cmts->save();
        $response = ApiHelper::createApiHelper(false,200,"",$cmts);
      return response()->json($response,200);
    }
    public function RepComment(Request $request)
    {
        $cmts = new rep();
        $cmts->content = $request->input('content');
        $cmts->IDuserReplies= $request->input('IDuserReplies');
        $cmts->IDCmt = $request->input('IDCmt');
        $cmts->save();
        $response = ApiHelper::createApiHelper(false,200,"",$cmts);
      return response()->json($response,200);
    }
    public function getCommentsByComic(Request $request,$id)
    {
        $results = ModelCmt::getlist($id);
        foreach ($results as $items){ 
          $items->reply =ModelCmt::getReplist($items->id);
        }
         $response = ApiHelper::createApiHelper(false,200,"",$results);
         return response()->json($response,200);
    }

}
