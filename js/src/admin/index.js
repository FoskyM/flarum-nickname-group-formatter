import app from 'flarum/admin/app';
import {extend} from 'flarum/common/extend';
import EditGroupModal from 'flarum/admin/components/EditGroupModal';
app.initializers.add('nickname-group-formatter', () => {
  extend(EditGroupModal.prototype, 'submitData', function(data) {
    data.displayStyle = this.displayStyle;
  });

  extend(EditGroupModal.prototype, 'fields', function(items) {
    this.displayStyle = this.group.data.attributes.displayStyle || '';
    // add item before hidde label and after icon
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
               value={this.displayStyle} oninput={e => this.displayStyle = e.target.value}
        />
      </div>,
      10
    );
  });
});
