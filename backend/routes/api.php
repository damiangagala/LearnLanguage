<?php

use App\Http\Controllers\GrammarController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\WordsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::get('isAuth', [LoginController::class, 'checkAuth'])->middleware('auth:sanctum');

Route::get('{language}/words', [WordsController::class, 'index']);
Route::delete('words/{word}', [WordsController::class, 'destroy'])->middleware('auth:sanctum');
Route::put('words/{word}', [WordsController::class, 'update'])->middleware('auth:sanctum');

Route::get('{language}/grammar', [GrammarController::class, 'index']);
Route::delete('grammar', [GrammarController::class, 'destroy'])->middleware('auth:sanctum');
