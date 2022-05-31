import { ComponentMeta, ComponentStory } from '@storybook/react';

import Main from '.';

const Storie = {
  title: 'Main',
  component: Main,
} as ComponentMeta<typeof Main>;

export default Storie;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Advanced React',
  description: 'Typescript, ReactJs, NextJs and Styled Components',
};
