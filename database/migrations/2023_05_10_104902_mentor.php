<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mentors', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id");
            $table->string("image")->nullable();
            $table->integer("experience")->default(0);
            $table->integer("graduated")->default(0);
            $table->string("languages")->nullable();
            $table->longText("about_id")->nullable();
            $table->longText("certifications")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mentors');
    }
};
