<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WordsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $words = [
            ['word' => 'hello', 'translation' => 'dzień dobry', 'language' => 'english'],
            ['word' => 'water', 'translation' => 'woda', 'language' => 'english'],
            ['word' => 'day', 'translation' => 'dzień', 'language' => 'english'],
            ['word' => 'night', 'translation' => 'noc', 'language' => 'english'],
            ['word' => 'sand', 'translation' => 'piasek', 'language' => 'english'],
            ['word' => 'food', 'translation' => 'jedzenie', 'language' => 'english'],
            ['word' => 'friend', 'translation' => 'przyjaciel', 'language' => 'english'],
            ['word' => 'lunch', 'translation' => 'obiad', 'language' => 'english'],
            ['word' => 'fruit', 'translation' => 'owoc', 'language' => 'english'],
            ['word' => 'earth', 'translation' => 'ziemia(planeta)', 'language' => 'english'],
            ['word' => 'hola', 'translation' => 'dzień dobry', 'language' => 'spanish'],
            ['word' => 'la casa', 'translation' => 'dom', 'language' => 'spanish'],
        ];
        DB::table('words')->insert($words);
    }
}
