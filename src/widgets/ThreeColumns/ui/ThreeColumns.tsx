import clsx from "clsx";
import { ReactNode } from "react";
import s from "./ThreeColumns.module.css";

export interface ThreeColumnsProps {
    className?: string;
    children: ReactNode;
    img?: ReactNode;
}

export const ThreeColumns = (props: ThreeColumnsProps) => {
    const { className, children, img } = props;

    return (
        <div className={clsx(s.ThreeColumns, className)}>
            <div className={s.imgContainer}>{img}</div>
            <div className={s.children}>{children}</div>
        </div>
    );
};
