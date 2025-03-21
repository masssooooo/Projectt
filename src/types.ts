export interface UserData {
  name: string;
  age: number;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  healthConditions: string[];
  mobilityIssues: string[];
  goals: string[];
  availableTime: number; // minutes per session
  sessionsPerWeek: number;
  hasChair: boolean;
  chairType: string;
  experience: string;
}

export interface Exercise {
  name: string;
  duration: number;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: string;
  modifications?: string[];
}

export interface Program {
  exercises: Exercise[];
  totalDuration: number;
  frequency: number;
  notes: string[];
}