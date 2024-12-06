<?php

namespace App\Http\Controllers;

use App\Models\Grammar;
use Illuminate\Http\Request;

class GrammarController extends Controller
{
    public function index($language)
    {
        $grammar = Grammar::where('language', $language)->get();

        return response()->json($grammar);
    }
}
