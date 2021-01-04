<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helper\ApiHelper;
use App\Models\ModelCmt;
use App\Models\rep;
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
      return response()->json($cmts,200);
    }
    public function RepComment(Request $request)
    {
        $cmts = new rep();
        $cmts->content = $request->input('content');
        $cmts->IDuserReplies= $request->input('IDuserReplies');
        $cmts->IDCmt = $request->input('IDCmt');
        $cmts->save();
      return response()->json($cmts,200);
    }
    public function getCommentsByComic(Request $request)
    {
        return DB::select('select *
         from rep', [1]);
    }
}
