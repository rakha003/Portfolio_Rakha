import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={project.image} alt={project.title} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text style={{ whiteSpace: 'pre-line' }}>
          {project.bodyText}
        </Card.Text>

        {project.links && project.links.length > 0 && (
          <div className="mt-3">
            {project.links.map((link, index) => (
              <Button
                key={index}
                variant="outline-primary"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="me-2"
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    bodyText: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ProjectCard;
