<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->session()->invalidate();
        $request->validate(
            [
                'email'    => 'required|email',
                'password' => 'required',
            ]
        );

        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();

            return response()->json([], 204);
        }

        return response()->json(['error' => 'Nieprawidłowe dane logowania'], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([], 204);
    }

    public function checkAuth(Request $request)
    {
        if ($request->user('sanctum')) {
            return response('auth', 200);
        } else {
            return response('guest', 400);
        }
    }
}
