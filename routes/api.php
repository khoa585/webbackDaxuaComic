<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\cartController;
use App\Http\Controllers\ApiCmtController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/userprofile', [AuthController::class, 'userProfile']);    
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'cart'
], function ($router) {
    Route::get('/show', [cartController::class, 'show']);
    Route::get('/getlistbuysid/{id}', [cartController::class, 'getlistbuysid']);
    Route::post('/add/{id}', [cartController::class, 'add']);
    Route::put('/update/{id}', [cartController::class, 'update']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'cmt'
], function ($router) {
    Route::post('/create', [ApiCmtController::class, 'createComment']);
    Route::get('/getCommentsByComic', [ApiCmtController::class, 'getCommentsByComic']);
    Route::post('/reply/create', [ApiCmtController::class, 'RepComment']);
});
