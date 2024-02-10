import { Button, Input, message, Select } from "antd";
import { useCallback, useState } from "react";
import { useGetAllTheatres } from "../../hooks/query/theatre";
import { useGetAllMovies } from "../../hooks/query/movie";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useCreateSchedule } from "../../hooks/mutation/schedule";

const CreateScheduleForm = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [startDate, setStartDate] = useState(new Date());
  const [selectedMovieId, setSelectedMovieid] = useState("");
  const [selectedThreatreId, setSelectedTheatreId] = useState("");
  const [price, setPrice] = useState(0);

  const { theatres, isLoading: theatreLoading } = useGetAllTheatres();
  const { movies, isLoading: movieLoading } = useGetAllMovies();
  const { mutateAsync: createScheduleAsync } = useCreateSchedule();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await createScheduleAsync({
        movieId: selectedMovieId,
        theatreId: selectedThreatreId,
        startTime: startDate.toISOString(),
        price: parseInt(price),
      });
      messageApi.info(`Schedule created success`);
    },
    [
      createScheduleAsync,
      messageApi,
      price,
      selectedMovieId,
      selectedThreatreId,
      startDate,
    ]
  );
  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <Select
          value={selectedThreatreId}
          onChange={(e) => setSelectedTheatreId(e)}
          loading={theatreLoading}
          style={{ width: "100%" }}
          options={theatres?.map((e) => ({ value: e._id, label: e.name }))}
        />
        <div style={{ margin: "5px 0px" }} />
        <Select
          value={selectedMovieId}
          onChange={(e) => setSelectedMovieid(e)}
          loading={movieLoading}
          style={{ width: "100%" }}
          options={movies?.map((e) => ({ value: e._id, label: e.title }))}
        />
        <div style={{ margin: "5px 0px" }} />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
        <div style={{ margin: "5px 0px" }} />
        <Input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          required
          placeholder="Price"
        />
        <div style={{ margin: "5px 0px" }} />
        <Button htmlType="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreateScheduleForm;
