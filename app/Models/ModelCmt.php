<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;
class ModelCmt extends Model
{
    use HasFactory;
    protected $table='cmts';
    protected $fillable = ['content','IDuser','Idcomic'];
    public static function getlist($id){
        return  DB::table('cmts')
        ->leftJoin('users', 'cmts.IDuser', '=', 'users.id')
        ->select('cmts.id','cmts.content', 'cmts.Idcomic', 'users.name')
        ->where('cmts.Idcomic', $id)
        ->get();
    }
    public static function getReplist($id){
        return  DB::table('rep')
        ->leftJoin('users', 'rep.IDuserReplies', '=', 'users.id')
        ->leftJoin('cmts', 'rep.IDCmt', '=', 'cmts.id')
        ->select('cmts.id','cmts.content','users.name')
        ->where('cmts.id', $id)
        ->get();
    }
}
