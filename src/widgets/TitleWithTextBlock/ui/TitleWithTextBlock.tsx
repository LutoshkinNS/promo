import clsx from "clsx";
import { Subtitle } from "shared/ui/Subtitle";
import { Text } from "shared/ui/Text";
import s from "./TitleWithTextBlock.module.css";

export interface TitleWithTextBlockProps {
    className?: string;
    title: string;
    text: string;
    align?: "left" | "right" | "center";
    textAlign?: "left" | "right" | "center";
    variant?: "primary" | "secondary";
}

export const TitleWithTextBlock = (props: TitleWithTextBlockProps) => {
    const {
        className,
        title,
        text,
        align = "left",
        textAlign,
        variant = "primary",
    } = props;

    return (
        <div
            className={clsx(
                s.TitleWithTextBlock,
                s[align],
                s[variant],
                className
            )}
        >
            <Subtitle className={s.title} variant={variant}>
                {title}
            </Subtitle>
            <Text className={s.text} align={textAlign} variant={variant}>
                {text}
            </Text>
        </div>
    );
};
