<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('groups', 'display_style')) {
            $schema->table('groups', function (Blueprint $table) {
                $table->mediumText('display_style')->nullable()->default('<span style="color: {groupcolor}">{username}</span>');
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('groups', function (Blueprint $table) {
            $table->dropColumn('display_style');
        });
    },
];
