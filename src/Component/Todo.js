import React, { useEffect, useState } from "react";
import "./Todo.css";

// use to local stoarage get items

const getLocalItem = () => {
    let list = localStorage.getItem("Lists");
    if (list) {
        return JSON.parse(localStorage.getItem("Lists"));
    } else {
        return [];
    }
};

const Todo = () => {
    const [text, setText] = useState("");
    const [item, setItem] = useState(getLocalItem());

    const addItem = () => {
        if (!text) {
        } else {
            setItem([...item, text]);
            setText("");
        }
    };

    const deleteItem = (id) => {
        const upDatedItem = item.filter((element, index) => {
            return index !== id;
        });
        setItem(upDatedItem);
    };

    const removeAll = () => {
        setItem([]);
    };

    // use local storage setItem
    useEffect(() => {
        localStorage.setItem("Lists", JSON.stringify(item));
    }, [item]);

    return (
        <>
            <div className="main_div">
                <div className="child_div">
                    <figure>
                        <h1>To_Do List</h1>
                        <figcaption>Add your list here ✌ </figcaption>
                    </figure>
                    <div className="addItem">
                        <input
                            type="text"
                            placeholder="✍️ Add text..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <i
                            className="fa fa-plus add-btn"
                            title="Add Item"
                            onClick={addItem}
                        ></i>
                    </div>
                    <div className="showItem">
                        {item.map((element, index) => {
                            return (
                                <div className="eachItem" key={index}>
                                    <h3>{element}</h3>
                                    <i
                                        className="far fa-edit add-btn"
                                        title="Edit Item"
                                    ></i>
                                    <i
                                        className="far fa-trash-alt add-btn"
                                        title="Delete Item"
                                        onClick={() => deleteItem(index)}
                                    ></i>
                                </div>
                            );
                        })}
                    </div>
                    <div className="showItem">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All"
                            onClick={removeAll}
                        >
                            <span>All List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
