<?php
namespace FoskyM\NicknameGroupFormatter;

use Flarum\Api\Serializer\GroupSerializer;
use Flarum\Extend;
use Flarum\Group\Event\Saving;
use Flarum\Group\Group;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/resources/less/admin.less'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Event())
        ->listen(Saving::class, Listeners\SaveGroupStyleToDatabase::class),

    (new Extend\Settings())
        ->serializeToForum('foskym-nickname-group-formatter.showInUserPost', 'foskym-nickname-group-formatter.showInUserPost')
        ->serializeToForum('foskym-nickname-group-formatter.showInUserCard', 'foskym-nickname-group-formatter.showInUserCard')
        ->serializeToForum('foskym-nickname-group-formatter.showInUserCardPopover', 'foskym-nickname-group-formatter.showInUserCardPopover'),

    (new Extend\ApiSerializer(GroupSerializer::class))
        ->attribute('displayStyle', function (GroupSerializer $serializer, Group $group) {
            return $group->display_style;
        }),
];
