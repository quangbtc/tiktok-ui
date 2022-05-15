import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from '~/components/Popper/Menu/Header';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, listMenu = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: listMenu }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((menu, index) => {
            const isParent = !!menu.children; //Check has children
            return (
                <MenuItem
                    data={menu}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prevState) => [...prevState, menu.children]);
                        } else {
                            onChange(menu);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                        {history.length > 1 && (
                            <Header
                                title="Languages"
                                onBack={() => {
                                    setHistory((prevState) => prevState.slice(0, prevState.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </WrapperPopper>
                </div>
            )}
            delay={[0, 500]}
            interactive={true}
            placement={'bottom-end'}
            visible
        >
            {children}
        </Tippy>
    );
}

export default Menu;
