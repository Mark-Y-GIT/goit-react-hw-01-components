import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => (
        <FriendListItem friends={friend} key={friend.id} />
      ))}
    </ul>
  );
}
