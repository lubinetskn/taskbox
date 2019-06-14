type ButtonProps = {
    value          : string,
    defaultChecked?: boolean,
    label          : string,
    name           : string
}

export type Props = {
    options: Array<ButtonProps>,
    title  : string
}

