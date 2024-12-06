<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GrammarSeeder extends Seeder
{

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris metus mi, interdum ut venenatis sollicitudin, mattis a leo. Nullam convallis, massa nec egestas eleifend, est odio ultrices magna, tristique pharetra ipsum lorem vel velit. Fusce elementum, diam quis tristique molestie, lectus purus elementum libero, vel feugiat quam dolor et lorem. Nam augue nulla, pharetra sed purus quis, elementum convallis ligula. Mauris lacinia ac ipsum eu suscipit. Pellentesque convallis leo enim, id iaculis nulla accumsan convallis. Proin dignissim lectus lorem, quis feugiat risus posuere vel. Donec suscipit est eu leo tristique congue. Integer tristique mauris at commodo viverra. Aliquam sit amet est vestibulum, consectetur ligula nec, mattis purus. Vivamus id neque maximus, pellentesque nisi facilisis, iaculis metus. Vestibulum vitae maximus nunc.';

        $grammar = [
            ['name' => 'Present Simple', 'description' => $description, 'language' => 'english'],
            ['name' => 'Present Continous', 'description' => $description, 'language' => 'english'],
            ['name' => 'Past Simple', 'description' => $description, 'language' => 'english'],
            ['name' => 'Past Continous', 'description' => $description, 'language' => 'english'],
            ['name' => 'Future Simple', 'description' => $description, 'language' => 'english'],
            ['name' => 'Presente', 'description' => $description, 'language' => 'spanish'],
            ['name' => 'Preterito Indefinido', 'description' => $description, 'language' => 'spanish'],
            ['name' => 'Preterito Perfecto', 'description' => $description, 'language' => 'spanish'],
        ];
        DB::table('grammar')->insert($grammar);
    }
}
