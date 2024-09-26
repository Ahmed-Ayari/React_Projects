export default function User({ user }) {
  const {
    avatar_url,
    name,
    login,
    followers,
    following,
    public_repos,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div className="div">
        <img src={avatar_url} alt="User" />
      </div>
      <div className="div">
        <a href={`https://api.github.com/users/${login}`}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })}${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="div">
        <div>
          <p>Public Repos: {public_repos}</p>
        </div>
        <div>
          <p>Followers: {followers}</p>
        </div>
        <div>
          <p>Following: {following}</p>
        </div>
      </div>
    </div>
  );
}
