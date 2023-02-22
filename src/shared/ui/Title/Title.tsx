import clsx from 'clsx';
import s from './Title.module.css';

export interface TitleProps {
    className?: string;
    children: string;
    size?: 'l' | 'm';
    variant?: 'primary' | 'gradient';
    align?: 'left' | 'right' | 'center';
}

export const Title = (props: TitleProps) => {
    const {
        className,
        children,
        size = 'l',
        variant = 'primary',
        align = 'left',
    } = props;

    return (
        <h2 className={clsx(s.Title, s[size], s[variant], s[align], className)}>
            {children}
        </h2>
    );
};
