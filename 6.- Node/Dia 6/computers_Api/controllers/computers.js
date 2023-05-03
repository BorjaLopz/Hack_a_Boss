const updateComputerController = async (req, res) => {
  try {
    consts[(updateParamsMiddleWare, paramsValues)] = req;
    const result = await connection.execute(
      `UPDATE computers SET ${updateParams} WHERE id = ?`,
      paramsValues
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.export = { updateComputerController }
