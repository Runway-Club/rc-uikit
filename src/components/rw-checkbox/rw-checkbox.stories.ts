export default {
  title: 'Rw Checkbox Button',
  argTypes: {
    custom: {
      control: { type: 'boolean' },
      default: false,
      description: 'If true, the button will be rendered as a custom element',
    },
    text: {
      control: { type: 'text' },
      default: 'Checkbox button',
      description: 'The text of the button',
    },
    content: {
      control: { type: 'text' },
      default: '',
      description: 'The content of the button (inner html)',
    },
  },
};

const Template = args => `<rw-checkbox text="${args.text}" custom="${args.custom}" >${args.content}</rw-checkbox>
<rw-checkbox text="${args.text}" custom="${args.custom}" >${args.content}</rw-checkbox>`;

export const CheckboxButton = Template.bind({});
CheckboxButton.args = {
  custom: false,
  text: 'Checkbox button',
  content: '',
};
