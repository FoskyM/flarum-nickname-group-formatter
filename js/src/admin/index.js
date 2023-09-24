import app from 'flarum/admin/app';
import {extend} from 'flarum/common/extend';
import EditGroupModal from "flarum/admin/components/EditGroupModal";
import Model from "flarum/common/Model";
import Group from "flarum/common/models/Group";
app.initializers.add('nickname-group-formatter', () => {
  Group.prototype.displayStyle = Model.attribute('displayStyle');

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
