import React from "react";
import { Header, Card, Image } from "semantic-ui-react";

const NewsCard = ({ article }) => {
  return (
    <Card
      key={article.index}
      image={article.urlToImage}
      header={article.title}
      meta={`By: ${article.author} at ${article.name}`}
      description={article.description}
      extra={<Header as="h6">{`Published at ${article.publishedAt}`}</Header>}
      href={article.url}
    ></Card>
  );
};

export default NewsCard;
