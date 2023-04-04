export const DateTime = ({ date, time }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = new Date(`${date}${time}`).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {formattedDate} {formattedTime}
    </>
  );
};
