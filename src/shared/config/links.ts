interface Link {
    label: string;
    link: string;
}

export interface LinksConfigInterface {
    [key: string]: Link;
}

export const links: LinksConfigInterface = {
    IB: { label: 'Интернет-банк', link: 'https://my.bank-hlynov.ru' },
    SITE: {
        label: 'Заказать карту',
        link: 'https://www.bank-hlynov.ru/individuals/cards/debet/mir-privilegiya/105673/request',
    },
};
