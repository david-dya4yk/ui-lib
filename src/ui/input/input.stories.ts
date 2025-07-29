import type {Meta, StoryObj} from "@storybook/react-vite";
import {Input} from "./input.tsx";

const meta: Meta<typeof Input> = {
  title: 'Ui/Input',
  component: Input,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Input>;

export default meta;

export const Text: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input type text without clearable'
      }
    }
  },
  args: {
    type: 'text',
    placeholder: 'Enter text',
    isClearable: false,
  }
}

export const TextWithClearable: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input type text with clearable'
      }
    }
  },
  args: {
    type: 'text',
    placeholder: 'Enter text',
    isClearable: true,
  }
}

export const Password: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input type password with toggle show password'
      }
    }
  },
  args: {
    type: 'password',
    placeholder: 'Enter password',
  }
}

export const Number: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input type number without arrows/spinners'
      }
    }
  },
  args: {
    type: 'number',
    placeholder: 'Enter number',
  }
}

export const NumberWithClearable: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input type number with clearable and without arrows/spinners'
      }
    }
  },
  args: {
    type: 'number',
    placeholder: 'Enter number',
    isClearable: true,
  }
}