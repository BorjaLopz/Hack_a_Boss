const deleteAnimalController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const result = await connection.execute(
      `UPDATE animals SET name = ? WHERE id = ?`,
      [name, id]
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = { deleteAnimalController }