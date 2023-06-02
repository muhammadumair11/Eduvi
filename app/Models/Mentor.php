<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Mentor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'image',
        'experience',
        'graduated',
        'languages',
        'about_id',
        'certifications'
    ];

    /**
     * Get the users that owns the Mentor
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get all of the mentorRatings for the Mentor
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function mentorRatings(): HasMany
    {
        return $this->hasMany(MentorRating::class, 'mentor_id');
    }

    /**
     * Get all of the courses for the Mentor
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function courses(): HasMany
    {
        return $this->hasMany(Course::class, "mentor_id");
    }
}
