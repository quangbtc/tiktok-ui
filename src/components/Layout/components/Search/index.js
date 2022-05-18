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
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValue}&type=less`,
        )
            .then((res) => res.json())

            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch((err) => {});
        return () => {};
    }, [searchValue]);
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
                        {searchResult &&
                            searchResult.length > 0 &&
                            searchResult.map((result) => {
                                return <AccountItem data={result} key={result.id} />;
                            })}
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
                {showResult && searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => handleClearSearchValue()}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                )}
                {/* loading */}
                <button className={cx('search-btn')}>
                    <IconSearch className={cx('icon-search')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
