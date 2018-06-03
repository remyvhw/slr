<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObstructionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('obstructions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->timestamps();
            $table->softDeletes();
            $table->string("name");
            $table->text("description");
            $table->string("type")->nullable();
            $table->string("category")->nullable();
            $table->string("url")->nullable();
            $table->string("date")->nullable();
            $table->string("lat")->nullable();
            $table->string("lng")->nullable();
            $table->boolean("major")->default(false);
            $table->boolean("active")->default(false);
            $table->boolean("night")->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('obstructions');
    }
}
