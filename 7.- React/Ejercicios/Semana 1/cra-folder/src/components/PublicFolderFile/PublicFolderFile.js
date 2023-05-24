function PublicFolderFile() {
  return (
    <div className="App">
      <div>
        <h1>Foto public folder</h1>
      </div>
      <img src={process.env.PUBLIC_URL + "/foto.jpg"} alt="foto.jpg flor" />
    </div>
  );
}

export default PublicFolderFile;
