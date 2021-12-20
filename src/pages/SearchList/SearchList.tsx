import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { parents as mockParents } from '../../mockData/parents';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import styles from './styles.module.css';

type Filter = {
  id: number;
  name: string;
  state: boolean;
  order: number;
};

type ModalWrapperProps = {
  show: boolean;
  handleClose: () => void;
  filterClick: (id: number) => void;
  filters: Filter[];
};

const baseFilters: Record<number, Filter> = {
  1: {
    id: 1,
    name: 'Filter 1',
    state: false,
    order: 1,
  },
  2: {
    id: 2,
    name: 'Filter 2',
    state: false,
    order: 2,
  },
  3: {
    id: 3,
    name: 'Filter 3',
    state: false,
    order: 3,
  },
};

const ModalWrapper = ({ show, handleClose, filters, filterClick }: ModalWrapperProps) => {
  return (
    <Modal show={show} onHide={handleClose} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Filters</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
          {filters.map(x => (
            <ListGroup.Item key={x.id} className={styles.listItem} onClick={() => {
              filterClick(x.id);
            }}>
              {x.name}
              {x.state ? <FiToggleRight /> : <FiToggleLeft />}

            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

const SearchList = () => {
  const [show, setShow] = useState(false);
  const onHandleClose = () => {
    setShow(false);
  };

  const onFiltersClick = () => {
    setShow(true);
  };

  const onFilterClick = (id: number) => {
    const newFilters: Record<number, Filter> = {
      ...filters,
      [id]: {
        ...filters[id],
        state: !filters[id].state,
      }
    };
    setFilters(newFilters);
  };

  const [filters, setFilters] = useState(baseFilters);

  return (
    <div>
      <h1>Results</h1>
      <ListGroup>
        {mockParents.map(x => (
          <ListGroup.Item key={x.id}>
            <Link className="nav-link" to={`/profile?id=${x.id}`}>{`${x.kids[0].name}'s Parents`}</Link>

          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="primary" onClick={onFiltersClick}>Filters</Button>
      <ModalWrapper show={show} handleClose={onHandleClose} filters={Object.values(filters)} filterClick={onFilterClick} />
    </div>
  );
};

export default SearchList;
