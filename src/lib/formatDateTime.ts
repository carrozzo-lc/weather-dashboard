export function formatDateTime(dateString?: string): string {
  const date = dateString ? new Date(dateString) : new Date();

  // Format date
  const optionsDate: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', optionsDate);

  // Format time
  const optionsTime: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedTime = date.toLocaleTimeString('en-GB', optionsTime);

  return `${formattedDate}, ${formattedTime}`;
}