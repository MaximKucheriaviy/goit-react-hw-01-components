import PropTypes from 'prop-types';
import css from "./style.module.scss"
import FriendListItem from 'components/FriendListItem/FriendListItem';


const FriendList = ({friends}) => {
    return(
        <ul className={css.friendList}>
            {friends.map(({id, isOnline, name, avatar}) => <FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar}/>)}
        </ul>
    )
}

export default FriendList;

FriendList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            isOnline: PropTypes.bool,
            name: PropTypes.string,
            avatar: PropTypes.string
        })
    )
}