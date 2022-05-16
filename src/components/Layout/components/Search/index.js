import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconSearch } from '~/components/Icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 3]);
        }, 0);
        return () => {};
    }, []);
    const handleOnChangeSearch = (e) => {
        setSearchValue(e.target.value);
    };
    const handleClearSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
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
            visible={showResult && searchResult.length > 0 ? true : false}
            interactive={true}
            placement={'bottom-start'}
            onClickOutside={() => handleHideResult()}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => handleOnChangeSearch(e)}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                />
                {/* clear */}
                <button className={cx('clear')} onClick={() => handleClearSearchValue()}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                {/* loading */}
                <button className={cx('search-btn')}>
                    <IconSearch className={cx('icon-search')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
