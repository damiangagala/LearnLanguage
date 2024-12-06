<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Word;
use Illuminate\Http\Request;

class WordsController extends Controller
{
    public function index($language)
    {
        $words = Word::where('language', $language)->get();

        return response()->json($words);
    }


    public function update(Request $request, Word $word)
    {

        $validateData = $request->validate([
            'word' => 'required|string|max:100',
            'translation' => 'required|string|max:100'
        ]);


        $word->update($validateData);
    }


    public function destroy(Word $word)
    {
        $word->delete();
        return response()->json(['message' => 'Item deleted succesfully']);
    }


    public function store(Request $request)
    {
        $validateData = $request->validate([
            'word' => 'required|string|max:100',
            'translation' => 'required|string|max:100',
            'language' => 'required|string|max:100'
        ]);

        Word::create($validateData);
    }
}
