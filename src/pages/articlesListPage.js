/**
 * This creates the Article List Page for the Blog and then exports it to the App.js file
 * @returns Article List Page
 */

import articles from "./ArticleContent";
import ArticlesList from "../components/ArticlesList";

const ArticleListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles = {articles} />
        </>
    );
}

export default ArticleListPage;