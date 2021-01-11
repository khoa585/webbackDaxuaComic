<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;
class rep extends Model
{
    use HasFactory;
    protected $table='rep';
    protected $fillable = ['content','IDuserReplies','IDCmt'];
    public static function getReplist($id){
        return  DB::table('rep')
        ->leftJoin('users', 'rep.IDuserReplies', '=', 'users.id')
        ->leftJoin('cmts', 'rep.IDCmt', '=', 'cmts.id')
        ->select('rep.id','rep.content','users.name')
        ->where('cmts.id', $id)
        ->get();
    }
}
