const { menubar } = require("menubar");

const mb = menubar();

mb.on("ready", () => {
  console.log("app is ready");
  // your app code here

  /*   function CreateWindow() {
    const app = new Window({
      height: 800,
      width: 600,
      backgroundColor: "#13111C",
    });

    app.loadFile("./index.html");
  }

  app.whenReady().then(CreateWindow); */
});
