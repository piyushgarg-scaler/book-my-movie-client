import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetAllMovies } from "../../hooks/query/movie";

const { Meta } = Card;
const HomePage = () => {
  const { movies, isLoading } = useGetAllMovies();

  if (isLoading) {
    return <>Loading....</>;
  }

  return (
    <>
      <Row>
        {movies &&
          movies.map((movie) => {
            return (
              <Col xs={24} sm={24} md={12} lg={6} key={movie._id}>
                <Link to={`/movie/${movie._id}`}>
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
                    <Meta title={movie.title} description={movie.description} />
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default HomePage;
