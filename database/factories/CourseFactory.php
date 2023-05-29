<?php

namespace Database\Factories;

use App\Models\SubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->text("20"),
            'description' => fake()->sentence("20"),
            'thumbnail' => fake()->image(),
            'price' => fake()->randomElement(["100", "300", "165"]),
            "sub_category_id" => fake()->randomElement(SubCategory::pluck("id")->toArray()),
        ];
    }
}
