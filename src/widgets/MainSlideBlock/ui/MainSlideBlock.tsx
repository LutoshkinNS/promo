import clsx from "clsx";
import { Title } from "shared/ui/Title/Title";
import { ReactNode } from "react";
import s from "./MainSlideBlock.module.css";

export interface MainSlideBlockProps {
    className?: string;
    title: string;
    children: ReactNode;
}

export const MainSlideBlock = (props: MainSlideBlockProps) => {
    const { className, title, children } = props;

    return (
        <div className={clsx(s.MainSlideBlock, className)}>
            <Title className={s.title}>{title}</Title>
            {children}
        </div>
    );
};
