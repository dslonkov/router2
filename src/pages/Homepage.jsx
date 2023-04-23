import React from 'react';

import AllPosts from '../components/AllPosts';

export default function Homepage() {
  return (
    <article className="article">
      <h1 className="article__title">Главная</h1>
      <p className="article__paragraph">
        Только ​на Сочи Автодроме вас ждет уникальная возможность промчаться по
        трассе Формулы 1 на максимально возможной скорости в управляемом заносе
        на легендарной «королеве дрифта» Nissan Silvia!
      </p>
      <AllPosts />
    </article>
  );
}
