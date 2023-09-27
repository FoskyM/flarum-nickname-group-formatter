import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import PostUser from 'flarum/forum/components/PostUser';
import { escape } from '../helpers/escape';
import Group from 'flarum/common/models/Group';
import Model from "flarum/common/Model";
import UserCard from "flarum/forum/components/UserCard";

app.initializers.add('foskym/nickname-group-formatter', () => {
  Group.prototype.displayStyle = Model.attribute('displayStyle');

  function show(e, user) {
    if (!user || !user.displayName()) {
      return;
    }

    const primaryGroup = user.groups().find(group => group.displayStyle() !== null);

    if (!primaryGroup) {
      return;
    }

    const color = primaryGroup.color();
    const displayStyle = primaryGroup.displayStyle();

    e.$('.username').html(
      displayStyle.replace(/\{username\}/g, escape(user.displayName()))
        .replace(/\{groupcolor\}/g, color || '#FFF')
    );
  }


  extend(UserCard.prototype, 'oncreate', function (vnode) {
    if ($(this.element).hasClass('UserCard--popover')) {
      if (!app.forum.attribute('foskym-nickname-group-formatter.showInUserCardPopover'))
        return;
    } else if (!app.forum.attribute('foskym-nickname-group-formatter.showInUserCard')) {
      return;
    }
    const user = this.attrs.user;
    show(this, user);
  });

  extend(PostUser.prototype, 'oncreate', function () {
    if (!app.forum.attribute('foskym-nickname-group-formatter.showInUserPost')) {
      return;
    }
    const user = this.attrs.post.user();
    show(this, user);
  });
});
