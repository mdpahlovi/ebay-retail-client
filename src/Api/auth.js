export const setAuthAndToken = (user, role) => {
    const currentUser = {
        email: user.email,
    };
    if (role) {
        currentUser.role = role;
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
