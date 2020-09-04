const world = '🗺️';

export function hello(word: string = world): void {
  console.log(`Hello ${world}! `);
}

hello(world);