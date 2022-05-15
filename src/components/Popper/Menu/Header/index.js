import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../Menu.module.scss';
const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <header className={cx('wrapper-header')}>
            <button className={cx('header-icon-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={cx('header-title')}>{title}</div>
        </header>
    );
}

export default Header;
