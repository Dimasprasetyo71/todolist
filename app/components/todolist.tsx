'use client';
import { Button } from "@nextui-org/button";
import React, { useState } from 'react';
import { UserIcon } from './UserIcon';
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
const TodoList = () => {
    const [userInput, setUserInput] = useState('');
    const [list, setList] = useState<{ id: number; value: string }[]>([]);

    const updateInput = (value: React.SetStateAction<string>) => {
        setUserInput(value);
    };

    const addItem = () => {
        if (userInput !== '') {
            const userInputItem = {
                id: Math.random(),
                value: userInput,
            };

            setList([...list, userInputItem]);
            setUserInput('');
        }
    };

    const deleteItem = (key: any) => {
        const updatedList = list.filter((item) => item.id !== key);
        setList(updatedList);
    };

    const doneItem = (index: number) => {
        const updatedTodos = [...list];
        updatedTodos.splice(index, 1);
        setList(updatedTodos);
    };

    return (
        <div className="font-sans max-w-lg mx-auto p-6">
            <div className="text-center text-4xl font-bold mb-6 text-green-600">
                Dimas Prasetyo
            </div>
            <div className="text-center text-2xl font-bold mb-6">
                TODO LIST
            </div>
            <div className="flex items-center mb-6">
                <Input
                    placeholder="Add item..."
                    className="w-full mr-2"
                    value={userInput}
                    onChange={(e) => updateInput(e.target.value)}
                />
                <Button
                    variant="ghost"
                    color="primary"
                    className="text-lg"
                    onClick={addItem}
                >
                    ADD
                </Button>
            </div>
            <Card className="bg-black text-white p-6 rounded">
                {list.length > 0 ? (
                    list.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center mb-3 animate-fade"
                        >
                            <span className="text-lg flex-grow mr-4">
                                {item.value}
                            </span>
                            <span className="flex">
                                <Button
                                    color="danger"
                                    variant="bordered"
                                    className="mr-2"
                                    startContent={<UserIcon />}
                                    onClick={() => deleteItem(item.id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={() => doneItem(index)}
                                >
                                    Done
                                </Button>
                            </span>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-lg text-gray-500">
                        No items in the list
                    </div>
                )}
            </Card>
        </div>
    );
};

export default TodoList;
