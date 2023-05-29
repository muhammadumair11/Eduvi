<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'name',
        'email',
        'password',
        'user_type'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function isAdmin()
    {
        # code...
        if($this->user_type == "admin") {
            return true;
        } else {
            return false;
        }
    }
    public function isMentor()
    {
        # code...
        if($this->user_type == "mentor") {
            return true;
        } else {
            return false;
        }
    }


    /**
     * Get all of the mentors for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function mentors(): HasOne
    {
        return $this->hasOne(Mentor::class, 'user_id');
    }

    /**
     * Get all of the admins for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function admins(): HasOne
    {
        return $this->hasOne(Admin::class, 'user_id');
    }
    /**
     * Get all of the students for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function student(): HasOne
    {
        return $this->hasOne(Student::class, 'user_id');
    }

    /**
     * Get all of the socials for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function socials(): HasOne
    {
        return $this->hasOne(Social::class, 'user_id');
    }
}
