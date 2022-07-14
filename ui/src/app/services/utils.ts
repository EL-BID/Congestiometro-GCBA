export const isValid = <T>(a: T | null | undefined): a is T => a !== null && a !== undefined;

export const range = (n: number) =>
  Array(n)
    .fill('')
    .map((_, i) => i);

export const daysRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const days = Math.round((new Date(end).getTime() - startDate.getTime()) / (1000 * 3600 * 24));
  return range(days).map(
    (differenceInDays) => new Date(new Date(start).setDate(startDate.getDate() + differenceInDays))
  );
};

export const getPartialDate = (date: Date) => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

export const normalizeString = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\d\s]/g, '')
    .toLocaleLowerCase();
};
