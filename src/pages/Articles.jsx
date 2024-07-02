import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const articlesData = [
  {
    id: 1,
    title: "The Roswell Incident",
    excerpt: "An in-depth look at the famous Roswell UFO incident.",
    image: "/images/article1.jpg",
  },
  {
    id: 2,
    title: "Phoenix Lights",
    excerpt: "Exploring the mysterious lights over Phoenix.",
    image: "/images/article2.jpg",
  },
  // Add more articles as needed
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-3xl mb-4">UFO Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <Card key={article.id}>
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{article.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => paginate(currentPage - 1)} />
          </PaginationItem>
          {[...Array(Math.ceil(articlesData.length / articlesPerPage)).keys()].map((number) => (
            <PaginationItem key={number + 1}>
              <PaginationLink href="#" onClick={() => paginate(number + 1)}>
                {number + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={() => paginate(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Articles;