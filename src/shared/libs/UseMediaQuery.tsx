import { useMediaQuery } from 'react-responsive';

export const mobile = () => {
    const style = getComputedStyle(document.body);
    const mobileBp = style.getPropertyValue('--bp-400');
    return useMediaQuery({ query: `(max-width: ${mobileBp})` });
};
