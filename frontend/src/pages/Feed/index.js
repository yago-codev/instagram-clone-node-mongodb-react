import React, { Component } from "react";
import io from "socket.io-client";

import api from "../../services/api";

import { Container, Post } from "./style";

import more from "../../assets/images/more.svg";
import like from "../../assets/images/like.svg";
import heartLiked from "../../assets/images/heart_liked.svg";
import comment from "../../assets/images/comment.svg";
import send from "../../assets/images/send.svg";

export default class Feed extends Component {
  state = {
    feed: [],
  };

  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get("/posts");
    const data = response.data;

    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io("http://localhost:3333");

    socket.on("post", (newPost) => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on("like", (likedPost) => {
      this.setState({
        feed: this.state.feed.map((post) =>
          post._id === likedPost._id ? likedPost : post
        ),
      });
    });
  };

  async handleLikeAdd(id) {
    await api.post(`/posts/${id}/like`);
  }

  render() {
    return (
      <Container>
        {this.state.feed.map((post) => (
          <Post key={post._id}>
            <header>
              <div>
                <span>{post.author}</span>
                <span>{post.place}</span>
              </div>

              <img src={more} alt="Mais" />
            </header>

            <img
              src={`http://localhost:3333/files/${post.image}`}
              alt={post.description}
              className="imgPost"
            />

            <footer>
              <div>
                <button type="button">
                  {post.likes > 0 ? (
                    <img
                      src={heartLiked}
                      alt="Botão de like"
                      onClick={() => this.handleLikeAdd(post._id)}
                    />
                  ) : (
                    <img
                      src={like}
                      alt="Botão de like"
                      onClick={() => this.handleLikeAdd(post._id)}
                    />
                  )}
                </button>
                <img src={comment} alt="Botão de comentários" />
                <img src={send} alt="Botão de enviar direct" />
              </div>

              <strong>
                {post.likes <= 1 ? `${post.likes} like` : `${post.likes} likes`}
              </strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </Post>
        ))}
      </Container>
    );
  }
}
