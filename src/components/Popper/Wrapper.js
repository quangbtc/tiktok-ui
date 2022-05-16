import className from 'classnames/bind';
import styles from '~/components/Popper/Popper.module.scss';
const cx = className.bind(styles);

function Wrapper({ children }) {
    const classNames = cx('wrapper');
    return <div className={classNames}>{children}</div>;
}
export default Wrapper;
