<?php

namespace App\Models\models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;
class Comicmodel extends Model
{
    use HasFactory;
    public static function getlist(){
        return DB::select('select comic.id,
        comic.image,
        comic.views,
        comic.description,
        comic.author,
        comic.name,
        category.namecategory
         from comic inner join storecategory on comic.id = storecategory.id
        inner join category on category.id = storecategory.id', [1]);
    }
}
