export default {
    title: 'Rw Flat Button',
    argTypes: {
        type: {
            options: ["primary", "success", "warn", "danger", "base", "black"],
            control: { type: 'select' },
            default: "primary",
            description: "The type of button"
        },
        custom: {
            control: { type: 'boolean' },
            default: false,
            description: "If true, the button will be rendered as a custom element"
        },
        text: {
            control: { type: 'text' },
            default: "Flat button",
            description: "The text of the button"
        },
        content: {
            control: { type: 'text' },
            default: "<b>Flat button</b>",
            description: "The content of the button (inner html)"
        }
    },
    parameters: {
        docs: {
            description: {
                component: "A flat button"
            }
        }
    }
};

const Template = (args) => `<rw-flat-button type="${args.type}" text="${args.text}" custom="${args.custom}" >${args.content}</rw-flat-button>`;

export const FlatButton = Template.bind({});
FlatButton.args = {
    type: 'primary',
    content: 'Flat primary button'
}