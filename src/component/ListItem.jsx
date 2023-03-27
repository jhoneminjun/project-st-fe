import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/reset.css';
import '../style/card.css';

function ListItem(props) {
  const data = props.contentid;

  function click(e) {
    e.preventDefault();
    if (e.target.classList.contains('checked')) {
      e.target.classList.remove('checked');
      // 데이터베이스에서 삭제
    } else {
      e.target.classList.add('checked');
      // 데이터베이스에 추가
      console.log(e.target.id);
    }
  }

  return (
    <Link
      to={`/detail/${data}`}
      onClick={() => {
        window.localStorage.setItem('detail', props.name);
        window.localStorage.setItem('contentId', data);
      }}
    >
      <li className="list-item" data-target="card" id={data}>
        <a href="">
          <img src={props.picture} alt={props.name} />
          <h3>{props.name}</h3>
        </a>

        <button className="bookmark" id={data} onClick={click}></button>
      </li>
    </Link>
  );
}

export default ListItem;
