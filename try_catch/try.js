let json = '{ "age": 30 }'; 
try {

    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    blabla(); // unexpected error

    alert(user.name);

} catch (e) {

    if (e instanceof SyntaxError) {
        alert("JSON Error: " + e.message);
    } else {
        throw e;
    }

}