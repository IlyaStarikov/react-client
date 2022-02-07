import { filterTypes } from '../redux/constants';

const filterMap = {
  [filterTypes.ALL]: ({
    content,
    header,
    tag,
    user,
  }) => [content, header, tag, user.name],
  [filterTypes.TAGS]: ({ tag }) => [tag],
  [filterTypes.TITLE]: ({ header }) => [header],
  [filterTypes.CREATOR]: ({ user }) => [user.name],
};

export default filterMap;
