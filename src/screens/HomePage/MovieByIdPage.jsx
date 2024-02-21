import { useParams } from "react-router-dom";
import { Button, Card, Flex } from "antd";
import { useGetMovieById, useGetMovieSchedule } from "../../hooks/query/movie";

const { Meta } = Card;

const MovieByIdPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMovieById(id);
  const { data: movieSchduleData, isLoading: scheduleLoading } =
    useGetMovieSchedule(id);

  if (isLoading || scheduleLoading) {
    return <>Loading movie by ID page</>;
  }

  return (
    <>
      {data?.movie ? (
        <Flex gap="middle" align="start" horizontal="true">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              />
            }
          >
            <Meta
              title={data.movie.title}
              description={data.movie.description}
            />
          </Card>
          <div>
            {movieSchduleData &&
              movieSchduleData.schedule.map((e) => (
                <div
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  key={e._id}
                >
                  <p>Theatre: {e.theatre.name}</p>
                  <p>Start Time: {new Date(e.startTime).toLocaleString()}</p>
                  <p>
                    Price:{" "}
                    {e.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </p>
                  <Button>Book Show</Button>
                </div>
              ))}
          </div>
        </Flex>
      ) : (
        <h1>Movie Not Found</h1>
      )}
    </>
  );
};

export default MovieByIdPage;
