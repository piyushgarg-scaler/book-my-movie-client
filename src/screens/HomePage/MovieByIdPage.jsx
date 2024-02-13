import { useParams } from "react-router-dom";
import { Card, Flex } from 'antd';
import { useGetMovieById } from "../../hooks/query/movie";

const {Meta} = Card;

const MovieByIdPage = () => {
    // const location = useLocation();
    // const pathName = location.pathname;
    const {id} = useParams();
    const { data, isLoading } = useGetMovieById(id);
    // const { movie } = data;

    if(isLoading) {
        return <>Loading movie by ID page</>
    }
    return(
        <>
        {
            data?.movie? (
                <Flex gap="middle" align="start" horizontal="true">
                <Card
                hoverable
                // onClick={(e) => handleCardClick(e,movie._id)}
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <Meta title={data.movie.title} description={data.movie.description} />
            </Card>
            </Flex>
            ):
            <h1>Movie By ID</h1>
        }
       
        </>
    )
}

export default MovieByIdPage;
