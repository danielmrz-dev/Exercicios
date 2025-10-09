import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@danielmrz/button';

const meta: Meta<ButtonComponent> = {
    component: ButtonComponent,
}

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
    args: {
        text: 'Texto'
    }
}

export const SecondaryButton: Story = {}