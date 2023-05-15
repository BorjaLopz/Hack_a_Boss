function listEventsController(req, res, next) {
  console.log("Listando eventos");
}

function addEventController(req, res, next) {
  console.log("Añadiendo evento");
}

module.exports = { listEventsController, addEventController };
