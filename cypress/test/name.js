function checkName(name) {
    if (name.includes("@")) {
        return "USER";
    } else if (name.includes(".")) {
        return "USER";
    }else {
        return name;
    }
}

//Here i made this line so i can export this function to anthor file
module.exports = checkName;