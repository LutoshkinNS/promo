import clsx from 'clsx';
import s from './Subtitle.module.css';

export interface SubtitleProps {
    className?: string;
    variant?: 'gradient' | 'primary' | 'secondary';
    children: string;
    size?: 'm' | 'l';
}

export const Subtitle = (props: SubtitleProps) => {
    const { className, variant = 'primary', children, size = 'm' } = props;

    return (
        <h2 className={clsx(s.Subtitle, s[variant], s[size], className)}>
            {children}
        </h2>
    );
};
