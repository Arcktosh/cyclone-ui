import "./Button.css"
export interface ButtonProps {
label?: string;
bgColor?: "primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark";
isOutlined?: boolean;
width?: number;
utilClass?: string;
icon?: string;
onClick?: () => void;
}
const Button = (props: ButtonProps) => {
    const bgColor = props.bgColor ? `btn-${props.bgColor}` : "";
    const width = props.width ? `w-${props.width}` : "";
    const utilClass = props.utilClass ? `${props.utilClass}` : "";
    const isOutlined = props.isOutlined ? 'btn-outline' : "";

return <button className={`btn ${bgColor} ${isOutlined} ${width} ${utilClass}`} onClick={()=>props.onClick}>{props.icon} {props.label}</button>;
};

export default Button;