import {extend} from 'flarum/common/extend';
import app from 'flarum/common/app';

import PostUser from 'flarum/forum/components/PostUser';
import { escape } from '../helpers/escape';
import Group from 'flarum/common/models/Group';
import Model from "flarum/common/Model";

app.initializers.add('foskym/nickname-group-formatter', () => {
  Group.prototype.displayStyle = Model.attribute('displayStyle');

  extend(PostUser.prototype, 'oncreate', function () {
    console.log(this)
    // user card
    if(this.element.lastChild.tagName === 'DIV') return;

    const user = this.attrs.post.user();

    if (!user || !user.displayName()) {
      return;
    }

    const primaryGroup = user.groups().find(group => group.displayStyle() !== null);

    if (!primaryGroup) {
      return;
    }

    const color = primaryGroup.color();
    const displayStyle = primaryGroup.displayStyle();

    this.$('.username').html(
      displayStyle.replace(/\{username\}/g, escape(user.displayName()))
        .replace(/\{groupcolor\}/g, color || '#FFF')
    );
  });
});
