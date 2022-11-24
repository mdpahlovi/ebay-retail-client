export const setAuthAndToken = (user, role, name, img) => {
    const currentUser = { email: user.email, role: role };
    if (name || img) {
        currentUser.name = name;
        currentUser.avatar = img;
    } else {
        currentUser.name = user.displayName;
        currentUser.avatar = user.photoURL;
    }

    fetch(`http://localhost:5000/user/${user?.email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
    })
        .then((res) => res.json())
        .then((data) => localStorage.setItem("ebay-token", data.token));
};
