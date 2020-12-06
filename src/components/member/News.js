import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    state = {
        news:
        [
            {
                id: 0,
                userId: 12345678,
                userName: "Casindad, Mc Allain",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis eum repellendus dolores quasi error?
                        Magnam in aspernatur sapiente accusantium minima obcaecati
                        incidunt deleniti atque nemo laudantium velit,
                        iure delectus libero!`,
                likes: 5000,
                comments:
                [
                    {
                        id: 0,
                        newsId: 0,
                        userId: 12345678,
                        userName: "Casindad, Mc Allain",
                        content: `Reiciendis eum repellendus dolores quasi error?`,
                        likes: 2000,
                        dateTimePosted: "2020-Dec-6 8:00am",
                        liked: false,
                    },
                    {
                        id: 1,
                        newsId: 0,
                        userId: 13572468,
                        userName: "Casindad, Marilou",
                        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                        likes: 1000,
                        dateTimePosted: "2020-Dec-6 9:45am",
                        liked: false,
                    },
                    {
                        id: 2,
                        newsId: 0,
                        userId: 24681357,
                        userName: "Casindad, Rio",
                        content: `Magnam in aspernatur sapiente accusantium minima obcaecati
                        incidunt deleniti atque nemo laudantium velit,
                        iure delectus libero!`,
                        likes: 1000,
                        dateTimePosted: "2020-Dec-6 12:00pm",
                        liked: false,
                    }
                ],
                dateTimePosted: "2020-Dec-6 7:30am",
                liked: false,
            },
            {
                id: 1,
                userId: 13572468,
                userName: "Casindad, Marilou",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eum repellendus dolores quasi error?
                Magnam in aspernatur sapiente accusantium minima obcaecati
                incidunt deleniti atque nemo laudantium velit,
                iure delectus libero!`,
                likes: 1000,
                comments:
                [
                    {
                        id: 0,
                        newsId: 1,
                        userId: 13572468,
                        userName: "Casindad, Marilou",
                        content: `Reiciendis eum repellendus dolores quasi error?`,
                        likes: 2000,
                        dateTimePosted: "2020-Dec-6 11:57am",
                        liked: false,
                    },
                    {
                        id: 1,
                        newsId: 1,
                        userId: 87654321,
                        userName: "Casindad, Rhian Kisses",
                        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                        likes: 1000,
                        dateTimePosted: "2020-Dec-6 12:00pm",
                        liked: false,
                    }
                ],
                dateTimePosted: "2020-Dec-6 11:56am",
                liked: false,
            },
            {
                id: 2,
                userId: 87654321,
                userName: "Casindad, Rhian Kisses",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eum repellendus dolores quasi error?
                Magnam in aspernatur sapiente accusantium minima obcaecati
                incidunt deleniti atque nemo laudantium velit,
                iure delectus libero!`,
                likes: 2000,
                comments:
                [],
                dateTimePosted: "2020-Dec-6 4:01pm",
                liked: false,
            },
            {
                id: 3,
                userId: 24681357,
                userName: "Casindad, Rio",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eum repellendus dolores quasi error?
                Magnam in aspernatur sapiente accusantium minima obcaecati
                incidunt deleniti atque nemo laudantium velit,
                iure delectus libero!`,
                likes: 1000,
                comments:
                [],
                dateTimePosted: "2020-Dec-6 8:37pm",
                liked: false,
            },
            {
                id: 4,
                userId: 13245768,
                userName: "Casindad, Remelinda",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eum repellendus dolores quasi error?
                Magnam in aspernatur sapiente accusantium minima obcaecati
                incidunt deleniti atque nemo laudantium velit,
                iure delectus libero!`,
                likes: 100,
                comments:
                [
                    {
                        id: 0,
                        newsId: 4,
                        userId: 24681357,
                        userName: "Casindad, Rio",
                        content: `Reiciendis eum repellendus dolores quasi error?`,
                        likes: 2000,
                        dateTimePosted: "2020-Dec-6 10:47pm",
                        liked: false,
                    },
                    {
                        id: 1,
                        newsId: 4,
                        userId: 87654321,
                        userName: "Casindad, Rhian Kisses",
                        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                        likes: 1000,
                        dateTimePosted: "2020-Dec-6 10:51pm",
                        liked: false,
                    }
                ],
                dateTimePosted: "2020-Dec-6 10:45pm",
                liked: false,
            }
        ]
    }

    handleNewsLike = newsItem => {
        const news = [...this.state.news];
        const index = news.indexOf(newsItem);

        news[index] = {...newsItem};
        news[index].liked = !news[index].liked;

        news[index].liked === true ? news[index].likes++ : news[index].likes--

        this.setState({news});
    }

    addComment = newsItem => {
        const news = [...this.state.news];
        const index = news.indexOf(newsItem);

        news[index] = {...newsItem};
        this.setState({news});
    }

    handleCommentLike = comment => {
        const news = [...this.state.news];
        const newsItem = news.filter(newsItem =>
            newsItem.id === comment.newsId
        )
        const newsIndex = news.indexOf(newsItem[0]);
        const commentIndex = news[newsIndex].comments.indexOf(comment);
        news[newsIndex].comments[commentIndex].liked = !news[newsIndex].comments[commentIndex].liked;

        news[newsIndex].comments[commentIndex].liked === true ?
        news[newsIndex].comments[commentIndex].likes++ :
        news[newsIndex].comments[commentIndex].likes--

        this.setState({news});
    }

    render() { 
        return (
            <div className="mt-5 px-3 pb-5">
                {
                    this.state.news.map(newsItem =>
                        <NewsItem key={newsItem.id} newsItem={newsItem}
                        handleNewsLike={this.handleNewsLike} addComment={this.addComment}
                        handleCommentLike={this.handleCommentLike}  />
                    )
                }
            </div>
        );
    }
}
 
export default News;