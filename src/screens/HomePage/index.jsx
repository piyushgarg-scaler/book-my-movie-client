import { Card, Flex } from 'antd';
import { useNavigate } from "react-router-dom";
import { useGetAllMovies } from "../../hooks/query/movie";

const { Meta } = Card;
const HomePage = () => {
    const navigate = useNavigate();
    const { movies, isLoading } = useGetAllMovies();

    if(isLoading) {
        return <>Loading....</>
    }

    const handleCardClick = (e, id) => {
        e.preventDefault();
        navigate(`/movieById/${id}`);
    }
    return (
        <>
        <Flex gap="middle" align="start" horizontal="true">
        {
           movies && ( movies.map((movie) => {
            return (
            <div key={movie._id}>
            <Card
            hoverable
            onClick={(e) => handleCardClick(e,movie._id)}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title={movie.title} description={movie.description} />
        </Card>
        </div>)
            })
           )
        }
        </Flex>        
        </>
    )
}

export default HomePage;
