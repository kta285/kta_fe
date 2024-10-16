export function calculateDaysLeft(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // 두 날짜 간의 차이를 밀리초로 계산한 후, 일수로 변환
  const timeDiff = end.getTime() - start.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 밀리초 -> 일수 변환

  return daysLeft;
}
