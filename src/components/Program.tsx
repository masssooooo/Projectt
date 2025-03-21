import React from 'react';
import type { Program as ProgramType } from '../types';

export function Program({ program }: { program: ProgramType }) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">
        Your Personalized Yoga Chair Program
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Program Overview</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-purple-600">Total Duration</p>
            <p className="text-2xl font-bold">{program.totalDuration} minutes</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-purple-600">Recommended Frequency</p>
            <p className="text-2xl font-bold">{program.frequency}x per week</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
        <ul className="list-disc list-inside space-y-2">
          {program.notes.map((note, index) => (
            <li key={index} className="text-gray-700">{note}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-6">Exercise Sequence</h3>
        <div className="space-y-6">
          {program.exercises.map((exercise, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <img
                  src={exercise.imageUrl}
                  alt={exercise.name}
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{exercise.name}</h4>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {exercise.duration} mins
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{exercise.description}</p>
                  {exercise.modifications && exercise.modifications.length > 0 && (
                    <div>
                      <h5 className="font-medium mb-2">Modifications:</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {exercise.modifications.map((mod, idx) => (
                          <li key={idx}>{mod}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Specific Problems to Consider</h3>
        <p className="text-gray-700">
          If you have any specific problems or conditions that need to be taken into account, please let us know so we can adjust the program accordingly.
        </p>
      </div>
    </div>
  );
}