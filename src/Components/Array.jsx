import React, { useState } from 'react';

const StudentsList = () => {
  // Array of student objects
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      course: 'Software Development',
      completed: true,
    },
    {
      id: 2,
      name: 'Brew no',
      email: 'brew.no@example.com',
      course: 'Data Science',
      completed: false,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      course: 'Web Development',
      completed: false,
    },
    {
      id: 4,
      name: 'Devjit P',
      email: 'DevjtP@example.com',
      course: 'Data Analysis',
      completed: true,
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      email: 'ethan.hunt@example.com',
      course: 'Software Development',
      completed: false,
    },
  ];

  // State to filter students who have not completed their course
  const [filterIncomplete, setFilterIncomplete] = useState(false);

  // Filter students based on completion status
  const filteredStudents = filterIncomplete
    ? students.filter((student) => !student.completed)
    : students;

  return (
    <div className="flex flex-col items-center justify-center h-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Students List</h1>

      {/* Button to toggle between showing all students and those who haven't completed */}
      <button
        onClick={() => setFilterIncomplete(!filterIncomplete)}
        
      >
        {filterIncomplete ? 'Show All Students' : 'Show Incomplete Students'}
      </button>

      {/* Mapping through the student list */}
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {Students.map((student) => (
          <li key={student.id} className="border-b py-4">
            <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
            <p className="text-gray-600">Email: {student.email}</p>
            <p className="text-gray-600">Course: {student.course}</p>
            <p className="text-gray-600">
              Status: {student.completed ? 'Completed' : 'In Progress'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
