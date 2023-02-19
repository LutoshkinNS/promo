import clsx from 'clsx';
import { ReactNode } from 'react';
import Logo from 'shared/assets/img/logo/logo.svg?url';
import { mobile } from 'shared/libs';
import s from './Layout.module.css';

export interface LayoutProps {
    className?: string;
    children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const { className, children } = props;

    const isMobile = mobile();

    return (
        <div className={s.layout}>
            {!isMobile ? (
                <header className={s.header}>
                    <img src={Logo} alt="" />
                    <button type="button">Интернет банк</button>
                </header>
            ) : null}
            <main className={s.main}>{children}</main>
        </div>
    );
};
