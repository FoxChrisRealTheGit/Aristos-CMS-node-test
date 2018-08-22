const fs = require("fs-extra");
const pluginChecker = require("../../../plugins");
module.exports = {
  async theFunction() {
    await pluginChecker.then(plugin => {
      plugin.forEach(theThings => {
        fs.writeJson(
          "./expansion/upgrade/documentation-builder/routes/documentationRoutes.json",
          {
            route: "./routes/documentation.js"
          }
        );
        if (theThings.switch === "documentationSwitch") {
          if (theThings.switchRoutes === "true") {
            fs.writeJson(
              "./expansion/upgrade/documentation-builder/routes/documentationRoutes.json",
              {
                route: `../../plugins/${theThings.folder}/switchRoutes.js`
              }
            );
          } else {
            fs.writeJson(
              "./expansion/upgrade/documentation-builder/routes/documentationRoutes.json",
              {
                route: "./routes/documentation"
              }
            );
          }
        }
      });
    });
  }
};
