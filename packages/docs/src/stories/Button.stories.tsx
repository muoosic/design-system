import { Button, ButtonProps } from '@muoosic/ui';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
