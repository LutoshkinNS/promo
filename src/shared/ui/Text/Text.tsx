import clsx from "clsx";
import s from "./Text.module.css";

export interface TextProps {
    className?: string;
    children: string;
    variant?: "primary" | "secondary" | "third";
    size?: "m" | "l";
    align?: "left" | "right" | "center";
}

export const Text = (props: TextProps) => {
    const {
        className,
        variant = "primary",
        size = "m",
        children,
        align = "left",
    } = props;

    return (
        <p className={clsx(s.Text, s[variant], s[size], s[align], className)}>
            {children}
        </p>
    );
};
