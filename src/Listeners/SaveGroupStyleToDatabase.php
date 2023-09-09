<?php

namespace FoskyM\NicknameGroupFormatter\Listeners;

use Flarum\Group\Event\Saving;
use Illuminate\Support\Arr;

class SaveGroupStyleToDatabase
{
    private $key = 'attributes.displayStyle';
    public function handle(Saving $event)
    {
        if (!Arr::has($event->data, $this->key)) {
            return;
        }

        $display_style = Arr::get($event->data, $this->key);

        if (strlen(trim($display_style)) == 0) {
            $display_style = NULL;
        }

        $group = $event->group;

        $group->display_style = $display_style;
        $group->save();
    }
}
