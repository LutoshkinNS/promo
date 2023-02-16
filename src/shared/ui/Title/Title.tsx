import clsx from "clsx";
import s from "./Title.module.css";

export interface TitleProps {
    className?: string;
    children: string;
    size?: "l" | "m";
}

export const Title = (props: TitleProps) => {
    const { className, children, size = "l" } = props;

    return <h2 className={clsx(s.Title, s[size], className)}>{children}</h2>;
};
