import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import groups from './groups';
import entries from './entries';
import { settings, settingsByArchiveId } from './settings';
import archives, { currentArchive } from './archives';
import update from './update';

export default function getRootReducer(scope = 'main') {
  let reducers = {
    settingsByArchiveId,
    currentArchive,
    archives,
    update,
    settings,
  };

  if (scope === 'renderer') {
    reducers = {
      ...reducers,
      groups,
      entries,
      form,
    };
  }

  return combineReducers({ ...reducers });
}
