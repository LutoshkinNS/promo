import clsx from 'clsx';
import { ReactNode } from 'react';
import s from './LinkWithIcon.module.css';

export interface LinkWithIconProps {
    className?: string;
    children: string | ReactNode;
    href: string;
}

export const LinkWithIcon = (props: LinkWithIconProps) => {
    const { className, children, href } = props;

    return (
        <a href={href} className={clsx(s.LinkWithIcon, className)}>
            {children}
        </a>
    );
};
