import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, listMenu = [] }) {
    const renderItem = () => {
        return listMenu.map((menu, index) => (
            <MenuItem data={menu} key={index} />
        ));
    };

    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>{renderItem()}</WrapperPopper>
                </div>
            )}
            delay={[0, 500]}
            interactive={true}
            placement={'bottom-end'}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
