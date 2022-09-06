import Profile from "./profile/Profile";
import user from "../user.json";
import data from "../data.json";
import Statistics from "./Statistics/Statistics";


export const App = () => {
  return (
    <div
      style={{
        fontSize: 14,
        color: '#010101'
      }}
    >
      React homework template
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics title="Statistick" data={data}/>
    </div>
  );
};
