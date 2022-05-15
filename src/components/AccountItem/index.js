import classNames from 'classnames/bind';
import styles from './AccountItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-avatar')}>
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/97752d453d18365d1888203fc13074b7~c5_300x300.webp?x-expires=1652706000&x-signature=GfXkaj3TRZ6MkZr1ljgL1WfCVCw%3D"
                    alt="avatar-account"
                />
            </div>
            <div className={cx('wrapper-content')}>
                <h4 className={cx('account-name')}>
                    {' '}
                    VTV news
                    <span className={cx('check-icon')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </h4>
                <p className={cx('account-content')}>This is news channel</p>
            </div>
        </div>
    );
}

export default AccountItem;
