import { filterTypes } from '../redux/constants';

const filterMap = {
  [filterTypes.ALL]: ({
    content,
    header,
    tag,
    user_id,
  }) => [content, header, tag, user_id],
  [filterTypes.TAGS]: ({ tag }) => [tag],
  [filterTypes.TITLE]: ({ header }) => [header],
  [filterTypes.CREATOR]: ({ user_id }) => [user_id],
};

export default filterMap;
