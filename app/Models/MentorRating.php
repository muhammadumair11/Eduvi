<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MentorRating extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'mentor_id',
        'rating',
    ];

    /**
     * Get the mentors that owns the MentorRating
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function mentors(): BelongsTo
    {
        return $this->belongsTo(Mentor::class, 'mentor_id');
    }
}
