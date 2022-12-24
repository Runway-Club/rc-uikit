export default {
  title: 'Rw Outlined Button',
  argTypes: {
    type: {
      options: ['primary', 'success', 'warn', 'danger', 'base', 'black'],
      control: { type: 'select' },
      default: 'primary',
      description: 'The type of button',
    },
    custom: {
      control: { type: 'boolean' },
      default: false,
      description: 'If true, the button will be rendered as a custom element',
    },
    text: {
      control: { type: 'text' },
      default: 'Elevated button',
      description: 'The text of the button',
    },
    content: {
      control: { type: 'text' },
      default: '',
      description: 'The content of the button (inner html)',
    },
  },
};

const Template = args => `<rw-outlined-button type="${args.type}" text="${args.text}" custom="${args.custom}" text="${args.text}" >${args.content}</rw-outlined-button>`;

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  type: 'primary',
  custom: false,
  text: 'Outlined button',
  content: '',
};
