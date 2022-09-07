import PropTypes from 'prop-types';
// import css from "./style.module.css"
import FriendListItem from 'components/FriendListItem/FriendListItem';


const FriendList = ({friends}) => {
    return(
        <ul className="friend-list">
            {friends.map(({id, isOnline, name, avatar}) => <FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar}/>)}
        </ul>
    )
}

export default FriendList;

FriendList.propTypes = {
    users: PropTypes.array
}