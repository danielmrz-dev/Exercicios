import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@danielmrz-dev/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {},
};
