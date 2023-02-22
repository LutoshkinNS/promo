import clsx from 'clsx';
import s from './LinkButton.module.css';

export interface LinkButtonProps {
    className?: string;
    href: string;
    children: string;
}

export const LinkButton = (props: LinkButtonProps) => {
    const { className, href, children } = props;

    return (
        <a href={href} className={clsx(s.LinkButton, className)}>
            {children}
        </a>
    );
};
