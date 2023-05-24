function Profile(props) {
  const { image, name } = props;
  return (
    <div className="usuario">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Profile;
