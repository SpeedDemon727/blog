/**
 * This creates the Article Page for the Blog and then exports it to the App.js file
 * @returns Article Page
 */

import { useParams } from "react-router-dom";
import articles from "./ArticleContent";

const ArticlePage = () => {
    const { articleID } = useParams();
    const article = articles.find(article => article.name === articleID)

    return (
        <>
            <h1>{article.title} </h1>
            {article.content.map((paragraph, i) => (
                <p key = {i}>{paragraph}</p>
            ))}
        </>
    );
}

export default ArticlePage;