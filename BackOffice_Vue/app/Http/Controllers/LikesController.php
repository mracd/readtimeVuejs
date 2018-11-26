<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use App\Models\Reply;
use Illuminate\Http\Request;

class LikesController extends Controller
{
   function likeIt(Reply $reply)
   {
       $reply->likes()->create([
//           'user_id' => auth()->id()
            'user_id'   => 1
       ]);

   }

   function unlikeIt(Reply $reply)
   {
//       $reply->likes()->where('user_id',auth()->id()) ->first()->delete();
       $reply->likes()->where('user_id',1)->first()->delete();
   }


}
