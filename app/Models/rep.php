<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class rep extends Model
{
    use HasFactory;
    protected $table='rep';
    protected $fillable = ['content','IDuserReplies','IDCmt'];
}
