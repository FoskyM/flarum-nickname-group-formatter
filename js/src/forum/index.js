import {extend} from 'flarum/common/extend';
import app from 'flarum/common/app';

import PostUser from 'flarum/forum/components/PostUser';
import { escape } from '../helpers/escape';

app.initializers.add('foskym/nickname-group-formatter', () => {
  extend(PostUser.prototype, 'oncreate', function () {
    console.log(this)
    // user card
    if(this.element.lastChild.tagName === 'DIV') return;

    const user = this.attrs.post.user();

    if (!user || !user.displayName()) {
      return;
    }

    const primaryGroup = user.groups().find(group => group.attribute('displayStyle') !== null);

    if (!primaryGroup) {
      return;
    }

    const color = primaryGroup.attribute('color');
    const displayStyle = primaryGroup.attribute('displayStyle');

    this.$('.username').html(
      displayStyle.replace(/\{username\}/g, escape(user.displayName()))
        .replace(/\{groupcolor\}/g, color || '#FFF')
    );
  });
});
