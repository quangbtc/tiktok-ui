import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from '../Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const separate = data.separate ? 'separate' : '';
    const className = cx('wrapper-menu-item', {
        separate,
    });
    return (
        <Button className={className} to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
