export function getPreviousHourWindow() {
    const now = new Date();

    const hourEnd = new Date(now);
    hourEnd.setMinutes(0, 0, 0);

    const hourStart = new Date(hourEnd);
    hourStart.setHours(hourStart.getHours() - 1);

    return { hourStart, hourEnd };
}


export function getPreviousDayWindow() {
  const now = new Date();

  const dayEnd = new Date(now);
  dayEnd.setHours(0, 0, 0, 0);

  const dayStart = new Date(dayEnd);
  dayStart.setDate(dayStart.getDate() - 1);

  return { dayStart, dayEnd };
}
