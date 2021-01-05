<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;
class ApiCart extends Model
{
    use HasFactory;
    protected $table='cart';
    protected $fillable = ['user','email','comicId','ngayHetHanThue','image','Views','nameComic','price'];
}
