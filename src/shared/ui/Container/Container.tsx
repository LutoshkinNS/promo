import clsx from "clsx";
import { ReactNode } from "react";
import s from "./Container.module.css";

export interface ContainerProps {
    className?: string;
    align?: "center";
    children: ReactNode;
}

export const Container = (props: ContainerProps) => {
    const { className, align = "center", children } = props;

    return (
        <div className={clsx(s.Container, s[align], className)}>{children}</div>
    );
};
