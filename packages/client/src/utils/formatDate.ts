export const formatDate = (dateStr: string) => {
  return new Intl.DateTimeFormat('en-US').format(new Date(dateStr));
};
