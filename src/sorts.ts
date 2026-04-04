/**
 * Sort by day and month, ignoring year
 */
export function sortByDayCyclicalPredicate<
  T extends { date?: string | undefined },
>(a: T, b: T) {
  const now = new Date();
  const todayKey = (now.getMonth() + 1) * 100 + now.getDate();

  const aDate = new Date(a.date || "");
  const bDate = new Date(b.date || "");

  const aMonth = aDate.getMonth() + 1;
  const bMonth = bDate.getMonth() + 1;

  const aDay = aDate.getDate();
  const bDay = bDate.getDate();

  const aKey = aMonth * 100 + aDay;
  const bKey = bMonth * 100 + bDay;

  const aDiff = (aKey - todayKey + 1200) % 1200;
  const bDiff = (bKey - todayKey + 1200) % 1200;

  return aDiff - bDiff;
}
