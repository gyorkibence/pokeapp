import React, { FC } from 'react';
import { history } from 'services/config';
import './list.scss';

type ListProps = {
  data: Array<string>,
  listTitle: string,
  emptyTitle: string,
};

const List: FC<ListProps> = ({ data, listTitle, emptyTitle }) => (
  <>
    <div className="main-subtitle">{listTitle}</div>
    {
      data.length ? (
        <div className="list-container">
          {
            data.map((name: string) => (
              <div
                role="button"
                tabIndex={0}
                onClick={() => { history.push(`/${name}`); }}
                className="list-item"
              >
                {name}
              </div>
            ))
          }
        </div>
      ) : null
    }
    {!data.length ? <div className="main-subtitle">{emptyTitle}</div> : null}
  </>
);

export default List;
