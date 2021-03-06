<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helper\ApiHelper;
use App\Models\ApiCart;
use Carbon\Carbon;
use DB;
class cartController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }


    public function show(Request $request)
    {
        $cart = ApiCart::where('user',auth()->user()->id)->get();
        $response = ApiHelper::createApiHelper(false,200,"",$cart);
        return response()->json( $response,200);
    }
    public function getlistbuysid(Request $request, $id)
    {
        $cart = ApiCart::firstWhere([
            ['user','=',auth()->user()->id],
            ['comicId','=',$id]
        ]);
        $response = ApiHelper::createApiHelper(false,200,"",$cart);
        return response()->json( $response,200);
    }
    public function add(Request $request, $id)
    {
        $cart = ApiCart::firstWhere([
            ['user','=',auth()->user()->id],
            ['comicId','=',$id]
        ]);
        $currentDateTime = Carbon::now();
        $newDateTime = Carbon::now()->addDay(30);
        if($cart == ""){
                $cart = new ApiCart();
                $cart->user = $request->input('user');
                $cart->email = $request->input('email');
                $cart->comicId = $request->input('comicId');
                $cart->ngayHetHanThue = $newDateTime;
                $cart->image = $request->input('image');
                $cart->Views = $request->input('Views');
                $cart->nameComic = $request->input('nameComic');
                $cart->price = $request->input('price');
                $cart->save();
        }else{
            $cart = ApiCart::find($cart->id);
            $cart->price = $cart->price + $request->input('price');
            $cart->ngayHetHanThue = Carbon::parse($cart->ngayHetHanThue)->addDay(30);
            $cart->save();
        }
        $response = ApiHelper::createApiHelper(false,200,"",$cart);
        return response()->json($response,200);
    }

    public function update(Request $request,$id)
    {
        $cart = ApiCart::find($id);
        $cart->user = $request->input('user');
        $cart->email = $request->input('email');
        $cart->comicId = $request->input('comicId');
        $cart->ngayHetHanThue = $request->input('ngayHetHanThue');
        $cart->image = $request->input('image');
        $cart->Views = $request->input('Views');
        $cart->nameComic = $request->input('nameComic');
        $cart->save();
        $response = ApiHelper::createApiHelper(false,200,"",$cart);
        return response()->json($response,200);
    }
}
