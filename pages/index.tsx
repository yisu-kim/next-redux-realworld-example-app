import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { Articles } from 'types';
import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  const { data, error, isFetching, isError, isSuccess } = useArticles();

  return (
    <div className="home-page">
      <Head>
        <title>Home — Conduit</title>
      </Head>

      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            {isFetching ? (
              <div className="article-preview">Loading articles...</div>
            ) : isError ? (
              <span>Error: {error.message}</span>
            ) : (
              isSuccess &&
              data.articles.map((article, index) => (
                <div className="article-preview" key={index}>
                  <div className="article-meta">
                    <a href="profile.html">
                      <Image
                        src={article.author.image}
                        alt={`${article.author.username}'s profile image`}
                        width={32}
                        height={32}
                      />
                    </a>
                    <div className="info">
                      <a href="" className="author">
                        {article.author.username}
                      </a>
                      <span className="date">{article.createdAt}</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                      <i className="ion-heart"></i> {article.favoritesCount}
                    </button>
                  </div>
                  <a href="" className="preview-link">
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      {article.tagList.map((tag) => (
                        <li
                          key={tag}
                          className="tag-default tag-pill tag-outline"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </a>
                </div>
              ))
            )}
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const useArticles = () => {
  return useQuery<Articles, AxiosError>('articles', async () => {
    const {
      data: {
        data: { getArticles },
      },
    } = await axios.post('api/graphql', {
      query: `
        query {
          getArticles {
            articles {
              title
              description
              tagList
              createdAt
              favoritesCount
              author {
                username
                image
                following
              }
            }
          }
        }
      `,
    });

    return getArticles;
  });
};
