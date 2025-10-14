import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@danielmrz-dev/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multiline: false,
    id: '',
    label: ''
  },
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: true
  },
};

export const PrimaryWithLabel: Story = {
  args: {
    ...Primary.args,
    id: '1',
    label: 'Label'
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Multiline.args,
    label: 'Label',
    id: '2'
  },
};


