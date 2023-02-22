import clsx from 'clsx';
import { ReactNode } from 'react';
import Logo from 'shared/assets/img/logo/logo.svg?url';
import { mobile } from 'shared/libs';
import { LinkButton } from 'shared/ui/LinkButton';
import { links } from 'shared/config/links';
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
                    <div className={s.linksBlock}>
                        <LinkButton href={links.IB.link}>
                            {links.IB.label}
                        </LinkButton>
                        <LinkButton href={links.SITE.link}>
                            {links.SITE.label}
                        </LinkButton>
                    </div>
                </header>
            ) : null}
            <main className={s.main}>{children}</main>
        </div>
    );
};
