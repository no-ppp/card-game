{
  /* Logic to meter the score
   * should think about something
   * more clever later will see */
}

export function scoreMeter(time) {
  let multiplier = Math.floor(1000 / time);
  return multiplier;
}
