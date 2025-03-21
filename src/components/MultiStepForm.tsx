import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { UserData } from '../types';

const initialUserData: UserData = {
  name: '',
  age: 30,
  fitnessLevel: 'beginnner',
  healthConditions: [],
  mobilityIssues: [],
  goals: [],
  availableTime: 30,
  sessionsPerWeek: 3,
  hasChair: true,
  chairType: '',
  experience: '',
};

const healthConditionOptions = [
  'High Blood Pressure',
  'Lower Back Pain',
  'Joint Issues',
  'Balance Problems',
  'None',
];

const mobilityIssueOptions = [
  'Hip Flexibility',
  'Knee Pain',
  'Shoulder Mobility',
  'None',
];

const goalOptions = [
  'Improve Flexibility',
  'Better Posture',
  'Stress Relief',
  'Pain Management',
  'General Fitness',
];

export function MultiStepForm({ onComplete }: { onComplete: (data: UserData) => void }) {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<UserData>(initialUserData);

  const updateUserData = (field: keyof UserData, value: any) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    onComplete(userData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= num ? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => updateUserData('name', e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              value={userData.age}
              onChange={(e) => updateUserData('age', parseInt(e.target.value))}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fitness Level
            </label>
            <select
              value={userData.fitnessLevel}
              onChange={(e) => updateUserData('fitnessLevel', e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Health & Mobility</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Health Conditions
            </label>
            <div className="space-y-2">
              {healthConditionOptions.map((condition) => (
                <label key={condition} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userData.healthConditions.includes(condition)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateUserData('healthConditions', [...userData.healthConditions, condition]);
                      } else {
                        updateUserData(
                          'healthConditions',
                          userData.healthConditions.filter((c) => c !== condition)
                        );
                      }
                    }}
                    className="mr-2"
                  />
                  {condition}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobility Issues
            </label>
            <div className="space-y-2">
              {mobilityIssueOptions.map((issue) => (
                <label key={issue} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userData.mobilityIssues.includes(issue)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateUserData('mobilityIssues', [...userData.mobilityIssues, issue]);
                      } else {
                        updateUserData(
                          'mobilityIssues',
                          userData.mobilityIssues.filter((i) => i !== issue)
                        );
                      }
                    }}
                    className="mr-2"
                  />
                  {issue}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Goals & Availability</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Goals
            </label>
            <div className="space-y-2">
              {goalOptions.map((goal) => (
                <label key={goal} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={userData.goals.includes(goal)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateUserData('goals', [...userData.goals, goal]);
                      } else {
                        updateUserData(
                          'goals',
                          userData.goals.filter((g) => g !== goal)
                        );
                      }
                    }}
                    className="mr-2"
                  />
                  {goal}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Time (minutes per session)
            </label>
            <input
              type="number"
              value={userData.availableTime}
              onChange={(e) => updateUserData('availableTime', parseInt(e.target.value))}
              className="w-full px-4 py-2 border rounded-md"
              min="10"
              max="120"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sessions per Week
            </label>
            <input
              type="number"
              value={userData.sessionsPerWeek}
              onChange={(e) => updateUserData('sessionsPerWeek', parseInt(e.target.value))}
              className="w-full px-4 py-2 border rounded-md"
              min="1"
              max="7"
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Equipment & Experience</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Do you have a suitable chair?
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={userData.hasChair}
                  onChange={() => updateUserData('hasChair', true)}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={!userData.hasChair}
                  onChange={() => updateUserData('hasChair', false)}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          {userData.hasChair && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chair Type
              </label>
              <input
                type="text"
                value={userData.chairType}
                onChange={(e) => updateUserData('chairType', e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="e.g., Dining chair, Office chair"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Previous Yoga Experience
            </label>
            <textarea
              value={userData.experience}
              onChange={(e) => updateUserData('experience', e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              rows={4}
              placeholder="Tell us about your yoga experience..."
            />
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 text-purple-600 hover:text-purple-700"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            onClick={handleNext}
            className="flex items-center px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 ml-auto"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 ml-auto"
          >
            Generate Program
          </button>
        )}
      </div>
    </div>
  );
}