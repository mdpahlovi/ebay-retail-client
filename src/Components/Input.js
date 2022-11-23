import React from "react";

const Input = ({ type, name, text }) => {
    const handelLabel = (event) => {
        const input = event.target;
        const label = event.target.nextSibling;
        if (event.target.value) {
            input.classList.add("border-primary");
            label.classList.add("label-top");
        } else {
            input.classList.remove("border-primary");
            label.classList.remove("label-top");
        }
    };
    return (
        <div onBlur={handelLabel} className="relative">
            <input type={type} name={name} className="input-field peer" required={type === "email" || type === "password" ? true : false} />
            <label htmlFor={name} className="input-label peer-focus:label-top">
                {text}
            </label>
        </div>
    );
};

export default Input;
