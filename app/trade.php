<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class trade extends Model
{
  protected $fillable = [
      'tid', 'book', 'amount','maker_side','price',
  ];
}
