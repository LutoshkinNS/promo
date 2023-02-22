import clsx from 'clsx';
import s from './Title.module.css';

export interface TitleProps {
    className?: string;
    children: string;
    size?: 'l' | 'm';
    variant?: 'primary';
}

export const Title = (props: TitleProps) => {
    const { className, children, size = 'l', variant = 'primary' } = props;

    return (
        <h2 className={clsx(s.Title, s[size], s[variant], className)}>
            {children}
        </h2>
    );
};
