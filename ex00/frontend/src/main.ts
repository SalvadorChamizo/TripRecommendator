function main() {
    console.log("Entra");
    const app = document.getElementById("app");
    if (app)
        app.innerHTML = "<div>Hello World</div>";
    console.log("Sale");
}

main();