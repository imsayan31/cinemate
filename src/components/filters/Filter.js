import { Button, Col, Container, Row } from "react-bootstrap";
import SearchFilter from "./SearchFilter";
import DropDownFilter from "./DropDownFilter";

export default function Filter({searchTerm, setSearchTerm, genre, setGenre, language, setLanguage, genres, languages}) {
  return (
    <div className="filter-container">
      <Container>
        <Row>
            <Col>
                <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </Col>
            <Col>
                <DropDownFilter type="language" value={language} onChange={setLanguage} options={languages} />
            </Col>
            <Col>
                <DropDownFilter type="genre" value={genre} onChange={setGenre} options={genres} />
            </Col>
            <Col>
                <Button variant="secondary" onClick={() => {
                  console.log('Clearing filters');
                    setSearchTerm('');
                    setGenre('');
                    setLanguage('');
                }}>Clear Filters</Button>
            </Col>
        </Row>
      </Container>
    </div>
  );
}