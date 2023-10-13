/**
 * This creates the Article List Page for the Blog and then exports it to the App.js file
 * @returns Article List Page
 */

import articles from "./ArticleContent";
import { Link } from "react-router-dom";

const ArticleListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            {articles.map(article => (
                <Link key = {article.name} className = "article-list-item" to = {`/articles/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            ))}
        </>
    );
}

export default ArticleListPage;