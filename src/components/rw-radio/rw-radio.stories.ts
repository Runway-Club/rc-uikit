export default {
  title: 'Rw Radio Button',
  argTypes: {
    custom: {
      control: { type: 'boolean' },
      default: false,
      description: 'If true, the button will be rendered as a custom element',
    },
    text: {
      control: { type: 'text' },
      default: 'Radio button',
      description: 'The text of the button',
    },
    content: {
      control: { type: 'text' },
      default: '',
      description: 'The content of the button (inner html)',
    },
  },
};

const Template = args => `<rw-radio text="${args.text}" custom="${args.custom}" >${args.content}</rw-radio>`;

export const RadioButton = Template.bind({});
RadioButton.args = {
    custom: false,
    text: 'Radio button',
    content: '',
}