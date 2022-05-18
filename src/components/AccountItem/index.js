import classNames from 'classnames/bind';
import styles from './AccountItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <div className={cx('wrapper-avatar')}>
                <Image src={data.avatar} alt={data.full_name} />
            </div>
            <div className={cx('wrapper-content')}>
                <h4 className={cx('account-name')}>
                    {' '}
                    {data.nickname}
                    {data.tick && (
                        <span className={cx('check-icon')}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                    )}
                </h4>
                <p className={cx('account-content')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
