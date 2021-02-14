<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('arts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('uid');
            $table->integer('cid')->nullable();
            $table->integer('gid')->nullable();
            $table->string('service')->nullable();
            $table->string('art_img')->nullable();
            $table->text('art_place')->nullable();
            $table->text('jcomme')->nullable();
            $table->text('zcomme')->nullable();
            $table->integer('life_flg');
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
        Schema::dropIfExists('arts');
    }
}
