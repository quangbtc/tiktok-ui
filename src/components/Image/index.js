import { useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = ({ src, className, alt, ref, fallBack: customFallback = images.noImage, ...props }) => {
    const [fallBack, setFallBack] = useState('');
    const handleErrorImage = () => {
        setFallBack(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            ref={ref}
            alt={alt}
            {...props}
            onError={handleErrorImage}
        />
    );
};

export default Image;
