export function dateFormatter(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-PT').format(date);
}