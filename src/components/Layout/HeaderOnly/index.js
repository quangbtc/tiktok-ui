import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
const cx = classNames.bind(styles);
function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
