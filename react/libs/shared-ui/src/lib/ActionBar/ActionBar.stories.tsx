import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ActionBar } from './ActionBar';

const Story: ComponentMeta<typeof ActionBar> = {
  component: ActionBar,
  title: 'ActionBar',
};
export default Story;

const Template: ComponentStory<typeof ActionBar> = (args) => (
  <ActionBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
