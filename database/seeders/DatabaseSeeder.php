<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use App\Models\Category;
use App\Models\Course;
use App\Models\Mentor;
use App\Models\Social;
use App\Models\Student;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(3)->create()->each(function ($user) {
            Student::create([
                'user_id' => $user->id
            ]);
            Social::create([
                "user_id" => $user->id
            ]);
        });

        // Category::factory(5)->create()->each(function ($category) {
        //     SubCategory::factory(3)->create([
        //         "category_id" => $category->id
        //     ]);
        // });


        $admin = User::first();
        Student::find($admin->id)->delete();

        $admin->username = 'admin';
        $admin->name = 'admin';
        $admin->email = 'admin@admin.com';
        $admin->user_type = 'admin';


        $admin->save();


        Admin::create([
            'user_id' => $admin->id,
        ]);



        $user = User::find(2);
        Student::find($user->id)->delete();

        $user->username = 'mentor';
        $user->name = 'mentor';
        $user->email = 'mentor@mentor.com';
        $user->user_type = 'mentor';


        $user->save();


        $mentor = Mentor::create([
            'user_id' => $user->id,
        ]);

        // Course::factory(20)->create([
        //     "mentor_id" => $mentor->id
        // ]);





        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
