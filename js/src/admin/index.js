import app from 'flarum/admin/app';
import {extend} from 'flarum/common/extend';
import EditGroupModal from "flarum/admin/components/EditGroupModal";
import Model from "flarum/common/Model";
import Group from "flarum/common/models/Group";
app.initializers.add('nickname-group-formatter', () => {
  Group.prototype.displayStyle = Model.attribute('displayStyle');

  app.extensionData
    .for('foskym-nickname-group-formatter')
    .registerSetting({
      label: app.translator.trans('foskym-nickname-group-formatter.admin.setting.showInUserPost'),
      setting: 'foskym-nickname-group-formatter.showInUserPost',
      type: 'boolean',
    })
    .registerSetting({
      label: app.translator.trans('foskym-nickname-group-formatter.admin.setting.showInUserCard'),
      setting: 'foskym-nickname-group-formatter.showInUserCard',
      type: 'boolean',
    })
    .registerSetting({
      label: app.translator.trans('foskym-nickname-group-formatter.admin.setting.showInUserCardPopover'),
      setting: 'foskym-nickname-group-formatter.showInUserCardPopover',
      type: 'boolean',
    });

  extend(EditGroupModal.prototype, 'submitData', function(data) {
    data.displayStyle = this.$('textarea').val();
  });

  extend(EditGroupModal.prototype, 'fields', function(items) {
    this.displayStyle = this.group.displayStyle() || '';
    // add item before hidden label and after icon
    items.replace('hidden', null, 5);
    items.add(
      'displayStyle',
      <div className="Form-group">
        <label>{app.translator.trans('foskym-nickname-group-formatter.admin.display')}</label>
        <div className="helpText">
          {app.translator.trans('foskym-nickname-group-formatter.admin.optional')}
        </div>
        <textarea rows="3" className="FormControl"
          placeholder='<span style="color: {groupcolor}">{username}</span>'
          value={this.group.displayStyle()}
        />
      </div>,
      10
    );
  });
});
