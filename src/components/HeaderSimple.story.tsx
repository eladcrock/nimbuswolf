import attributes from './attributes.json';
import { StoryWrapper } from './StoryWrapper/StoryWrapper';
import { HeaderSimple } from './HeaderSimple';

export default { title: 'HeaderSimple' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={HeaderSimple} />;
}
