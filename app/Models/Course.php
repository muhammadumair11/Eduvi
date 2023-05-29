<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "description",
        "thumbnail",
        "price",
        "mentor_id",
        "sub_category_id",
    ];

    /**
     * Get all of the subCategory for the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function subCategory(): HasOne
    {
        return $this->hasOne(SubCategory::class, 'id');
    }

    /**
     * Get all of the data for the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function data(): HasMany
    {
        return $this->hasMany(CourseContent::class, 'course_id');
    }
}
