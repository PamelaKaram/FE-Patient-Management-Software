import React from 'react';
import Styles from '../styles/BlogsAndArticles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const BlogArticle = ({ articles }) => {
    return (
        <div className={Styles.div}>
            <div className={Styles.header}>
                <h2 className={Styles.divTitle}>
                    Blogs & Articles
                </h2>
            </div>
            <div className={Styles.blogArticleRow}>
                {articles.map((article, index) => (
                <div
                    key={index}
                    className={`${Styles.blogArticle} ${
                    index === 0 ? Styles.firstArticle : ''
                    } ${index === articles.length - 1 ? Styles.lastArticle : ''}`}
                >
                    <div className={Styles.imageContainer}>
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className={Styles.zoomImage}
                    />
                    </div>
                    <div className={Styles.articleInfo}>
                    <div className={Styles.date}>
                        <FontAwesomeIcon
                        icon={faCalendarAlt}
                        style={{ color: '#6C9CE5', marginRight: '8px' }}
                        />
                        {article.releaseDate}
                    </div>
                    <div className={Styles.titleAndButton}>
                        <h3 className={Styles.title}>
                        <strong>{article.title}</strong>
                        </h3>
                        <button
                            className={Styles.learnMoreBtn}
                            onClick={() => window.open(article.link, '_blank')}
                        >
                            <span className={Styles.text}>Learn more</span>
                            <span className={Styles.iconContainer}>
                                <span className={Styles.icon}>&gt;</span>
                            </span>
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
  };
  
  export default BlogArticle;