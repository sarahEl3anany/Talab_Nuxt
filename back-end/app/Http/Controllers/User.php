<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function current(Request $request)
    {
        return response()->json($request->user());
    }
    public function login(Request $request) {
        return response()->json($request->user());
    }
}