import React from 'react';
import Icon from './Icon';

export default {
  title: 'Components/UI/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { color: 'black' },
};

export const AllIcons = (args) => (
  <div className="flex flex-wrap justify-center gap-4">
    <Icon {...args} name="home" />
    <Icon {...args} name="user" />
    <Icon {...args} name="search" />
    <Icon {...args} name="close" />
    <Icon {...args} name="settings" />
    <Icon {...args} name="bell" />
    <Icon {...args} name="download" />
    <Icon {...args} name="upload" />
    <Icon {...args} name="check" />
    <Icon {...args} name="alert" />
  </div>
);
AllIcons.storyName = 'All Icons';

export const AllSizes = (args) => (
  <div className="flex items-center gap-4">
    <Icon {...args} name="close" size={4} />
    <Icon {...args} name="close" size={6} />
    <Icon {...args} name="close" size={8} />
    <Icon {...args} name="close" size={10} />
    <Icon {...args} name="close" size={12} />
    <Icon {...args} name="close" size={16} />
    <Icon {...args} name="close" size={20} />
    <Icon {...args} name="close" size={24} />
  </div>
);
AllSizes.storyName = 'All Sizes';
