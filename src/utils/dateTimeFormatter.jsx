export const DateTime = ({ date, time }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = new Date(`${date}T${time}`).toLocaleTimeString();

  return (
    <>
      {formattedDate} {formattedTime}
    </>
  );
};

