import { Factory } from 'fishery';
import moment from 'moment';
import User from './../src/models/User';

export const user = Factory.define<User>(({ sequence, onCreate }) => {
  onCreate((user) => {
    return user.$query().insert();
  });

  return User.fromJson({
    id: sequence,
    created_at: moment('2021-06-27T00:00:00Z').toISOString(),
    updated_at: moment('2021-06-27T00:00:00Z').toISOString()
  });
});
