import React from 'react';
import moment from 'moment';

export default function PostView(props) {
  const {
    data: { id, content, created },
    onClick,
    onClose,
  } = props;
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">{content}</div>
      <div className="card-created">
        {moment(created).format('DD.MM.YYYY HH:mm:ss')}
      </div>
      {onClose && (
        <div className="card-close" onClick={() => onClose(id)}>
          <i className="material-icons">{'close'}</i>
        </div>
      )}
    </div>
  );
}
