import PropTypes from 'prop-types';
import css from "./style.module.scss"
import clsx from 'clsx';

const FriendListItem = ({isOnline, avatar, name}) => {
    return(
        <li className={css.item}>
            <span className={clsx(
                    css.status, 
                    isOnline ? css.statusOnline : css.statusOffline
                )
            }></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

