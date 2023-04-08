import moment from "moment";

export const DateTime = ({ date, time }) => {
  const dateTimeString = `${date} ${time}`;
  const formattedDateTime = moment(dateTimeString).format("MMM DD, YYYY h:mm A");

  return <>{formattedDateTime}</>;
};