import { FunctionalComponent, h } from 'preact'
import NavBar from '../components/NavBar'
import PopularTags from '../components/PopularTags'
import { getArticles, getArticlesByTag, getFeeds } from '../services'
import ArticlePreview from '../components/ArticlePreview'
import { useEffect, useState } from 'preact/hooks'
import Pagination from '../components/Pagination'
import { getCurrentUrl, route } from 'preact-router'
import { useRootState } from '../store'

interface HomeProps {
  tag?: string;
}

const Home: FunctionalComponent<HomeProps> = (props) => {
  const [articles, setArticles] = useState<Article[]>([])
  const [articlesCount, setArticlesCount] = useState(0)
  const [page, setPage] = useState(1)
  const [{ user }] = useRootState()

  const currentActive = getCurrentUrl() === '/my-feeds' ? 'personal' : props.tag ? 'tag' : 'global'

  const fetchFeeds = async () => {
    setArticles([])
    setArticlesCount(0)

    switch (currentActive) {
      case 'global': {
        const { articles = [], articlesCount = 0 } = await getArticles(page)
        setArticles(articles)
        setArticlesCount(articlesCount)
        break
      }
      case 'tag': {
        const { articles = [], articlesCount = 0 } = await getArticlesByTag(props.tag!, page)
        setArticles(articles)
        setArticlesCount(articlesCount)
        break
      }
      case 'personal': {
        const { articles = [], articlesCount = 0 } = await getFeeds(page)
        setArticles(articles)
        setArticlesCount(articlesCount)
      }
    }
  }

  const setArticle = (articleIndex: number, article: Article) => {
    const articlesCopy = [...articles]
    articlesCopy[articleIndex] = article
    setArticles(articlesCopy)
  }

  useEffect(() => {
    fetchFeeds()
  }, [page, currentActive])

  useEffect(() => {
    if (!user) route('/login')
  }, [user])

  return (
    <div className="home-page">

      <div className="banner">
        <div className="container">
          <h1 className="logo-font">ISMAWebEditor</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">

          <div className="col-md-9">
            <NavBar currentActive={currentActive} {...{ tag: props.tag }} />

            {/* {articles.map((article, index) => (
              <ArticlePreview key={article.slug} article={article} setArticle={article => setArticle(index, article)} />
            ))}

            <Pagination count={articlesCount} page={page} setPage={setPage} /> */}
          </div>

          <div className="col-md-3">
            <PopularTags />
          </div>

        </div>
      </div>
    </div>
  )
}
export default Home
