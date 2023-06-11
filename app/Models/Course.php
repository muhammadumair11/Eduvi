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

    public function scopeSearch($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn($query, $search) =>
            $query->where(fn($query) =>
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%')
            )
        );
        $query->when($filters['sub_category'] ?? false, fn($query, $sub_category) =>
            $query->where(fn($query) =>
                $query->where('sub_category_id', $sub_category)
            )
        );

    }

    /**
     * Get the mentor associated with the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function mentors(): HasOne
    {
        return $this->hasOne(Mentor::class, "id");
    }

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

    /**
     * Get all of the course_cart for the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function course_cart(): HasMany
    {
        return $this->hasMany(CourseCart::class, 'course_id');
    }
    /**
     * Get all of the course_cart for the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function purchased_courses(): HasMany
    {
        return $this->hasMany(PurchasedCourses::class, 'course_id');
    }

    /**
     * Get all of the courseratings for the Course
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function courseratings(): HasMany
    {
        return $this->hasMany(CourseRating::class, 'course_id');
    }
}
