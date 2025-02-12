<?php

use App\Infrastructure\Constants\DBTables;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateAuditsTable
 */
class CreateAuditsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            DBTables::SYS_AUDITS,
            function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('user_type')->nullable();
                $table->unsignedBigInteger('user_id')->nullable();
                $table->string('event');
                $table->morphs('auditable');
                $table->jsonb('old_values')->nullable();
                $table->jsonb('new_values')->nullable();
                $table->text('url')->nullable();
                $table->ipAddress('ip_address')->nullable();
                $table->string('user_agent', 1023)->nullable();
                $table->string('tags')->nullable();
                $table->timestamps();

                $table->index(['user_id', 'user_type']);
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop(DBTables::SYS_AUDITS);
    }
}
