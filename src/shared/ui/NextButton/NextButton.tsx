import clsx from 'clsx';
import s from './NextButton.module.css';

export interface NextButtonProps {
    className?: string;
    onClick: () => void;
}

export const NextButton = (props: NextButtonProps) => {
    const { className, onClick } = props;

    return (
        <button
            aria-label="next slide"
            type="button"
            className={clsx(s.NextButton, className)}
            onClick={onClick}
        />
    );
};
