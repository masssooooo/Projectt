import type { UserData, Program, Exercise } from '../types';


const exerciseDatabase: Exercise[] = [
  {
    name: 'Seated Mountain Pose',
    duration: 5,
    description: 'Sit tall with feet flat on the floor, shoulders relaxed, and hands resting on thighs. Focus on breathing and alignment.',
    difficulty: 'beginner',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000',
    modifications: ['Use back support if needed', 'Place feet on blocks for better grounding']
  },
  {
    name: 'Chai Cat-Cow Stretch',
    duration: 5,
    description: 'Alternate between arching and rounding your spine while seated, coordinating with breath.',
    difficulty: 'beginner',
    imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=1000',
    modifications: ['Reduce range of motion if needed', 'Support hands on thighs']
  },
  {
    name: 'Seated Twist',
    duration: 3,
    description: 'Gently twist to each side while keeping proper alignment, using the chair back for support.',
    difficulty: 'intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=1000',
    modifications: ['Reduce range of twist', 'Keep feet firmly planted']
  },
  {
    name: 'Chair Sun Salutation',
    duration: 8,
    description: 'Modified sun salutation sequence performed with chair support.',
    difficulty: 'advanced',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000',
    modifications: ['Use wall for balance', 'Modify range of motion as needed']
  }
];

export function generateProgram(userData: UserData): Program {
  const exercises = selectExercises(userData);
  const totalDuration = exercises.reduce((total, ex) => total + ex.duration, 0);
  
  const notes = generateNotes(userData);

  return {
    exercises,
    totalDuration,
    frequency: userData.sessionsPerWeek,
    notes
  };
}

function selectExercises(userData: UserData): Exercise[] {
  let selectedExercises: Exercise[] = [];
  const availableExercises = exerciseDatabase.filter(exercise => {
    if (userData.fitnessLevel === 'beginner' && exercise.difficulty !== 'beginner') {
      return false;
    }
    return true;
  });

  // Basic algorithm to select exercises based on available time
  let remainingTime = userData.availableTime;
  while (remainingTime > 0 && availableExercises.length > 0) {
    const exercise = availableExercises[Math.floor(Math.random() * availableExercises.length)];
    if (exercise.duration <= remainingTime) {
      selectedExercises.push(exercise);
      remainingTime -= exercise.duration;
    } else {
      break;
    }
  }

  return selectedExercises;
}

function generateNotes(userData: UserData): string[] {
  const notes = [
    'Always listen to your body and modify exercises as needed.',
    'Maintain proper breathing throughout the practice.',
    'Ensure your chair is stable and on a non-slip surface.',
  ];

  if (userData.healthConditions.length > 0) {
    notes.push('Consult with your healthcare provider before starting this program.');
  }

  if (userData.mobilityIssues.includes('Balance Problems')) {
    notes.push('Keep the chair close by for support during standing poses.');
  }

  return notes;
}