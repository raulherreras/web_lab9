// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/tables", function(req, res) {
    res.render("tablesView", {tables: tableData, waitlist: waitListData, layout: "tables"});
  });

  app.get("/reserve", function(req, res) {
    res.render("emptyView", {layout: "reserve"});
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render("emptyView");
  });
};
