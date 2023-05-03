const getAllTeamsController = async (req, res) => {
  try {
    // const [rows] = await connection.query("SELECT * FROM equipos");
    // res.send(rows);

    const teams = await req.teams.getAllTeams(req.connection);
    res.send(teams);
  } catch (e) {
    res.send(e);
  }
};

module.exports = { getAllTeamsController };
