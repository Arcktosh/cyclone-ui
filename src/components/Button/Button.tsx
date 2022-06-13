import React from "react";

export interface ButtonProps {
label: string;
}
const Button = (props: ButtonProps) => {
return <button className="text-3xl font-bold underline">{props.label}</button>;
};

export default Button;