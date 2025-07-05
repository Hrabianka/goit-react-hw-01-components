import css from "../css modules/Friends.module.css";

const Friends = ({friends}) => {
    return (
    <div className={css.container}>
        <ul className={css.friendsList}>
            {friends.map(friend => {
                return (
                <li className={css.listItem} key={friend.id}>
                    <span className={`${css.indicator} ${friend.isOnline ? css.online : ''}`}></span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>)
            }
          )}
        </ul>
    </div>
    );
};

export default Friends