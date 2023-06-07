import bell from '../../../../assets/icons/bell.svg';

import styles from './NotificationIcon.module.scss';

const NotificationIcon = (props: { count: number }) => (
    <div className={`${styles.notification} h-6 mr-2 md:mr-0`}>
        <span>{props.count}</span>
        <img src={bell} alt='notifications' />
    </div>
);

export { NotificationIcon };
