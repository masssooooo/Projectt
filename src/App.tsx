import React, { useState } from 'react';
import { Cog as Yoga } from 'lucide-react';
import { MultiStepForm } from './components/MultiStepForm';
import { Program } from './components/Program';
import { generateProgram } from './utils/programGenerator';
import type { UserData, Program as ProgramType } from './types';

function App() {
  const [program, setProgram] = useState<ProgramType | null>(null);

  const handleFormComplete = (userData: UserData) => {
    const generatedProgram = generateProgram(userData);
    setProgram(generatedProgram);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Yoga className="h-8 w-8 text-purple-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Chair Yoga Program Generator
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {!program ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Create Your Personalized Chair Yoga Program
              </h2>
              <p className="text-lg text-gray-600">
                Answer a few questions about yourself and we'll create a custom program
                tailored to your needs and goals.
              </p>
            </div>
            <MultiStepForm onComplete={handleFormComplete} />
          </>
        ) : (
          <>
            <Program program={program} />
            <div className="mt-8 text-center">
              <button
                onClick={() => setProgram(null)}
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Create New Program
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;