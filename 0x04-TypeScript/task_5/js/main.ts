/** 11. Brand convention & Nominal typing */

interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

interface MajorCreditsFunction {
  (subject1: MajorCredits, subject2: MajorCredits): MajorCredits;
}

interface MinorCreditsFunction {
  (subject1: MinorCredits, subject2: MinorCredits): MinorCredits;
}

const sumMajorCredits: MajorCreditsFunction = (subject1, subject2) => {
  const sumCredits = subject1.credits + subject2.credits;
  return { credits: sumCredits, brand: 'major' }
}

const sumMinorCredits: MinorCreditsFunction = (subject1, subject2) => {
  const sumCredits = subject1.credits + subject2.credits;
  return { credits: sumCredits, brand: 'minor' }
}
