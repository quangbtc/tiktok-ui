import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCoins,
    faEarthAfrica,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faQuestion,
    faSignOut,
    faSpinner,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as WrapperPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { UploadVideo, IconTelegram, IconMessages } from '~/components/Icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const userLogin = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
        return () => {};
    }, []);
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAfrica} />,
            title: 'English',
            to: '',
            children: {
                title: 'Languages',
                data: [
                    {
                        title: 'English',
                        code: 'en',
                    },
                    {
                        title: 'VietNam',
                        code: 'vi',
                    },
                    {
                        title: 'China',
                        code: 'cn',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
            to: '/keyboard',
        },
    ];
    const LoginItems = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'Live video',
            to: '/live-video',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/log-out',
            separate: true,
        },
    ];
    const handleOnchangeMenu = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <HeadlessTippy
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperPopper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperPopper>
                        </div>
                    )}
                    visible={searchResult.length > 0 ? true : false}
                    interactive={true}
                    placement={'bottom-start'}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                        {/* clear */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                        {/* loading */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                {!!userLogin ? (
                    <div className={cx('action')}>
                        <Tippy content="Upload videos" delay={[0, 200]}>
                            <span className={cx('action-icon')}>
                                {' '}
                                <UploadVideo />
                            </span>
                        </Tippy>
                        <Tippy content="Messages" delay={[0, 200]}>
                            <span className={cx('action-icon')}>
                                {' '}
                                <IconTelegram />
                            </span>
                        </Tippy>
                        <Tippy content="Inbox" delay={[0, 200]}>
                            <span className={cx('action-icon')}>
                                {' '}
                                <IconMessages />
                                <span className={cx('amount-inbox')}>10</span>
                            </span>
                        </Tippy>
                        <Menu listMenu={LoginItems} onChange={handleOnchangeMenu}>
                            <button className={cx('avatar')}>
                                <Image
                                    className={cx('avatar-account')}
                                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/97752d453d18365d1888203fc13074b7~c5_300x300.webp?x-expires=1652706000&x-signature=GfXkaj3TRZ6MkZr1ljgL1WfCVCw%3D"
                                    alt="accountsName"
                                    fallBack="https://thumbs.dreamstime.com/z/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                                />
                            </button>
                        </Menu>
                    </div>
                ) : (
                    <div className={cx('action')}>
                        <Button text>Upload</Button>
                        <Button primary>Login</Button>
                        <Menu listMenu={MENU_ITEMS} onChange={handleOnchangeMenu}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
