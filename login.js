const login = (username, password) => {
    if (!username)
        return false;
    if (username === "Bao") {
        if (password === "1601")
            return true
    }
    return false;
}