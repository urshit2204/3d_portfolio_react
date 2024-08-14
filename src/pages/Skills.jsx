// src/Skills.js
import React from 'react';

import html from '../images/html.png';
import javascript from '../images/js.jpeg';
import react from '../images/react.png';
import tailwind from '../images/tw.png';
import css from '../images/css.png';
import node from '../images/node.png';

const skills = [
    { name: 'HTML', level: 'Advanced', image: html },
    { name: 'JavaScript', level: 'Advanced', image: javascript },
    { name: 'React', level: 'Advanced', image: react },
    { name: 'Tailwind CSS', level: 'Intermediate', image: tailwind },
    { name: 'CSS', level: 'Intermediate', image: css },
    { name: 'Node.js', level: 'Intermediate', image: node },
];

const Skills = () => {
    return (
        <div className="text-white min-h-screen flex items-center justify-center pt-40">
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-28">
                <h1 className="text-4xl font-bold text-center mb-6">My Skills</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className=" p-6 rounded-lg shadow-md border border-gray-200 flex items-center"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-20 h-20 mr-4 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
                                <p>{skill.level}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
