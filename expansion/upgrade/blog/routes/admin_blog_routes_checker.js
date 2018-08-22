const fs = require("fs-extra");
const pluginChecker = require("../../../plugins");
module.exports = {
  async theFunction() {
    await pluginChecker.then(plugin => {
      plugin.forEach(theThings => {
        fs.writeJson("./expansion/upgrade/blog/routes/blogRoutes.json", {
          route: "./routes/admin_blogs"
        });
        if (theThings.switch === "blogsSwitch") {
          if (theThings.switchRoutes === "true") {
            fs.writeJson("./expansion/upgrade/blog/routes/blogRoutes.json", {
              route: `../../plugins/${theThings.folder}/switchRoutes.js`
            });
          } else {
            fs.writeJson("./expansion/upgrade/blog/routes/blogRoutes.json", {
              route: "./routes/admin_blogs"
            });
          }
        }
      });
    });
  }
};
