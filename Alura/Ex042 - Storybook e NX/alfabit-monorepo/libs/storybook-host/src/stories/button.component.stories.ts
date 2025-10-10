import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@danielmrz-dev/button';

const meta: Meta<ButtonComponent> = {
    component: ButtonComponent,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
        },
        theme: {
            control: { type: 'inline-radio' },
            options: ['blue', 'violet'],
        },

    }
}

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
    args: {
        text: 'Texto',
        variant: 'primary',
        disabled: false,
        theme: 'blue'
    }
}

export const PrimaryButtonDisabled: Story = {
    args: {
        ...PrimaryButton.args,
        disabled: true
    }
}

export const SecondaryButton: Story = {
    args: {
        text: 'Texto',
        variant: 'secondary',
        disabled: false,
        theme: 'blue'
    }
};

export const SecondaryButtonDisabled: Story = {
    args: {
        ...SecondaryButton.args,
        disabled: true
    }
};

export const TertiaryButton: Story = {
    args: {
        text: 'Texto',
        variant: 'tertiary',
        disabled: false,
        theme: 'blue'
    }
};

export const TertiaryButtonDisabled: Story = {
    args: {
        ...TertiaryButton.args,
        disabled: true
    }
};