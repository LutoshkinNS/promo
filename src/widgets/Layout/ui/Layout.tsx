import clsx from "clsx";
import { ReactNode } from "react";
import s from "./Layout.module.css";

export interface LayoutProps {
    className?: string;
    children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const { className, children } = props;

    return (
        <div className={s.layout}>
            <header className={s.header} />
            <main className={s.main}>{children}</main>
        </div>
    );
};
